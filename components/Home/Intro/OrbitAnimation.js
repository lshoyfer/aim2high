"use client";
import styles from "./intro.module.css";
import { useEffect, useRef } from "react";

/**
 * For the linked list FIFO structure I use to implement trails in the animation
 */
class Node {
    constructor(data, next=null) {
        this.data = data;
        this.next = next;
    }
}
class LinkedList {
    #maxLength;
    #length = 0; 
    constructor({ maxLength, initData = null }) {
        this.#maxLength = maxLength;
        this.head = initData && ++this.#length && new Node(initData);
    }

    /** For the FIFO, adds a node to the front of the LL */
    prepend(data) { 
        if (this.#length === 0) {
            this.head = new Node(data);
            ++this.#length;
            return;
        }
        const node = new Node(data);
        if (this.#length > this.maxLength)
            this.#pop();

        node.next = this.head;
        this.head = node;
        ++this.#length;
    }

    /** Pops the tail node out 
     * The tail node is considered dynamically tied to this.maxLength, so
     * by updating this value (publically), I effectively cut off the excess as a side-effect
     * (#pop is used when max length is naturally reached to discard old position values). */
    #pop() {
        if (this.#length <= 1) {
            this.head = null;
            return;
        }

        let iterNode = this.head;
        let prevIterNode = null;
        while (iterNode.next) {
            prevIterNode = iterNode;
            iterNode = iterNode.next; 
        }

        prevIterNode.next = null;
        --this.#length;
    }
    
    set maxLength(newMaxLength) {
        this.#maxLength = newMaxLength;
        for (const [i, node] of this.entries())
            if (i === this.#maxLength - 1)
                node.next = null;
    }

    get maxLength() {
        return this.#maxLength;
    }

    *[Symbol.iterator]() { 
        let iterNode = this.head;
        while (iterNode) {
            yield iterNode;
            iterNode = iterNode.next;
        }
    }

    *entries() {
        let i = 0;
        for (const node of this) 
            yield [i++, node];
    }

    /** Debug */
    // _repr() {
    //     const output = [];
    //     for (const { data } of this)
    //         output.push(data);
    //     console.log(this.#length, output);
    // }
}

/**
 * Manages events for when Balls have to be clipped (go behind the planet) with a 
 * conductor/master EventTarget that is used in the DrawBus class to coordinate drawing
 * timings for proper appearance.
 */
class ClipEmitter extends EventTarget {
    static conductor = new EventTarget(); // manages all ClipEmitters;
    constructor(id) {
        super()
        this.id = id;
        this.addEventListener("clip", () => {
            const event = new CustomEvent("add", { detail: this.id });
            ClipEmitter.conductor.dispatchEvent(event);
        })
        this.addEventListener("unclip", () => {
            const event = new CustomEvent("remove", { detail: this.id });
            ClipEmitter.conductor.dispatchEvent(event);
        })
    }
}

/**
 * @typedef {Object} Point
 * @property {Number} x
 * @property {Number} y
 */
/**
 * @typedef {Object} OrbitPath
 * @property {Point} start
 * @property {Point} end
 */

/**
 * Represents a Ball with an orbit path and animation properties.
 */
class Ball {
    // constants
    #radius = 25;
    #numTrails = 50; // the actual number of trails is computed based off average fps (dTime) but this is used as a constant coefficient in calculation
    #clipEvent = new CustomEvent("clip");
    #unclipEvent = new CustomEvent("unclip");
    // declarations
    #path; #x; #y; #accumulator; #stepSign; #clipEmitter; #positionHistory;
    // initializations
    #trailRadii = {};
    static #ballCount = 0;

    /**
     * Creates a Ball object
     * @param {Object} config - Configuration object for the Ball.
     * @param {OrbitPath} config.path - The Ball's orbit path for its animation.
     * @param {number} config.originFactor - A sliding scale of where the ball begins its animation along the path, 
     * in the range set [-1,1], where -1 is at the `start` Point and 1 is at the `end` Point along the path.
     * @param {number} config.stepRadians - The amount in radians each step of the animation will increment through Math.sin by (controls animation speed).
     * @param {Promise<number>} config.averageDTime - An okay average estimate of dTime for this device as measured in the useEffect for 200ms.
     */
    constructor({ path, originFactor, stepRadians, averageDTime }) {
        this.id = ++Ball.#ballCount;
        this.#clipEmitter = new ClipEmitter(this.id);

        this.stepRadians = stepRadians;
        this.#stepSign = 1;

        this.#path = path;
        const { start, end } = this.#path;

        // measures the distance a sine wave ([-PI/2, 0) and (0 to +PI/2]) will traverse,
        // which is equal to half the distance of the path's range (each wave takes a half)
        this.#path.xWaveDistance = (end.x - start.x)/2;
        this.#path.yWaveDistance = (end.y - start.y)/2;
        const { xWaveDistance, yWaveDistance } = this.#path;

        this.#path.centerX = start.x + xWaveDistance
        this.#path.centerY = start.y + yWaveDistance;
        const { centerX, centerY } = this.#path;

        // Initialize position fields based off the origin factor
        this.#accumulator = Math.asin(originFactor);
        const sinMod = Math.sin(this.#accumulator);
        this.#x = sinMod * xWaveDistance + centerX;
        this.#y = sinMod * yWaveDistance + centerY;

        this.#positionHistory = new LinkedList({ maxLength: this.#numTrails });

        averageDTime.then((dTimeAvg) => {
            this.#positionHistory.maxLength = Math.round(this.#numTrails * 10/dTimeAvg);
            this.#numTrails = this.#positionHistory.maxLength;
            this.#trailRadii = {};
            for (let i = 0; i < this.#numTrails; ++i)
                this.#trailRadii[i] = this.#radius - i * (this.#radius / this.#numTrails);
            console.log(dTimeAvg, this.#numTrails);
        });
        
        for (let i = 0; i < this.#numTrails; ++i)
            this.#trailRadii[i] = this.#radius - i * (this.#radius / this.#numTrails);
    }

    calcNextPos(dTime) {
        const { xWaveDistance, yWaveDistance, centerX, centerY } = this.#path;
        
        // save current position to history buffer
        this.#positionHistory.prepend({ x: this.#x, y: this.#y });

        // calculate new position
        this.#accumulator += this.#stepSign * this.stepRadians * dTime;
        const sinMod = Math.sin(this.#accumulator);
    
        this.#x = sinMod * xWaveDistance + centerX;
        this.#y = sinMod * yWaveDistance + centerY;

        // Just so the accumulator's value doesn't get too high even if this is sinusoidal 
        if (this.#accumulator.toFixed(2) >= Math.PI/2) {
            this.#accumulator = Math.PI/2
            this.#stepSign = -this.#stepSign;
        } else if (this.#accumulator.toFixed(2) <= -Math.PI/2) {
            this.#accumulator = -Math.PI/2;
            this.#stepSign = -this.#stepSign;
        }
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.#x, this.#y, this.#radius, 0, 2*Math.PI);
        ctx.fill();

        for (const [i, { data: { x, y } }] of this.#positionHistory.entries()) {
            ctx.beginPath();
            ctx.arc(x, y, this.#trailRadii[i], 0, 2*Math.PI);
            ctx.fill();
        }

        if (this.#stepSign < 0) {
            this.#clipEmitter.dispatchEvent(this.#clipEvent);
        } else {
            this.#clipEmitter.dispatchEvent(this.#unclipEvent);
        }
    }
}

/**
 * Manages drawing timings of all Balls using ClipEmitter's conductor
 */
class DrawBus {
    #bus = {};
    constructor(ctx, ...balls) {
        for (const ball of balls)
            this.#bus[ball.id] = { ball, clipped: false};

        ClipEmitter.conductor.addEventListener("add", ({ detail: id }) => {
            this.#bus[id].clipped = true;
        });

        ClipEmitter.conductor.addEventListener("remove", ({ detail: id }) => {
            this.#bus[id].clipped = false;
        });
    }

    /**
     * Manages the draw order of the bus w/ clipping & executes
     * @param {Object} ctx 
     * @param {number} dTime 
     * @param {Promise<number>} averageDTime 
     */
    draw(ctx, dTime, averageDTime) {
        // it starts to break over 1000ms (1fps) so this is insurance to
        // keep the animation offset properly as a last resort
        if (dTime >= 1000) dTime = 500;
        dTime /= 1000; // here instead of inside every Ball.draw for better performance

        // draw clippable balls first
        for (const { ball, clipped } of Object.values(this.#bus)) {
            if (clipped) {
                ball.draw(ctx);
                ball.calcNextPos(dTime);
            }
        }

        // clip
        ctx.fillStyle = "black";
        ctx.globalCompositeOperation = "destination-out";
        ctx.beginPath();
        ctx.arc(480, 480, 332.60, 0, 2*Math.PI);
        ctx.fill();

        ctx.fillStyle = "#314E6B";
        ctx.globalCompositeOperation = "source-over";

        // draw non-clippable balls after 
        for (const { ball, clipped } of Object.values(this.#bus)) {
            if (!clipped) {
                ball.draw(ctx);
                ball.calcNextPos(dTime);
            }
        }
    }
}

export default function OrbitAnimaton() {
    const canvasRef = useRef();

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        ctx.fillStyle = "#314E6B";
        ctx.strokeStyle = "red";
        ctx.lineWidth = 3;

        // the calculations involved across all the code here to estimate this
        // create a heavy upfront cost to load... but I'm measuring it and it seems fine.
        /** Provides an okay estimate of the average dTime of this device, if the device has dynamic fps, 
         * oh well, I'd rather not recalcuate all these costly objects and rearrange LL's and arrays
         * on every frame just to support this. So, dynamic fps like the new iPhone pro's may experience
         * a very very slight trail length change as they scroll. I may fix this in the future idk.
         */
        const measureAverageDTime = () => {
            let lastFrameTime = 0;
            let dTime = 0;
            let total = 0;
            let frameCount = 0;
            let measureAverageDTimeID;
        
            return new Promise((resolve) => {
                const measure = (currentFrameTime) => {
                    dTime = (lastFrameTime === 0) ? 0 : currentFrameTime - lastFrameTime;
                    lastFrameTime = currentFrameTime;
                    total += dTime;
        
                    if (++frameCount >= 20) {
                        cancelAnimationFrame(measureAverageDTimeID);
                        resolve((total / frameCount).toFixed(2));
                    } else {
                        measureAverageDTimeID = requestAnimationFrame(measure);
                    }
                };
        
                measureAverageDTimeID = requestAnimationFrame(measure);
            });
        };
        const estimatePromise = measureAverageDTime();

        // Still gotta play with the exact numbers and paths probably
        const ballDiagonal = new Ball({
            path: { start: { x: 160, y: 160 }, end: { x: 800, y: 800 } },
            originFactor: -1,
            stepRadians: Math.PI/3,
            averageDTime: estimatePromise
        });
        const ballHorizontal = new Ball({
            path: { start: { x: 80, y: 480 }, end: { x: 880, y: 480 } },
            originFactor: 0,
            stepRadians: Math.PI/3,
            averageDTime: estimatePromise
        });
        const ballDiagonalMirroredInverse = new Ball({
            path: { start: { x: 800, y: 160}, end: { x: 160, y: 800} },
            originFactor: -0.75,
            stepRadians: Math.PI/3,
            averageDTime: estimatePromise
        })

        const drawBus = new DrawBus(ctx, ballDiagonal, ballHorizontal, ballDiagonalMirroredInverse);

        const DTIME_INITBUFFER = 16.67; // ms; For a smoother unpause/init feel.
        let lastFrameTime = 0;
        let dTime = DTIME_INITBUFFER; 

        document.addEventListener("visibilitychange", () => {
            if (document.visibilityState === "hidden") {
                dTime = DTIME_INITBUFFER;
                lastFrameTime = 0;
            }
        });

        const drawBall = (currentFrameTime) => {
            // clear balls 
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // draw balls & trails
            drawBus.draw(ctx, dTime, estimatePromise);
            dTime = (lastFrameTime === 0) ? DTIME_INITBUFFER : currentFrameTime - lastFrameTime;
            lastFrameTime = currentFrameTime;

            requestAnimationFrame(drawBall);
        }
        requestAnimationFrame(drawBall);
    }, []);

    return (
        <canvas width="960" height="960" id={styles.orbit} ref={canvasRef} />
    )
}
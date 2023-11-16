"use client";
import styles from "./intro.module.css";
import { useEffect, useRef } from "react";

const TAU = 2*Math.PI;

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
        if (this.#length >= this.maxLength)
            this.#pop();

        node.next = this.head;
        this.head = node;
        ++this.#length;
    }

    /** Pops the tail node out. Used when max length is naturally reached to discard old position values. */
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
    #numTrails = 25;
    #clipEvent = new CustomEvent("clip");
    #unclipEvent = new CustomEvent("unclip");
    // declarations
    #path; #x; #y; #accumulator; #stepSign; #clipEmitter; #positionHistory; #stepRadians;
    // initialization
    #trailRadii = {};
    static #ballCount = 0;

    /**
     * Creates a Ball object
     * @param {Object} config - Configuration object for the Ball.
     * @param {OrbitPath} config.path - The Ball's orbit path for its animation.
     * @param {number} config.originFactor - A sliding scale of where the ball begins its animation along the path, 
     * in the range set [-1,1], where -1 is at the `start` Point and 1 is at the `end` Point along the path.
     * @param {number} config.stepRadians - The amount in radians each step of the animation will increment through Math.sin by (controls animation speed).
     * @param {number} [config.startClipped=false] - Whether to start the ball & its trails behind the SVG planet or in front
     */
    constructor({ path, originFactor, stepRadians, startClipped = false }) {
        this.id = Ball.#ballCount++;
        this.#clipEmitter = new ClipEmitter(this.id);

        this.#stepRadians = stepRadians;
        this.#stepSign = 1;

        this.startClipped = startClipped;
    
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
        
        for (let i = 0; i < this.#numTrails; ++i)
            this.#trailRadii[i] = this.#radius - i * (this.#radius / this.#numTrails);
    }

    calcNextPos(dTimeFactor) {
        const { xWaveDistance, yWaveDistance, centerX, centerY } = this.#path;
        
        // save current position to history buffer
        this.#positionHistory.prepend({ x: this.#x, y: this.#y });

        // calculate new position
        this.#accumulator += this.#stepSign * this.#stepRadians * dTimeFactor;
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
        // draw balls
        ctx.beginPath();
        ctx.arc(this.#x, this.#y, this.#radius, 0, TAU);
        ctx.fill();

        // read position history & draw trails
        for (const [i, { data: { x, y } }] of this.#positionHistory.entries()) {
            ctx.beginPath();
            ctx.arc(x, y, this.#trailRadii[i], 0, TAU);
            ctx.fill();
        }

        // dispatch clip state
        if (this.startClipped ? this.#stepSign > 0 : this.#stepSign < 0) {
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
    #maxUpdatesPerSecond = 60; // this essentially sets the frame rate of the animation.
    #updateInterval = 1000 / this.#maxUpdatesPerSecond;
    #constantDTimeFactor = 1 / this.#maxUpdatesPerSecond;
    #dTimeCount = 0;
    #bus = {};
    constructor(ctx, ...balls) {
        for (const ball of balls)
            this.#bus[ball.id] = { ball, clipped: ball.startClipped};

        ClipEmitter.conductor.addEventListener("add", ({ detail: id }) => {
            this.#bus[id].clipped = true;
        });

        ClipEmitter.conductor.addEventListener("remove", ({ detail: id }) => {
            this.#bus[id].clipped = false;
        });

        // NOTE: If you hide the tab and come back there's a little speed up that happens to the balls
        // but I honestly kind of like it so instead of fixing that I'm going to just keep it haha
        document.addEventListener("visibilitychange", () => {
            if (document.visibilityState === "hidden") {
                this.#constantDTimeFactor = 0; 
            } else {
                this.#constantDTimeFactor = 1 / this.#maxUpdatesPerSecond;
            }
        });
    }

    /**
     * Manages the draw order of the bus w/ clipping & executes
     * @param {Object} ctx 
     * @param {number} dTime 
     */
    #draw(ctx, dTime) {
        ctx.clearRect(0, 0, 960, 960);

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
        ctx.arc(480, 480, 332.60, 0, TAU);
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

    draw(ctx, dTime) {
        // if you're at an FPS < trailUpdatesPerSec for too long I don't want dTimeCount to grow unbounded
        if (this.#dTimeCount > 1000) 
            this.#dTimeCount = 0;

        this.#dTimeCount += dTime;

        if (this.#dTimeCount >= this.#updateInterval) {
            this.#draw(ctx, this.#constantDTimeFactor);
            this.#dTimeCount -= this.#updateInterval;
        }
    }
}

export default function OrbitAnimaton() {
    const canvasRef = useRef();

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "#314E6B";

        // Still gotta play with the exact numbers and paths probably
        const ballDiagonal = new Ball({
            path: { start: { x: 160, y: 160 }, end: { x: 800, y: 800 } },
            originFactor: -1,
            stepRadians: Math.PI/3
        });
        const ballHorizontal = new Ball({
            path: { start: { x: 80, y: 480 }, end: { x: 880, y: 480 } },
            originFactor: 0,
            stepRadians: Math.PI/3,
            startClipped: true
        });
        const ballDiagonalMirroredInverse = new Ball({
            path: { start: { x: 800, y: 160}, end: { x: 160, y: 800} },
            originFactor: -0.65,
            stepRadians: Math.PI/3,
            startClipped: true
        })

        const drawBus = new DrawBus(ctx, ballDiagonal, ballHorizontal, ballDiagonalMirroredInverse);

        const DTIME_INITBUFFER = 16.67; // ms; For a smoother unpause/init feel.
        let lastFrameTime = 0;
        let dTime = DTIME_INITBUFFER; 

        const drawBall = (currentFrameTime) => {
            // draw balls & trails
            drawBus.draw(ctx, dTime);
            dTime = (lastFrameTime === 0) ? DTIME_INITBUFFER : currentFrameTime - lastFrameTime;
            lastFrameTime = currentFrameTime;

            requestAnimationFrame(drawBall);
        }
        requestAnimationFrame(drawBall);
    }, []);

    // I haven't made this dynamically configurable -- a lot of values mess up if you change width and height here,
    // and I don't plan on making it dynamic as I don't need it, though it's not difficult.
    return (
        <canvas width="960" height="960" id={styles.orbit} ref={canvasRef} />
    )
}
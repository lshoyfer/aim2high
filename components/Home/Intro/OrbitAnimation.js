"use client";
import styles from "./intro.module.css";
import { useEffect, useRef } from "react";

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
    #path; #x; #y; #accumulator; #stepSign; #clipEmitter;
    #clipEvent = new CustomEvent("clip");
    #unclipEvent = new CustomEvent("unclip");
    static #ballCount = 0;

    /**
     * Creates a Ball object
     * @param {Object} config - Configuration object for the Ball.
     * @param {OrbitPath} config.path - The Ball's orbit path for its animation.
     * @param {number} config.originFactor - A sliding scale of where the ball begins its animation along the path, 
     * in the range set [-1,1], where -1 is at the `start` Point and 1 is at the `end` Point along the path.
     * @param {number} config.stepRadians - The amount in radians each step of the animation will increment through Math.sin by (controls animation speed).
     */
    constructor({ path, originFactor, stepRadians }) {
        this.id = ++Ball.#ballCount;
        this.#clipEmitter = new ClipEmitter(this.id);

        this.stepRadians = stepRadians;
        this.#stepSign = 1;

        this.#path = path;
        const { start, end } = this.#path;

        // measures the distance a sine wave ([-PI/2, 0) and (0 to +PI/2]) will traverse,
        // which is half the distance of the path's range for each
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
    }

    #calcNextPos(dTime) {
        const { xWaveDistance, yWaveDistance, centerX, centerY } = this.#path;
        
        this.#accumulator += this.#stepSign * this.stepRadians * (dTime/1000);
        const sinMod = Math.sin(this.#accumulator);
    
        this.#x = sinMod * xWaveDistance + centerX;
        this.#y = sinMod * yWaveDistance + centerY;

        // Just so the accumulator's value doesn't get too high even if this is sinusoidal 
        if (this.#accumulator.toFixed(2) >= Math.PI/2) {
            this.#accumulator = Math.PI/2
            this.#stepSign = -this.#stepSign;
        }
        if (this.#accumulator.toFixed(2) <= -Math.PI/2) {
            this.#accumulator = -Math.PI/2;
            this.#stepSign = -this.#stepSign;
        }
    }

    draw(ctx, dTime) {
        ctx.beginPath();
        ctx.arc(this.#x, this.#y, 25, 0, 2*Math.PI);
        ctx.fill();

        if (this.#stepSign < 0) {
            this.#clipEmitter.dispatchEvent(this.#clipEvent);
        } else {
            this.#clipEmitter.dispatchEvent(this.#unclipEvent);
        }

        this.#calcNextPos(dTime)
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

    draw(ctx, dTime) {
        // draw clippable balls first
        for (const key of Object.keys(this.#bus)) {
            const { ball, clipped } = this.#bus[key];
            if (clipped) {
                ball.draw(ctx, dTime);
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
        for (const key of Object.keys(this.#bus)) {
            const { ball, clipped } = this.#bus[key];
            if (!clipped) {
                ball.draw(ctx, dTime);
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
        
        // Still gotta play with the exact numbers and paths probably
        const ballDiagonal = new Ball({
            path: { start: { x: 160, y: 160 }, end: { x: 800, y: 800 } },
            originFactor: -1,
            stepRadians: Math.PI/3
        });
        const ballHorizontal = new Ball({
            path: { start: { x: 80, y: 480 }, end: { x: 880, y: 480 } },
            originFactor: 0,
            stepRadians: Math.PI/3
        });
        const ballDiagonalMirroredInverse = new Ball({
            path: { start: { x: 800, y: 160}, end: { x: 160, y: 800} },
            originFactor: -0.5,
            stepRadians: Math.PI/3
        })

        const drawBus = new DrawBus(ctx, ballDiagonal, ballHorizontal, ballDiagonalMirroredInverse);

        let lastTime = 0;
        let dTime = 0;

        const drawBall = (timeStamp) => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            drawBus.draw(ctx, dTime);
            dTime = timeStamp - lastTime;
            lastTime = timeStamp;

            requestAnimationFrame(drawBall);
        }
        requestAnimationFrame(drawBall);
    }, []);

    return (
        <canvas width="960" height="960" id={styles.orbit} ref={canvasRef} />
    )
}
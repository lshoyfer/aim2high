"use client";
import { useEffect, useState, useRef } from "react";

export default function PathAnimation({ pathsClassName }) {
    const svgElement = useRef();
    const path1 = useRef();
    const path2 = useRef();
    const path3 = useRef(); // left to right, this is the rightmost & longest curve

    // TODO dynamic scaling based off of screen size, perhaps use intersectionobserver api?
    useEffect(() => {
        const SCALE = 0.15;
        const PATHS = [path1, path2, path3];
        const LONGESTPATHLENGTH = path3.current.getTotalLength();

        const listenerFunction = () => {
            PATHS.forEach((path) => {
                const drawOffset = Math.max(LONGESTPATHLENGTH - (window.scrollY * SCALE), 0);
                path.current.style.strokeDashoffset = drawOffset;
            });
        }

        window.addEventListener('scroll', listenerFunction);
        return () => window.removeEventListener('scroll', listenerFunction);
    }, []);

    return (
        <div>
            <svg ref={svgElement} width="108" height="128" viewBox="0 0 54 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    className={pathsClassName}
                    ref={path1}
                    d="M2.77637 53.2838C3.77637 42.2838 6.27635 28.7838 19.7764 28.7838C33.2764 28.7838 32.7764 25.2838 33.2764 8.28384" stroke="#B5D1EE" strokeWidth="5" strokeLinecap="round"
                />
                <path
                    className={pathsClassName}
                    ref={path2}
                    d="M10.2764 58.2839C10.2764 39.7839 17.3542 36.2839 26.2764 36.2839C35.1986 36.2839 41.9949 35.5568 41.9949 5.293" stroke="#6CABEB" strokeWidth="5" strokeLinecap="round"
                />
                <path
                    className={pathsClassName}
                    ref={path3}
                    d="M18.0264 61.2838C18.0264 45.7838 22.5264 43.7838 34.5264 43.7838C46.5264 43.7838 51 24.7838 51 2.78384" stroke="#5486B8" strokeWidth="5" strokeLinecap="round"
                />
            </svg>
        </div>
    );
}
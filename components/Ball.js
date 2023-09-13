"use client";
import styles from "@/app/home.module.css";
import { useEffect, useRef, useState } from 'react';

const TRAILCOUNT = 30; // 30-40 are magic numbers

function TrailEntity({ fading, styleData }) {
    return (
        <div 
            className={`${styles.trail} ${fading ? styles.fading : ""}`} 
            style={{ ...styleData, transition: fading ? "all 0.5s ease-in" : 'none' }}
        />
    );
}

export default function Ball({ color, path }) {
    const ballRef = useRef();
    const [trailData, setTrailData] = useState(
        Array.from(
            { length: TRAILCOUNT }, 
            () => ({ fading: false, styleData: {}, lastUpdate: null })
        )
    );

    useEffect(() => {
        let index = 0;
        const updateTrail = (timestamp) => {
            if (ballRef.current) {
                const boundaryRect = ballRef.current.parentNode.getBoundingClientRect();
                const ballRect = ballRef.current.getBoundingClientRect(); 
                const newTrailStyles = { 
                    left: ballRect.x - boundaryRect.x, 
                    top: ballRect.y - boundaryRect.y, 
                    zIndex: window.getComputedStyle(ballRef.current).getPropertyValue("z-index"),
                    backgroundColor: color
                };

                setTrailData(prev => {
                    const newTrails = [...prev];
                    newTrails[index] = { styleData: newTrailStyles, lastUpdate: timestamp, fading: false };

                    const needsFadingIndex = newTrails.findIndex(data => !data.fading && timestamp - data.lastUpdate > 50);
                    newTrails[needsFadingIndex] = { ...newTrails[needsFadingIndex], fading: true};
                    return newTrails;
                })


                index = (index + 1) % TRAILCOUNT;
                requestAnimationFrame(updateTrail);
            }
        };

        requestAnimationFrame(updateTrail);

        return () => cancelAnimationFrame(updateTrail);
    }, [color]);


    return (
        <>
          <div className={`${styles.ball} ${path}`} style={{ backgroundColor: color }} ref={ballRef}></div> 
          {trailData.map(({ fading, styleData }, i) => 
            <TrailEntity key={i} fading={fading} styleData={styleData} />
          )}
        </>
    );
}
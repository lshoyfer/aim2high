"use client";
import styles from "./intro.module.css";
import { useEffect, useRef, useState } from 'react';

const TRAILCOUNT = 30; // 30-40 are magic numbers

/** TODO: Rewrite ALL of this, probably in Canvas API.
 * I've been thoroughly looking through the code, its design,
 * and thinking of different design paths, and there's lots of issues
 * in this code, which solving causes other issues, and so on.
 * Rewriting this in canvas with a different design is probably 
 * the best approach.
*/

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
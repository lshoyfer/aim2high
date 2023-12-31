"use client";
import { useEffect, useState, useRef } from "react";

/*
    I sepeated this into a different component so that I could control 
    whether to unmount it and thus call useEffect's cleanup
*/
function PathBusinessLogic({ pathsClassName, svgId, type }) {
    const svgElement = useRef();
    const path1 = useRef();
    const path2 = useRef();
    const path3 = useRef(); // left to right, this is the rightmost & longest curve

    useEffect(() => {
        const PATHS = [path1, path2, path3];

        const observerCallback = (entries, observer) => {
            entries.forEach((entry) => {
                /*  
                    the path.current && check is due to the possibility of the observerCallback
                    still being executed before useEffect cleanup, as in the case of router navigation 
                    for exmaple 
                */
                if (entry.isIntersecting)
                    PATHS.forEach((path) => {
                        path.current && (path.current.style.strokeDashoffset = 0);    
                    })
                else
                    PATHS.forEach((path) => {
                        path.current && (path.current.style.strokeDashoffset = 100);    
                    })
            });
        }
        const observer = new IntersectionObserver(observerCallback, {
            root: null,
            rootMargin: '0px',
            threshold: 1
        })
        observer.observe(svgElement.current);

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <svg ref={svgElement} id={svgId} width="108" height="128" viewBox="0 0 54 64" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        </>
    );
}

export default function PathAnimation(props) {
    /*
        Because the state starts off as false, if you load the site exactly
        where the animation is while on desktop, there's a very very minor pop-in.
        To tell if we're on "desktop" requires client side APIs so I cannot set
        the initial state properly or I'd receive nasty Hydration errors so I'm
        forced into using useEffect, or at least I don't know of any working alternative.
        Ideally I'd convert all of this to CSS only but I already wrote this
        and the CSS route has ended up being its own bag of worms so I
        reverted to this cause in the grand scheme of things it's not a big deal.
        Maybe at some point I convert it in the future /shrug.
    */
    const [showDesktop, setShowDesktop] = useState(false);

    useEffect(() => {
        const handleScreenSize = () => {
            const width = globalThis.innerWidth;
            setShowDesktop(width > 614);
        }
        handleScreenSize();
        
        globalThis.addEventListener("resize", handleScreenSize);
        return () => globalThis.removeEventListener("resize", handleScreenSize);
    }, []);


    const shouldRender = ((showDesktop && props.type === "desktop") || (!showDesktop && props.type === "mobile"));
    return shouldRender ? <PathBusinessLogic {...props} /> : null;
}
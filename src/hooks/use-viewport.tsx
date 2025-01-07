import { useState, useEffect } from "react";

// Created a custom hook that watches for "resize" event and determines the view to render in UI 
export const useViewport = () => {
    const [width, setWidth] = useState(window.innerWidth);
    // Add a second state variable "height" and default it to the current window height
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleWindowResize = () => {
            setWidth(window.innerWidth);
            // Set the height in state as well as the width
            setHeight(window.innerHeight);
        }

        // Add an event listener that updates the "width" state variable when the window size changes 
        window.addEventListener("resize", handleWindowResize);
        // Unmounts the event listener
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    // Return both the height and width
    return { width, height };
}
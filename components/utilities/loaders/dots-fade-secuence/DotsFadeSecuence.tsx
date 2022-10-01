import React from "react";
import "./dots.css";

interface DotsProps {
    /** The number of dots */
    quantity: number;

    /** A valid css string color token */
    bg_color: string;

    /** The animation duration */
    duration: number;

    /** The animation stagger coordination value */
    stager: number;

    // nice values anotations
    // --duration: 1.2s;
    // --stager: 0.1s;
}

export const DotsFadeSecuence = ({
    quantity = 3,
    bg_color = "grey",
    duration = 1.2,
    stager = 0.1,
}: DotsProps) => {
    const dots = intArrayFrom(quantity);
    return (
        <div
            className="dots-container flex items-center justify-center gap-1"
            
        >
            {dots.map((d, idx) => (
                <div
                    style={{
                        "--i": idx + 1,
                        "--duration": `${duration}s`,
                        "--stager": `${stager}s`,
                        "--bg-color": bg_color,
                    }}
                    key={idx}
                    className="dot"
                />
            ))}
        </div>
    );
};

function intArrayFrom(size: number = 1) {
    const arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(i);
    }
    return arr;
}

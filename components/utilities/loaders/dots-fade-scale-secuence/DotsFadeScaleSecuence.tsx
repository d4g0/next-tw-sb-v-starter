import React from "react";
import "./dots_scale.css";

interface DotsProps {
    quantity: number;
    bg_color: string;
    duration: number;
    stager: number;
    // --duration: 1.2s;
    // --stager: 0.1s;
}

export const DotsFadeScaleSecuence = ({
    quantity = 3,
    bg_color = "grey",
    duration = 1.2,
    stager = 0.1,
}: DotsProps) => {
    const dots = intArrayFrom(quantity);
    return (
        <div className="dots-container flex items-center justify-center gap-1">
            {dots.map((d, idx) => (
                <div
                    style={{
                        "--i": idx + 1,
                        "--duration": `${duration}s`,
                        "--stager": `${stager}s`,
                        "--bg-color": bg_color,
                    }}
                    key={idx}
                    className="dot-scale h-4 w-4 rounded-full bg-gray-400"
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

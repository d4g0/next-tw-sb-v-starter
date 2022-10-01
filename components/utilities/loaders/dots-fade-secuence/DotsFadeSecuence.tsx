import React from "react";
import styles from "./dots.module.css";

interface DotsProps {
    /** Animation state [`on` || `off`] */
    animate: boolean;

    /** The number of dots */
    quantity: number;

    /** A valid css string color token */
    bg_color: string;

    /** The animation duration in `seconds` */
    duration: number;

    /** The animation stagger coordination value in `seconds`*/
    stager: number;

    // nice values anotations
    // --duration: 1.2s;
    // --stager: 0.1s;
}

export const DotsFadeSecuence = ({
    animate = true,
    quantity = 3,
    bg_color = "grey",
    duration = 1.2,
    stager = 0.1,
}: DotsProps) => {
    const dots = intArrayFrom(quantity);
    return (
        <div className={styles["dots-container"]}>
            {/* flex items-center justify-center gap-1 */}
            {dots.map((d, idx) => (
                <div
                    style={{
                        /*@ts-ignore*/
                        "--i": idx + 1,
                        "--duration": `${duration}s`,
                        "--stager": `${stager}s`,
                        "--bg-color": bg_color,
                    }}
                    key={idx}
                    className={styles.dot}
                    data-animate={animate}
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

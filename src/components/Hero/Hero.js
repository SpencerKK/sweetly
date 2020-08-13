import React, { useState, useEffect } from "react";
import "./Hero.css";

const Hero = () => {
    const [scrollPos, setScrollPos] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPos(position);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    })

    console.log(scrollPos);

    return (
        <div className="hero-wrapper">
            <div 
                className="lax-img"
                style={{ backgroundSize: `${80 + ( scrollPos / 25 ) }em` }}
            >
            </div>
        </div>
    );
};

export default Hero;

// Listen for screen position
// set background size based on that position up to a point
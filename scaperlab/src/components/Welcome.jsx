import React, { useEffect } from "react";
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";


import './Welcome.css';

function Welcome () {
    useGSAP(()=> {
        let textAnimation = gsap.timeline();

        textAnimation.from('.word', {
            y: 100,
            stagger: {
                each: 0.05
            }
        })
    }, []);

    return (
        <>
        <div className="welcome-frame">
            {
                'Welcome to ScaperLab!'.split('').map((word) => {
                    return word === ' ' ? <span className="word">&nbsp;</span> : <span className="word">{word}</span>
                })
            }
        </div>

        </>
    )
}

export default Welcome

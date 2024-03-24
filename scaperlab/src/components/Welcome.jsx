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
                each: 0.5
            }
        })
    }, []);

    return (
        <>
        <div className="welcome-frame">
            <h1 className="word">Welcome to ScaperLab!</h1>
        </div>

        <div className="welcome-frameV2">
        </div>
        </>
    )
}

export default Welcome

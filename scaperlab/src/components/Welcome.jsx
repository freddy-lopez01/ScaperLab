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
        <div className="welcome-info">
            <div class="custom-svg">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                </svg>
            </div>
        </div>
        <div className="welcome-info2">What is Aquascaping?</div>
        <div className="welcome-explanation">
            Aquascaping is the art and practice of arranging aquatic plants, rocks, stones, driftwood, and other decorative
            elements in an aquarium to create visually appealing underwater landscapes. It's essentially landscaping, but underwater.
            Aquascaping often involves creating miniature ecosystems that mimic natural environments or follow staple aquascaping design styles.
        </div>

        <div className="welcome-div">

            <div className="welcome-explanationPic">
                Aquascaping combines principles of design, such as balance, proportion, and focal points, with knowledge of aquatic plants
                and fish to create harmonious and aesthetically pleasing aquarium layouts. It's popular among aquarium hobbyists, who often
                participate in competitions to showcase their creativity and skill in designing these underwater landscapes.
            </div>
            <img src="iwagumi-aquascape-4.jpg" alt="iwagumi"></img>
        </div>

        <div className="welcome-explanation">

            Aquascaping requires careful planning and consideration of factors like plant growth, fish behavior, and maintenance
            requirements. Various styles of aquascaping have emerged over time, including Nature Aquarium, Dutch Aquarium, and
            Iwagumi, each with its own principles and techniques for creating stunning underwater landscapes.
        </div>

        </>
    )
}

export default Welcome

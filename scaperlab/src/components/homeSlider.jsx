import React from 'react';
import './homeSlider.css';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import photoData from './photoBase.js';

const photoObj = Object.values(photoData)

function HomeSlider () {
    return (
        <div className='carousel-frame'>
        <Carousel infiniteLoop={true} useKeyboardArrows={true} autoPlay={true} interval={9000}>
            {photoObj.map((d, index) => (
                <>
                    <img alt='name' src={d.photo} key={index}/>
                </>
            ))}
        </Carousel>

        </div>

    )
};

export default HomeSlider

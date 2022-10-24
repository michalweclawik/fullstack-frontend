import { useState } from "react";
import Slider from "react-slick";
import "./Carousel.scss"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom'

import React from 'react'

const Carousel = ({ cars }) => {


    const NextArrow = ({ onClick }) => {
        return (
            <div className="arrow next" onClick={onClick}>
                <FaArrowRight />
            </div>
        )
    }
    const PrevArrow = ({ onClick }) => {
        return (
            <div className="arrow prev" onClick={onClick}>
                <FaArrowLeft />
            </div>
        )
    }

    const [imageIndex, setImageIndex] = useState(0)

    const setting = {
        infinite: true,
        lazyload: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next)
    }



    return (
        <div className="carousel">
            <Slider {...setting} className="carousel__slider" >
                {cars.map((car, index) => (

                    <Link to={`/car/${car.id}`} key={car.id} className={index == imageIndex ? "slide activeSlide" : "slide"}>
                        <img className="carousel__img" src={car.img_url} alt={car.img_url} />
                    </Link>

                ))}
            </Slider>
        </div>
    )
}

export default Carousel
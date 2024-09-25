import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import VanillaTilt from "vanilla-tilt";
import Image1 from '../assets/H0.jpg';
import Image2 from '../assets/H1.jpg';
import Image3 from '../assets/H2.jpg';

const Card = ({ number, title, content, image, hoverImage }) => {
    const cardRef = useRef(null);

    useEffect(() => {
        VanillaTilt.init(cardRef.current, {
            max: 25,
            speed: 400,
            glare: true,
            "max-glare": 1,
        });
    }, []);

    return (
        <div
            ref={cardRef}
            className="relative w-[350px] h-[450px] m-4 shadow-lg rounded-xl bg-black bg-opacity-0 backdrop-filter backdrop-blur-md flex justify-center items-center border border-black overflow-hidden transition-transform duration-500 hover:scale-105"
        >
            {/* Main Image */}
            <img
                src={image}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-100 hover:opacity-10"
            />
            
            {/* Optional Hover Image (appears on hover if passed) */}
            {hoverImage && (
                <img
                    src={hoverImage}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 opacity-0 hover:opacity-20"
                />
            )}

            <div className="p-5 text-center transition-opacity duration-500 opacity-0 hover:opacity-100 relative z-10">
                <h2 className="absolute top-[-150px] right-2 text-[13em] text-black text-opacity-5 pointer-events-none">
                    {number}
                </h2>
                <h3 className="text-4xl text-white mb-8">{title}</h3>
                <p className="text-base text-white text-justify mb-8">{content}</p>
                <button className="px-4 py-2 bg-black text-white rounded-full shadow-lg">
                    Read More
                </button>
                <Link to="/xray">
                    <button className="px-4 py-2 bg-black text-white rounded-full shadow-lg ml-2">
                        Run!
                    </button>
                </Link>
            </div>
        </div>
    );
};

const Cards = () => {
    return (
        <div className="flex-1 flex gap-12 items-center justify-center space-x-8 h-full">
            <Card
                number="01"
                title="Card One"
                content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut magnam porro cupiditate at ipsum qui beatae odit animi ab, enim vel! Accusantium similique id molestiae dicta unde, corrupti eaque ducimus!"
                image={Image1} // Replace with your image URL
                hoverImage={Image2} // Optional hover image
            />
            <Card
                number="02"
                title="Card Two"
                content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut magnam porro cupiditate at ipsum qui beatae odit animi ab, enim vel! Accusantium similique id molestiae dicta unde, corrupti eaque ducimus!"
                image={Image2} // Replace with your image URL
                hoverImage={Image3} // Optional hover image
            />
            <Card
                number="03"
                title="Card Three"
                content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut magnam porro cupiditate at ipsum qui beatae odit animi ab, enim vel! Accusantium similique id molestiae dicta unde, corrupti eaque ducimus!"
                image={Image3} // Replace with your image URL
                hoverImage={Image1} // Optional hover image
            />
        </div>
    );
};

export default Cards;

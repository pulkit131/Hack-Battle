import React, { useEffect, useRef, useState } from "react";
import VanillaTilt from "vanilla-tilt";

const Card = ({ number, title, content }) => {
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
            className="relative w-[350px] h-[450px] m-4 shadow-lg rounded-xl bg-black bg-opacity-10 backdrop-filter backdrop-blur-md flex justify-center items-center border border-black"
        >
            <div className="p-5 text-center transition-transform duration-500 opacity-0 hover:opacity-100 hover:translate-y-5">
                <h2 className="absolute top-[-150px] right-2 text-[13em] text-black text-opacity-5 pointer-events-none">
                    {number}
                </h2>
                <h3 className="text-4xl text-black mb-8">{title}</h3>
                <p className="text-base text-black text-justify mb-8">{content}</p>
                <button className="px-4 py-2 bg-black text-black rounded-full shadow-lg">
                    Read More
                </button>
            </div>
        </div>
    );
};

const Cards = () => {
    return (
        <div className="flex flex-nowrap items-center justify-center space-x-6 h-full">
            <Card
                number="01"
                title="Card One"
                content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut magnam porro cupiditate at ipsum qui beatae odit animi ab, enim vel! Accusantium similique id molestiae dicta unde, corrupti eaque ducimus!"
            />
            <Card
                number="02"
                title="Card Two"
                content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut magnam porro cupiditate at ipsum qui beatae odit animi ab, enim vel! Accusantium similique id molestiae dicta unde, corrupti eaque ducimus!"
            />
            <Card
                number="03"
                title="Card Three"
                content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut magnam porro cupiditate at ipsum qui beatae odit animi ab, enim vel! Accusantium similique id molestiae dicta unde, corrupti eaque ducimus!"
            />
        </div>
    );
}

export default Cards


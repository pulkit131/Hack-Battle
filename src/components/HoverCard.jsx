import React, { useState } from 'react';
import founder1 from "../assets/Pulkit.r.png";
import founder2 from "../assets/ved.r.png";
import founder3 from "../assets/ayush.r.png";
import founder4 from "../assets/van.r.png";
import founder5 from "../assets/Kee.r.png";
import founder6 from "../assets/kee.r.png";

const cards = [
    {
        id: 1,
        name: 'Pulkit Nandwana',
        designation: 'Front-end Developer',
        photo: founder1
    },
    {
        id: 2,
        name: 'Ved Raut',
        designation: 'Operations , Ai/Ml developer',
        photo: founder2
    },
    {
        id: 3,
        name: 'Ayush',
        designation: 'Back-end Developer',
        photo: founder3
    },
    {
        id: 4,
        name: 'Vanshika',
        designation: 'Back-end Developer',
        photo: founder4
    },
    {
        id: 5,
        name: 'Ranesh',
        designation: 'Ai/ML Developer',
        photo: founder5
    },
    {
        id: 6,
        name: 'Keerthi',
        designation: 'Ai/ML Developer',
        photo: founder6
    }
];

const HoverCard = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <div className="flex flex-col items-center px-4 sm:px-6 lg:px-8">
            {/* Heading */}
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-audiowide leading-tight text-black text-center mb-8">
                Team Members
            </h2>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {cards.map((card, index) => (
                    <div
                        key={card.id}
                        className={`relative w-full h-80 w-80 p-4 rounded-xl shadow-xl transition-all duration-300 
                        bg-black opacity-90
                        `}
                        onMouseEnter={() => setHoveredCard(index)}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        {/* Image */}
                        <div className="flex justify-center transition-transform duration-300 ease-in-out"
                            style={{
                                transform: hoveredCard === index ? 'translateY(-20px) scale(1.1)' : 'translateY(0) scale(1)',
                            }}
                        >
                            <img
                                src={card.photo}
                                alt={card.name}
                                className="w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] lg:w-[180px] lg:h-[180px] object-cover rounded-full border-4 border-gray-700"
                            />
                        </div>
                        {/* Text content */}
                        <div className={`absolute bottom-4 left-0 right-0 flex flex-col items-center justify-center p-4 text-center transition-opacity duration-300
                        ${hoveredCard === index ? 'opacity-100' : 'opacity-0'}
                        `}>
                            <h3 className="text-base sm:text-lg font-bold text-white">{card.name}</h3>
                            <p className="text-xs sm:text-sm text-gray-300">{card.designation}</p>
                        </div>
                    </div>
                ))}
            </div>
            <h2 className="text-lg sm:text-xl text-gray-300 text-center mt-8 mb-8">/////////////////////////</h2>
        </div>
    );
};

export default HoverCard;

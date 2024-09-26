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
        <div className="bg-gray-100 py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-green-700 text-center mb-12">
                    Our Team
                </h2>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <div
                            key={card.id}
                            className={`relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 
                            ${hoveredCard === index ? 'transform -translate-y-2' : ''}
                            `}
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div className="absolute inset-0 bg-green-700 opacity-75 z-10"></div>
                            <img
                                src={card.photo}
                                alt={card.name}
                                className="w-full h-96 object-cover"
                            />
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center z-20">
                                <div 
                                    className={`w-32 h-32 rounded-full border-4 border-white overflow-hidden mb-4 transition-all duration-300
                                    ${hoveredCard === index ? 'transform scale-110' : ''}
                                    `}
                                >
                                    <img
                                        src={card.photo}
                                        alt={card.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{card.name}</h3>
                                <p className="text-sm text-green-100">{card.designation}</p>
                                <div className={`mt-4 transition-all duration-300 ${hoveredCard === index ? 'opacity-100' : 'opacity-0'}`}>
                                    <button className="bg-white text-green-700 px-4 py-2 rounded-full font-semibold hover:bg-green-100 transition-colors duration-300">
                                        View Profile
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Bottom line */}
                <div className="flex justify-center mt-16">
                    <div className="w-24 h-1 bg-green-700 rounded-full"></div>
                </div>
            </div>
        </div>
    );
};

export default HoverCard;
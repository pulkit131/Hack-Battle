import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Carousel = () => {
    const fadeIn = "transition-opacity duration-700 opacity-0";
    const [items, setItems] = useState([
        {
            backgroundImage: "https://i.ibb.co/qCkd9jS/img1.jpg",
            name: "Switzerland",
            description: "X-Dev, Transforming code into visual poetry..!",
        },
        {
            backgroundImage: "https://i.ibb.co/jrRb11q/img2.jpg",
            name: "Finland",
            description: "X-Dev, Transforming code into visual poetry..!",
        },
        {
            backgroundImage: "https://i.ibb.co/NSwVv8D/img3.jpg",
            name: "Iceland",
            description: "X-Dev, Transforming code into visual poetry..!",
        },
        {
            backgroundImage: "https://i.ibb.co/Bq4Q0M8/img4.jpg",
            name: "Australia",
            description: "X-Dev, Transforming code into visual poetry..!",
        },
        {
            backgroundImage: "https://i.ibb.co/jTQfmTq/img5.jpg",
            name: "Netherlands",
            description: "X-Dev, Transforming code into visual poetry..!",
        },
        {
            backgroundImage: "https://i.ibb.co/RNkk6L0/img6.jpg",
            name: "Ireland",
            description: "X-Dev, Transforming code into visual poetry..!",
        },
    ]);

    useEffect(() => {
        const link = document.createElement("link");
        link.href =
            "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
        link.rel = "stylesheet";
        document.head.appendChild(link);
        return () => document.head.removeChild(link);
    }, []);

    const handleNext = () => {
        setItems((prevItems) => [...prevItems.slice(1), prevItems[0]]);
    };

    const handlePrev = () => {
        setItems((prevItems) => [
            prevItems[prevItems.length - 1],
            ...prevItems.slice(0, -1),
        ]);
    };

    return (
        <div className="relative w-full h-[500px] ml-0">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-full">
                <div className="relative w-full h-full">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className={`absolute top-1/2 transform -translate-y-1/2 w-[200px] h-[300px] rounded-[20px] shadow-lg bg-cover bg-center transition-all duration-500 ${index === 0
                                ? "left-0 top-0 w-full h-full rounded-none"
                                : index === 1
                                    ? "left-1/2"
                                    : index === 2
                                        ? "left-[calc(50%+220px)]"
                                        : index === 3
                                            ? "left-[calc(50%+440px)]"
                                            : "left-[calc(50%+660px)] opacity-0"
                                }`}
                            style={{ backgroundImage: `url(${item.backgroundImage})` }}
                        >
                            {/* Show details only for the enlarged card (index === 0) */}
                            {index === 0 && (
                                <div
                                    className={`w-[400px] pl-[20px] h-full flex flex-col items-center justify-center text-center text-white ${fadeIn} animate-fadeIn opacity-100`}
                                    style={{ opacity: 1 }} // Set to 1 for visibility
                                >
                                    <h2 className="text-4xl font-bold uppercase">{item.name}</h2>
                                    <p className="mt-2 mb-5 animation-delay-300">{item.description}</p>
                                    <button className="px-5 py-2.5 w-32 bg-white text-black animation-delay-600">
                                        See More
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className="absolute bottom-5 w-full text-center">
                <button
                    className="w-10 h-[35px] rounded-lg border border-black mx-1.5 transition-colors duration-300 hover:bg-[#ababab] hover:text-white"
                    onClick={handlePrev}
                >
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <button
                    className="w-10 h-[35px] rounded-lg border border-black mx-1.5 transition-colors duration-300 hover:bg-[#ababab] hover:text-white"
                    onClick={handleNext}
                >
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
        </div>
    );
}

export default Carousel;

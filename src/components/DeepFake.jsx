import React, { useState } from "react";

const ImageUpload = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setSelectedImage(event.target.files[0]);
        }
    };

    const handleRun = () => {
        if (selectedImage) {
            // You can add your logic to handle the image or run some process here.
            console.log("Running with the selected image:", selectedImage);
        } else {
            alert("Please upload an image first.");
        }
    };

    return (
        <div className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg">
            {/* Image Input */}
            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
            />
            
            {/* Run Button */}
            <button
                onClick={handleRun}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
                Run
            </button>
        </div>
    );
};

export default ImageUpload;

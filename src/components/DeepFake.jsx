import React, { useState } from "react";
import axios from 'axios'; // Import Axios for making HTTP requests

const ImageUpload = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [result, setResult] = useState(null); // To display prediction result

    const handleImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setSelectedImage(event.target.files[0]);
        }
    };

    const handleRun = () => {
        if (selectedImage) {
            // Create FormData to append the image file
            const formData = new FormData();
            formData.append("file", selectedImage);

            // Post the image to the /upload endpoint of the Express server
            axios.post('http://localhost:3000/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(response => {
                // Handle the response from the server
                setResult(response.data);  // Store result to display later
            })
            .catch(error => {
                console.error("There was an error uploading the image!", error);
            });
        } else {
            alert("Please upload an image first.");
        }
    };

    return (
        <div className="flex flex-col items-center space-y-4 p-4 bg-gray-100 rounded-lg">
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

            {/* Display the prediction result */}
            {result && (
                <div className="mt-4 p-4 bg-white border border-gray-300 rounded-lg shadow-md w-full max-w-lg">
                    <h2 className="font-bold text-lg mb-2 text-center">Prediction Result:</h2>
                    <pre className="whitespace-pre-wrap break-words text-center">{JSON.stringify(result, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default ImageUpload;

import React, { useState } from 'react';
import axios from 'axios';

const Xray = () => {
  const [inputValue, setInputValue] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleRun = async () => {
    setLoading(true); // Start loading

    try {
      // Convert inputValue to integer
      const numImages = parseInt(inputValue, 10);
      
      // Check if the input is a valid number
      if (isNaN(numImages) || numImages <= 0) {
        alert('Please enter a valid positive number.');
        return;
      }

      // Send the input value to the backend (adjust URL as needed)
      const response = await axios.post('http://localhost:3000/generate', {
        num_images: numImages,
      });

      // Assuming the API returns an array of image URLs in response.data.images
      // Ensure the response structure matches what is expected
      setImages(response.data.images || []);
    } catch (error) {
      console.error('Error fetching images:', error);
      alert('Error fetching images');
    } finally {
      setLoading(false); // Stop loading after the request
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      {/* Input Field */}
      <input
        type="number" // Changed to lowercase
        placeholder="Enter number of images..."
        className="border border-gray-300 rounded-lg p-2 w-80"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      {/* Run Button */}
      <button
        className="ml-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 mt-4"
        onClick={handleRun}
        disabled={loading}
      >
        {loading ? 'Generating...' : 'Run'}
      </button>

      {/* Display the images */}
      <div className="mt-10 grid grid-cols-3 gap-4">
        {images.length > 0 ? (
          images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Result ${index}`}
              className="w-64 h-64 object-cover"
            />
          ))
        ) : (
          !loading && <p>No images generated yet.</p>
        )}
      </div>
    </div>
  );
};

export default Xray;

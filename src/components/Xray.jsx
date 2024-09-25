import React, { useState } from 'react';

const InputWithRunButton = () => {
  const [inputValue, setInputValue] = useState('');

  const handleRun = () => {
    alert(`You entered: ${inputValue}`);
  };

  return (
    <div className="flex items-center justify-center mt-10">
      {/* Input Field */}
      <input
        type="text"
        placeholder="Enter something..."
        className="border border-gray-300 rounded-lg p-2 w-80"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      {/* Run Button */}
      <button
        className="ml-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        onClick={handleRun}
      >
        Run
      </button>
    </div>
  );
};

export default InputWithRunButton;

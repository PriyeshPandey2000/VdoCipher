import React, { useState } from 'react';

function YourComponent() {
  const [clicked, setClicked] = useState(false);

  const handleButtonClick = () => {
    setClicked(true);
    // Add any additional functionality here if needed
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 space-x-0 md:space-x-8 pb-6 pt-4">
      <button
        className={`w-48 h-12 rounded-xl bg-indigo-500 border dark:border-white border-transparent text-white text-sm ${clicked ? 'animate-click' : ''}`}
        onClick={handleButtonClick}
      >
        Secure Videos Now
      </button>
      <button
        className={`w-48 h-12 rounded-xl bg-white text-black border border-black  text-sm ${clicked ? 'animate-click' : ''}`}
        onClick={handleButtonClick}
      >
        Schedule Demo
      </button>
    </div>
  );
}

// CSS
const styles = `
  @keyframes clickAnimation {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.95);
    }
    100% {
      transform: scale(1);
    }
  }

  .animate-click {
    animation: clickAnimation 0.3s ease-out;
  }
`;

export default YourComponent;

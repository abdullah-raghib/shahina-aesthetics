import React from 'react';

const ProgressBar = ({ progress }) => {
  return (
    <div className="w-32 h-[2px] relative">
      {/* Pending progress */}
      <div className="absolute h-full bg-gray-600 rounded-full w-full"></div>

      {/* Fulfilled progress */}
      <div className="absolute h-full bg-white rounded-full w-1/2 transition-width" style={{ width: `${progress}%` }}></div>
    </div>
  );
};  

export default ProgressBar;

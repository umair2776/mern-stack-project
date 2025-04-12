import React, { useState } from 'react';

const VideoOnHover = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [buttonColor, setButtonColor] = useState('blue'); // default color

  const handleMouseEnter = (e) => {
    setIsPlaying(true);
    e.target.play();
  };

  const handleMouseLeave = (e) => {
    setIsPlaying(false);
    e.target.pause();
  };

  const handleButtonClick = () => {
    setButtonColor('red');
  };

  return (
    <>
      <video
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        width="600"
        height="400"
        loop
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ display: 'block', margin: '0 auto' }}
      />

      <button
        onClick={handleButtonClick}
        className={`
          px-4 py-2 text-white rounded
          ${buttonColor === 'blue' ? 'bg-blue-400' : 'bg-red-400'}
        `}
      >
        Yes it
      </button>
    </>
  );
};

export default VideoOnHover;

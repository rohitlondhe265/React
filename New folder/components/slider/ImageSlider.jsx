import React, { useState } from 'react';

const ImageSlider = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full transition-opacity ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 rounded-full bg-gray-800 text-white"
        onClick={prevSlide}
      >
        &lt;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 rounded-full bg-gray-800 text-white"
        onClick={nextSlide}
      >
        &gt;
      </button>
    </div>
  );
};

export default ImageSlider;

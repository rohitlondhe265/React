import React from 'react';
import ImageSlider from './ImageSlider';

const Slider = () => {
  const images = [
    '/cisco.jpeg',
    'demo.jpg',
    'intel.jpeg',
    // Add more images as needed
  ];

  return (
    <div className="mx-auto max-w-screen-md p-4">
      <h1 className="text-2xl font-bold mb-4">Responsive Image Slider</h1>
      <ImageSlider images={images} />
    </div>
  );
};

export default Slider;

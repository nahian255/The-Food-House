import React, { useState } from 'react';

const images = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
  // Add more image URLs here
];

function ImageSlider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="max-w-lg mx-auto">
      <div className="relative">
        <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          className="w-full h-64 object-cover"
        />
        <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full" onClick={prevImage}>
          &lt;
        </button>
        <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full" onClick={nextImage}>
          &gt;
        </button>

      </div>
      <div className="flex justify-center mt-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className={`w-12 h-12 object-cover cursor-pointer ${index === currentImageIndex ? 'border-2 border-blue-500' : 'border border-gray-300'} mr-2`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>

    </div>
  );
}

export default ImageSlider;

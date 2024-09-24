import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const products = [
  { id: 1, name: "Smartphone X", price: "799 €", description: "Le dernier smartphone avec écran OLED et triple caméra." },
  { id: 2, name: "Laptop Pro", price: "1299 €", description: "Ordinateur portable puissant pour les professionnels." },
  { id: 3, name: "Casque sans fil", price: "199 €", description: "Son immersif avec annulation de bruit active." },
];

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="overflow-hidden rounded-lg shadow-lg">
        <div className="relative h-96 bg-gray-100">
          <img 
            src={`/api/placeholder/800/600?text=${products[currentIndex].name}`}
            alt={products[currentIndex].name}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
            <h2 className="text-2xl font-bold">{products[currentIndex].name}</h2>
            <p className="text-xl">{products[currentIndex].price}</p>
            <p className="mt-2">{products[currentIndex].description}</p>
          </div>
        </div>
      </div>
      <button 
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default ProductCarousel;
// src/app/_components/carousel/CarouselLoader.js

"use client"; // Indicate this is a Client Component

import React, { useEffect } from 'react';
import $ from 'jquery';
import 'owl.carousel/dist/assets/owl.carousel.css'; // Ensure this path is correct


const CarouselLoader = () => {
  useEffect(() => {
    const loadOwlCarousel = async () => {
      const OwlCarousel = await import('owl.carousel');
      // Ensure jQuery is available and register Owl Carousel
      if (typeof window !== 'undefined' && window.$) {
        window.$.fn.owlCarousel = OwlCarousel.owlCarousel;
      }
    };

    loadOwlCarousel();
  }, []);

  return null; // This component doesn't need to render anything
};

export default CarouselLoader;

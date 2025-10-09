import React from 'react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/3.png';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Explore Our Engineering &amp;
          <span className="block text-primary">Technology Solutions Today!</span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
          Delivering innovative machines and reliable components from industrial equipment to
          electrical and electronic parts trusted by businesses across the Philippines.
        </p>

        {/* 🔹 Updated Button: Smooth scroll to Products section */}
        <Button
          variant="hero"
          size="lg"
          className="shadow-button"
          onClick={() => {
            const section = document.getElementById('products');
            section?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          View Products
        </Button>
      </div>
    </section>
  );
};

export default Hero;

import React, { useState } from 'react';

// Import category images
import engineeringImage from '@/assets/ENGINEERING SERVICES.jpg';
import machiningImage from '@/assets/MACHINING AND FABRICATION.jpg';
import civilWorksImage from '@/assets/CIVIL WORKS.jpeg';

// Import sub-service images (⚠️ replace with your actual files)
import automationDesign from '@/assets/Automation and Machine Design.png';
import architecturalDesign from '@/assets/Architectural and Structural Design.jpg';
import electricalWorks from '@/assets/Electrical Works.png';
import sheetMetal from '@/assets/Sheet Metal Works.png';
import controlPanel from '@/assets/Fabrication of Electrical Control Panel.png';

import cncLaser from '@/assets/CNC Laser Cutting Machine.png';
import cncMilling from '@/assets/CNC Milling Machine.jpg';
import latheMachine from '@/assets/Lathe Machine.png';
import millingMachine from '@/assets/Milling Machine.png';
import pressBrake from '@/assets/Press Break Bending Machine.jpg';
import shearing from '@/assets/Shearing Machine.jpg';
import bandSaw from '@/assets/Band Saw Machine.jpg'; 

import backhoe from '@/assets/Rental of Backhoe.jpg';
import roadRehab from '@/assets/Road Rehabilitation.png';
import concreting from '@/assets/Concreting.png';
import structural from '@/assets/Structural.png.jpg';
import fireProtection from '@/assets/Fire Protection System.png';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Main categories
  const categories = [
    {
      title: 'Engineering Services',
      description: 'Automation & design, electrical works, sheet metal, and control panels.',
      image: engineeringImage,
    },
    {
      title: 'Machining & Fabrication',
      description: 'CNC machining, milling, lathe, bending, shearing, and fabrication services.',
      image: machiningImage,
    },
    {
      title: 'Civil Works',
      description: 'Comprehensive construction and civil engineering services.',
      image: civilWorksImage,
    },
  ];

  // Sub-services for each category
  const subServices: Record<
    string,
    { title: string; description: string; image: string; imageAlt: string }[]
  > = {
    'Engineering Services': [
      { title: 'Automation & Machine Design', description: 'Custom automation and machine design solutions.', image: automationDesign, imageAlt: 'Automation & Machine Design' },
      { title: 'Architectural & Structural Design', description: 'Designing functional and durable structures.', image: architecturalDesign, imageAlt: 'Architectural & Structural Design' },
      { title: 'Electrical Works', description: 'Reliable electrical works for industrial and commercial use.', image: electricalWorks, imageAlt: 'Electrical Works' },
      { title: 'Sheet Metal Works', description: 'Fabrication and processing of sheet metal components.', image: sheetMetal, imageAlt: 'Sheet Metal Works' },
      { title: 'Fabrication of Electrical Control Panel', description: 'High-quality electrical control panel fabrication.', image: controlPanel, imageAlt: 'Control Panel Fabrication' },
    ],
    'Machining & Fabrication': [
      { title: 'CNC Laser Cutting Machine', description: 'Precision cutting with advanced CNC laser technology.', image: cncLaser, imageAlt: 'CNC Laser Cutting' },
      { title: 'CNC Milling Machine', description: 'High-precision CNC milling for complex components.', image: cncMilling, imageAlt: 'CNC Milling' },
      { title: 'Lathe Machine', description: 'Turning solutions using high-grade lathe machines.', image: latheMachine, imageAlt: 'Lathe Machine' },
      { title: 'Milling Machine', description: 'Reliable milling machine services for all industries.', image: millingMachine, imageAlt: 'Milling Machine' },
      { title: 'Press Brake Bending Machine', description: 'Accurate sheet metal bending with press brake technology.', image: pressBrake, imageAlt: 'Press Brake Bending' },
      { title: 'Shearing Machine', description: 'Efficient sheet metal cutting using shearing machines.', image: shearing, imageAlt: 'Shearing Machine' },
      { title: 'Band Saw Machine', description: 'Versatile cutting services with band saw machines.', image: bandSaw, imageAlt: 'Band Saw Machine' },
    ],
    'Civil Works': [
      { title: 'Rental of Backhoe', description: 'Reliable backhoe rental for construction projects.', image: backhoe, imageAlt: 'Backhoe Rental' },
      { title: 'Road Rehabilitation', description: 'Comprehensive road rehabilitation and maintenance.', image: roadRehab, imageAlt: 'Road Rehabilitation' },
      { title: 'Concreting', description: 'High-quality concreting for structural integrity.', image: concreting, imageAlt: 'Concreting' },
      { title: 'Structural', description: 'Strong and reliable structural construction services.', image: structural, imageAlt: 'Structural Works' },
      { title: 'Fire Protection System', description: 'Installation of reliable fire protection systems.', image: fireProtection, imageAlt: 'Fire Protection' },
    ],
  };

  return (
    <section id="services" className="py-20 bg-muted/30 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-blue-dark mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We provide engineering, machining, and civil works services to support industrial and construction needs with precision and reliability.
          </p>
        </div>

        {/* Category Grid */}
        {!activeCategory && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {categories.map((category, index) => (
              <div
                key={index}
                onClick={() => setActiveCategory(category.title)}
                className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-yellow-500">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{category.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Sub-services Grid */}
        {activeCategory && (
          <div className="mt-12">
            <button
              onClick={() => setActiveCategory(null)}
              className="mb-6 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
            >
              ← Back to Categories
            </button>
            <h3 className="text-3xl font-bold mb-8 text-center">{activeCategory}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {subServices[activeCategory].map((service, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="p-4">
                    <h4 className="text-lg font-semibold transition-colors duration-300 group-hover:text-yellow-500">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;

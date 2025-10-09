import React, { useState } from 'react';
import ProductCard from './ProductCard';

// Category images
import electricalImage from '@/assets/ELECTRICAL.jpg';
import mechanicalImage from '@/assets/MECHANICAL COMPONENTS.png';
import pneumaticsImage from '@/assets/PNEUMATICS.png';
import toolsImage from '@/assets/TOOLS.jpeg';

// Product images
import electricalSupplies from '@/assets/Electrical Supplies.jpg';
import electricalPanel from '@/assets/Electrical Panel.png';
import cableTray from '@/assets/Cable Tray.jpg';
import acMotor from '@/assets/AC Motors and Gear Motors.png';
import bearings from '@/assets/Bearing and Seal.jpg';
import pneumaticsPart from '@/assets/Pneumatic Cylinder Accessories.jpg';
import conveyor from '@/assets/Conveyor System.png';
import jigs from '@/assets/Jigs and Fixtures.png';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Category list
  const categories = [
    {
      title: 'Electrical',
      description: 'Electrical supplies and equipment including panels, cable trays, and more.',
      image: electricalImage,
    },
    {
      title: 'Mechanical Components',
      description: 'Industrial-grade motors, bearings, and seals for durability and precision.',
      image: mechanicalImage,
    },
    {
      title: 'Automation & Pneumatics',
      description: 'Pneumatic and automation parts designed for smooth control and efficiency.',
      image: pneumaticsImage,
    },
    {
      title: 'Systems & Tooling',
      description: 'Custom conveyor systems, jigs, and fixtures for industrial use.',
      image: toolsImage,
    },
  ];

  // Sub-products for each category
  const subProducts: Record<
    string,
    { title: string; description: string; image: string; imageAlt: string }[]
  > = {
    Electrical: [
      { title: 'Electrical Supply', description: 'Complete solutions for industrial and commercial use.', image: electricalSupplies, imageAlt: 'Electrical supply' },
      { title: 'Electrical Panel', description: 'Durable and safe panels for power distribution.', image: electricalPanel, imageAlt: 'Electrical panel' },
      { title: 'Cable Tray', description: 'Reliable cable trays for safe wiring management.', image: cableTray, imageAlt: 'Cable tray' },
    ],
    'Mechanical Components': [
      { title: 'AC Motors and Gear Motors', description: 'Industrial-grade motors built for durability.', image: acMotor, imageAlt: 'AC motor' },
      { title: 'Bearings & Seals', description: 'Durable bearings and seals for precision.', image: bearings, imageAlt: 'Bearings and seals' },
    ],
    'Automation & Pneumatics': [
      { title: 'Pneumatic Cylinder Accessories', description: 'High-quality pneumatic parts for automation systems.', image: pneumaticsPart, imageAlt: 'Pneumatics' },
    ],
    'Systems & Tooling': [
      { title: 'Conveyor System', description: 'Custom conveyor systems for industrial use.', image: conveyor, imageAlt: 'Conveyor system' },
      { title: 'Jigs and Fixtures', description: 'Precision jigs and fixtures for manufacturing.', image: jigs, imageAlt: 'Jigs and fixtures' },
    ],
  };

  return (
    <section id="products" className="py-20 bg-muted/30 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-blue-dark mb-4">
            Our Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our range of electrical, mechanical, automation, and tooling products.
          </p>
        </div>

        {/* Category Grid */}
        {!activeCategory && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {categories.map((category, index) => (
              <div
                key={index}
                onClick={() => setActiveCategory(category.title)}
                className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-yellow-500">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{category.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Sub-products Grid */}
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
              {subProducts[activeCategory].map((product, index) => (
                <ProductCard
                  key={index}
                  title={product.title}
                  description={product.description}
                  image={product.image}
                  imageAlt={product.imageAlt}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;

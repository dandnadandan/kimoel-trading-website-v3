export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  imageAlt: string;
  description: string;
  longDescription: string;
  features: string[];
  rating: number;
  inStock: boolean;
}

export const products: Product[] = [
  // Electrical Products
  {
    id: "elec-001",
    name: "Electrical Supply",
    category: "Electrical",
    image: "/src/assets/Electrical Supplies.jpg",
    imageAlt: "Electrical supply",
    description: "Complete solutions for industrial and commercial use.",
    longDescription: "Comprehensive electrical supply solutions designed for both industrial and commercial applications. Our products meet the highest safety standards and provide reliable performance for all your electrical needs.",
    features: ["Industrial grade components", "Safety certified", "Energy efficient", "Long lifespan", "Easy installation"],
    rating: 4.5,
    inStock: true
  },
  {
    id: "elec-002",
    name: "Electrical Panel",
    category: "Electrical",
    image: "/src/assets/Electrical Panel.png",
    imageAlt: "Electrical panel",
    description: "Durable and safe panels for power distribution.",
    longDescription: "High-quality electrical panels designed for safe and efficient power distribution in industrial facilities. Built with premium materials and advanced safety features.",
    features: ["Fire-resistant enclosure", "Modular design", "Easy maintenance", "Overload protection", "Temperature monitoring"],
    rating: 4.8,
    inStock: true
  },
  {
    id: "elec-003",
    name: "Cable Tray",
    category: "Electrical",
    image: "/src/assets/Cable Tray.jpg",
    imageAlt: "Cable tray",
    description: "Reliable cable trays for safe wiring management.",
    longDescription: "Durable cable tray systems for organized and safe cable management. Perfect for industrial environments where cable protection and organization are critical.",
    features: ["Corrosion resistant", "High load capacity", "Flexible configuration", "Easy installation", "Cost-effective"],
    rating: 4.3,
    inStock: true
  },
  {
    id: "elec-004",
    name: "Power Distribution Unit",
    category: "Electrical",
    image: "/src/assets/Electrical Supplies.jpg",
    imageAlt: "Power distribution unit",
    description: "Advanced power distribution for critical systems.",
    longDescription: "Sophisticated power distribution units designed for critical infrastructure and industrial applications with advanced monitoring capabilities.",
    features: ["Smart monitoring", "Remote management", "Backup power support", "Surge protection", "Real-time diagnostics"],
    rating: 4.7,
    inStock: false
  },
  {
    id: "elec-005",
    name: "Control Transformer",
    category: "Electrical",
    image: "/src/assets/Electrical Panel.png",
    imageAlt: "Control transformer",
    description: "Precision transformers for control systems.",
    longDescription: "High-precision control transformers designed for automation and control systems with exceptional voltage regulation.",
    features: ["High efficiency", "Low noise operation", "Compact design", "Thermal protection", "Wide voltage range"],
    rating: 4.6,
    inStock: true
  },
  {
    id: "elec-006",
    name: "Circuit Breaker Panel",
    category: "Electrical",
    image: "/src/assets/Electrical Panel.png",
    imageAlt: "Circuit breaker panel",
    description: "Advanced circuit protection and distribution.",
    longDescription: "Modern circuit breaker panels with advanced protection features and smart monitoring capabilities for enhanced safety.",
    features: ["Arc fault protection", "Smart monitoring", "Remote reset capability", "Modular expansion", "Diagnostic display"],
    rating: 4.9,
    inStock: true
  },

  // Mechanical Components
  {
    id: "mech-001",
    name: "AC Motors and Gear Motors",
    category: "Mechanical Components",
    image: "/src/assets/MECHANICAL COMPONENTS.png",
    imageAlt: "AC motors and gear motors",
    description: "Premium AC motors and gear motors for industrial applications.",
    longDescription: "Premium AC motors and gear motors engineered for industrial applications requiring high reliability and consistent performance under demanding conditions.",
    features: ["High torque output", "Energy efficient", "Low maintenance", "Variable speed control", "Thermal protection"],
    rating: 4.7,
    inStock: true
  },
  {
    id: "mech-002",
    name: "Bearings and Seals",
    category: "Mechanical Components",
    image: "/src/assets/Bearing and Seal.jpg",
    imageAlt: "Bearings and seals",
    description: "High-performance bearings and seals for machinery.",
    longDescription: "Premium quality bearings and seals designed for heavy-duty industrial applications with exceptional durability and precision engineering.",
    features: ["Extended lifespan", "High load capacity", "Low friction", "Temperature resistant", "Corrosion protection"],
    rating: 4.5,
    inStock: true
  },
  {
    id: "mech-003",
    name: "Conveyor Systems",
    category: "Mechanical Components",
    image: "/src/assets/Conveyor System.png",
    imageAlt: "Conveyor systems",
    description: "Custom conveyor solutions for material handling.",
    longDescription: "Versatile conveyor systems designed for efficient material handling in manufacturing and warehouse environments with modular configurations.",
    features: ["Modular design", "High capacity", "Energy efficient", "Easy maintenance", "Safety features"],
    rating: 4.6,
    inStock: true
  },
  {
    id: "mech-004",
    name: "Jigs and Fixtures",
    category: "Mechanical Components",
    image: "/src/assets/Jigs and Fixtures.png",
    imageAlt: "Jigs and fixtures",
    description: "Precision jigs and fixtures for manufacturing.",
    longDescription: "Custom-engineered jigs and fixtures for precision manufacturing processes with robust construction and repeatable accuracy.",
    features: ["Precision engineering", "Durable construction", "Easy setup", "Cost-effective", "Quality assurance"],
    rating: 4.4,
    inStock: true
  },
  {
    id: "mech-005",
    name: "Hydraulic Components",
    category: "Mechanical Components",
    image: "/src/assets/MECHANICAL COMPONENTS.png",
    imageAlt: "Hydraulic components",
    description: "Reliable hydraulic systems and components.",
    longDescription: "Comprehensive hydraulic components including pumps, valves, and actuators for industrial hydraulic systems with proven reliability.",
    features: ["High pressure rating", "Leak-free design", "Long service life", "Easy maintenance", "Wide compatibility"],
    rating: 4.8,
    inStock: true
  },
  {
    id: "mech-006",
    name: "Shaft Couplings",
    category: "Mechanical Components",
    image: "/src/assets/MECHANICAL COMPONENTS.png",
    imageAlt: "Shaft couplings",
    description: "Precision shaft couplings for power transmission.",
    longDescription: "High-precision shaft couplings for reliable power transmission in industrial machinery with superior alignment capabilities.",
    features: ["Precision alignment", "High torque capacity", "Vibration damping", "Easy installation", "Durable construction"],
    rating: 4.6,
    inStock: true
  },

  // Pneumatics
  {
    id: "pneu-001",
    name: "Pneumatic Cylinders",
    category: "Pneumatics",
    image: "/src/assets/PNEUMATICS.png",
    imageAlt: "Pneumatic cylinders",
    description: "High-performance pneumatic cylinders for automation.",
    longDescription: "Advanced pneumatic cylinders designed for automation systems with smooth operation, high reliability, and extended service life.",
    features: ["Smooth operation", "High speed", "Low maintenance", "Corrosion resistant", "Multiple mounting options"],
    rating: 4.7,
    inStock: true
  },
  {
    id: "pneu-002",
    name: "Air Treatment Units",
    category: "Pneumatics",
    image: "/src/assets/PNEUMATICS.png",
    imageAlt: "Air treatment units",
    description: "Comprehensive air treatment for pneumatic systems.",
    longDescription: "Complete air treatment solutions including filters, regulators, and lubricators for optimal pneumatic system performance.",
    features: ["Multi-stage filtration", "Pressure regulation", "Automatic lubrication", "Easy maintenance", "Energy efficient"],
    rating: 4.5,
    inStock: true
  },
  {
    id: "pneu-003",
    name: "Pneumatic Valves",
    category: "Pneumatics",
    image: "/src/assets/Pneumatic Cylinder Accessories.jpg",
    imageAlt: "Pneumatic valves",
    description: "Precision control valves for pneumatic systems.",
    longDescription: "High-precision pneumatic valves for accurate control of air flow and pressure in automation systems with fast response times.",
    features: ["Fast response", "Precise control", "Low power consumption", "Long life cycle", "Easy installation"],
    rating: 4.6,
    inStock: true
  },
  {
    id: "pneu-004",
    name: "Vacuum Systems",
    category: "Pneumatics",
    image: "/src/assets/PNEUMATICS.png",
    imageAlt: "Vacuum systems",
    description: "Efficient vacuum systems for material handling.",
    longDescription: "Advanced vacuum systems for material handling and automation applications with reliable performance and energy efficiency.",
    features: ["High suction power", "Energy efficient", "Compact design", "Easy control", "Low noise operation"],
    rating: 4.4,
    inStock: true
  },
  {
    id: "pneu-005",
    name: "Pneumatic Accessories",
    category: "Pneumatics",
    image: "/src/assets/Pneumatic Cylinder Accessories.jpg",
    imageAlt: "Pneumatic accessories",
    description: "Complete range of pneumatic accessories.",
    longDescription: "Comprehensive range of pneumatic accessories including fittings, tubing, and sensors for complete system integration.",
    features: ["Wide compatibility", "Easy installation", "Durable materials", "Leak-free design", "Cost-effective"],
    rating: 4.5,
    inStock: true
  },
  {
    id: "pneu-006",
    name: "Compressed Air Systems",
    category: "Pneumatics",
    image: "/src/assets/PNEUMATICS.png",
    imageAlt: "Compressed air systems",
    description: "Complete compressed air solutions.",
    longDescription: "Integrated compressed air systems including compressors, storage, and distribution for industrial applications.",
    features: ["Energy efficient", "Low maintenance", "Quiet operation", "Automatic control", "Safety features"],
    rating: 4.7,
    inStock: true
  },

  // Tools
  {
    id: "tool-001",
    name: "Power Tools",
    category: "Tools",
    image: "/src/assets/TOOLS.jpeg",
    imageAlt: "Power tools",
    description: "Professional power tools for industrial use.",
    longDescription: "Heavy-duty power tools designed for professional industrial applications with superior performance and durability.",
    features: ["High power output", "Ergonomic design", "Safety features", "Long battery life", "Professional grade"],
    rating: 4.6,
    inStock: true
  },
  {
    id: "tool-002",
    name: "Hand Tools",
    category: "Tools",
    image: "/src/assets/TOOLS.jpeg",
    imageAlt: "Hand tools",
    description: "Quality hand tools for precision work.",
    longDescription: "Premium hand tools crafted for precision work with ergonomic designs and superior material quality.",
    features: ["Precision engineering", "Comfortable grip", "Durable materials", "Wide variety", "Professional quality"],
    rating: 4.5,
    inStock: true
  },
  {
    id: "tool-003",
    name: "Measuring Instruments",
    category: "Tools",
    image: "/src/assets/TOOLS.jpeg",
    imageAlt: "Measuring instruments",
    description: "Precision measuring instruments for quality control.",
    longDescription: "High-precision measuring instruments for quality control and inspection with accurate and reliable measurements.",
    features: ["High accuracy", "Digital display", "Multiple functions", "Durable construction", "Calibration certified"],
    rating: 4.7,
    inStock: true
  },
  {
    id: "tool-004",
    name: "Safety Equipment",
    category: "Tools",
    image: "/src/assets/TOOLS.jpeg",
    imageAlt: "Safety equipment",
    description: "Comprehensive safety equipment for workplace protection.",
    longDescription: "Complete range of safety equipment designed to protect workers in industrial environments with certified protection levels.",
    features: ["Safety certified", "Comfortable fit", "Durable materials", "Wide protection range", "Easy maintenance"],
    rating: 4.8,
    inStock: true
  },
  {
    id: "tool-005",
    name: "Workshop Equipment",
    category: "Tools",
    image: "/src/assets/TOOLS.jpeg",
    imageAlt: "Workshop equipment",
    description: "Essential workshop equipment for manufacturing.",
    longDescription: "Comprehensive workshop equipment including workbenches, storage solutions, and organization systems for efficient manufacturing.",
    features: ["Heavy duty construction", "Modular design", "Space efficient", "Easy assembly", "Versatile applications"],
    rating: 4.4,
    inStock: true
  },
  {
    id: "tool-006",
    name: "Testing Equipment",
    category: "Tools",
    image: "/src/assets/TOOLS.jpeg",
    imageAlt: "Testing equipment",
    description: "Professional testing equipment for quality assurance.",
    longDescription: "Advanced testing equipment for quality assurance and product validation with reliable and accurate results.",
    features: ["High accuracy", "Multiple test modes", "Data logging", "Easy operation", "Industry standards compliant"],
    rating: 4.6,
    inStock: true
  }
];

// Helper functions
export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getRelatedProducts = (productId: string, limit: number = 4): Product[] => {
  const product = getProductById(productId);
  if (!product) return [];
  
  return products
    .filter(p => p.id !== productId && p.category === product.category)
    .slice(0, limit);
};

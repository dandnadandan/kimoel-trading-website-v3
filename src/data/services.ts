export interface Service {
  id: string;
  name: string;
  category: string;
  image: string;
  imageAlt: string;
  description: string;
  longDescription: string;
  features: string[];
  rating: number;
  duration: string;
  available: boolean;
}

export const services: Service[] = [
  // Engineering Services
  {
    id: "eng-001",
    name: "Automation and Machine Design",
    category: "Engineering Services",
    image: "/src/assets/Automation and Machine Design.png",
    imageAlt: "Automation and machine design",
    description: "Custom automation solutions and machine design services.",
    longDescription: "Comprehensive automation and machine design services including concept development, detailed engineering, and implementation support for industrial automation projects.",
    features: ["Custom solutions", "PLC programming", "HMI design", "System integration", "Commissioning support"],
    rating: 4.8,
    duration: "4-8 weeks",
    available: true
  },
  {
    id: "eng-002",
    name: "Electrical Engineering Design",
    category: "Engineering Services",
    image: "/src/assets/Electrical Panel.png",
    imageAlt: "Electrical engineering design",
    description: "Professional electrical engineering and design services.",
    longDescription: "Expert electrical engineering services covering power systems, control panels, and electrical infrastructure design for industrial facilities.",
    features: ["Power system analysis", "Control panel design", "Safety compliance", "Energy optimization", "Documentation"],
    rating: 4.7,
    duration: "3-6 weeks",
    available: true
  },
  {
    id: "eng-003",
    name: "Sheet Metal Design",
    category: "Engineering Services",
    image: "/src/assets/MECHANICAL COMPONENTS.png",
    imageAlt: "Sheet metal design",
    description: "Precision sheet metal design and fabrication services.",
    longDescription: "Specialized sheet metal design services with detailed engineering drawings, material selection, and fabrication support for custom components.",
    features: ["CAD design", "Material selection", "Prototyping", "Production support", "Quality assurance"],
    rating: 4.6,
    duration: "2-4 weeks",
    available: true
  },
  {
    id: "eng-004",
    name: "Control Panel Design",
    category: "Engineering Services",
    image: "/src/assets/Electrical Panel.png",
    imageAlt: "Control panel design",
    description: "Custom control panel design and manufacturing.",
    longDescription: "Complete control panel design services including schematic design, component selection, panel layout, and manufacturing support.",
    features: ["Schematic design", "Component selection", "Panel layout", "Wiring diagrams", "Testing support"],
    rating: 4.9,
    duration: "3-5 weeks",
    available: true
  },
  {
    id: "eng-005",
    name: "Mechanical Design",
    category: "Engineering Services",
    image: "/src/assets/MECHANICAL COMPONENTS.png",
    imageAlt: "Mechanical design",
    description: "Comprehensive mechanical design and engineering services.",
    longDescription: "Professional mechanical design services covering product development, machine design, and engineering analysis for industrial applications.",
    features: ["3D modeling", "FEA analysis", "Material selection", "Prototyping", "Design optimization"],
    rating: 4.7,
    duration: "4-6 weeks",
    available: true
  },
  {
    id: "eng-006",
    name: "Process Engineering",
    category: "Engineering Services",
    image: "/src/assets/ENGINEERING SERVICES.jpg",
    imageAlt: "Process engineering",
    description: "Process optimization and engineering solutions.",
    longDescription: "Process engineering services focusing on workflow optimization, efficiency improvements, and system integration for manufacturing operations.",
    features: ["Process analysis", "Workflow optimization", "System integration", "Efficiency improvement", "Cost reduction"],
    rating: 4.5,
    duration: "3-8 weeks",
    available: true
  },
  {
    id: "eng-007",
    name: "Structural Design",
    category: "Engineering Services",
    image: "/src/assets/ENGINEERING SERVICES.jpg",
    imageAlt: "Structural design",
    description: "Professional structural design and analysis services.",
    longDescription: "Structural engineering services including design, analysis, and certification for buildings, equipment, and industrial structures.",
    features: ["Structural analysis", "Design optimization", "Safety compliance", "Load calculations", "Certification support"],
    rating: 4.8,
    duration: "4-10 weeks",
    available: true
  },
  {
    id: "eng-008",
    name: "Architectural and Structural Design",
    category: "Engineering Services",
    image: "/src/assets/Architectural and Structural Design.jpg",
    imageAlt: "Architectural and structural design",
    description: "Integrated architectural and structural design services.",
    longDescription: "Comprehensive architectural and structural design services combining aesthetics with engineering excellence for commercial and industrial projects.",
    features: ["Architectural design", "Structural engineering", "3D visualization", "Permit support", "Project management"],
    rating: 4.9,
    duration: "6-12 weeks",
    available: true
  },

  // Machining and Fabrication
  {
    id: "mach-001",
    name: "CNC Machining Services",
    category: "Machining and Fabrication",
    image: "/src/assets/MACHINING AND FABRICATION.jpg",
    imageAlt: "CNC machining services",
    description: "Precision CNC machining for custom components.",
    longDescription: "Advanced CNC machining services including milling, turning, and precision manufacturing for custom components with tight tolerances.",
    features: ["High precision", "Multiple materials", "Complex geometries", "Quality control", "Fast turnaround"],
    rating: 4.8,
    duration: "1-3 weeks",
    available: true
  },
  {
    id: "mach-002",
    name: "Metal Fabrication",
    category: "Machining and Fabrication",
    image: "/src/assets/MACHINING AND FABRICATION.jpg",
    imageAlt: "Metal fabrication",
    description: "Custom metal fabrication and welding services.",
    longDescription: "Comprehensive metal fabrication services including cutting, welding, forming, and assembly for custom metal structures and components.",
    features: ["Custom fabrication", "Welding services", "Assembly support", "Quality inspection", "Finishing services"],
    rating: 4.6,
    duration: "2-4 weeks",
    available: true
  },
  {
    id: "mach-003",
    name: "Precision Assembly",
    category: "Machining and Fabrication",
    image: "/src/assets/MACHINING AND FABRICATION.jpg",
    imageAlt: "Precision assembly",
    description: "Precision assembly and mechanical integration.",
    longDescription: "Precision assembly services for mechanical components, equipment, and systems with attention to detail and quality standards.",
    features: ["Precision assembly", "Quality testing", "Mechanical integration", "Documentation", "Packaging support"],
    rating: 4.7,
    duration: "1-2 weeks",
    available: true
  },
  {
    id: "mach-004",
    name: "Prototype Development",
    category: "Machining and Fabrication",
    image: "/src/assets/MACHINING AND FABRICATION.jpg",
    imageAlt: "Prototype development",
    description: "Rapid prototype development and testing.",
    longDescription: "Prototype development services including design validation, material testing, and iterative improvements for new product development.",
    features: ["Rapid prototyping", "Design validation", "Material testing", "Iterative improvements", "Documentation"],
    rating: 4.5,
    duration: "2-6 weeks",
    available: true
  },
  {
    id: "mach-005",
    name: "Custom Tooling",
    category: "Machining and Fabrication",
    image: "/src/assets/MACHINING AND FABRICATION.jpg",
    imageAlt: "Custom tooling",
    description: "Custom tooling and fixture design and manufacturing.",
    longDescription: "Custom tooling services including jigs, fixtures, dies, and specialized tools for manufacturing processes and quality improvement.",
    features: ["Custom design", "Precision manufacturing", "Material selection", "Testing support", "Maintenance services"],
    rating: 4.8,
    duration: "3-5 weeks",
    available: true
  },
  {
    id: "mach-006",
    name: "Equipment Modification",
    category: "Machining and Fabrication",
    image: "/src/assets/MACHINING AND FABRICATION.jpg",
    imageAlt: "Equipment modification",
    description: "Industrial equipment modification and upgrading.",
    longDescription: "Equipment modification services including retrofitting, upgrading, and customizing industrial equipment for improved performance and functionality.",
    features: ["Equipment retrofitting", "Performance upgrades", "Custom modifications", "Testing support", "Documentation"],
    rating: 4.6,
    duration: "2-4 weeks",
    available: true
  },
  {
    id: "mach-007",
    name: "Quality Inspection",
    category: "Machining and Fabrication",
    image: "/src/assets/MACHINING AND FABRICATION.jpg",
    imageAlt: "Quality inspection",
    description: "Professional quality inspection and testing services.",
    longDescription: "Comprehensive quality inspection services including dimensional analysis, material testing, and certification for manufactured components.",
    features: ["Dimensional inspection", "Material testing", "Certification services", "Documentation", "Statistical analysis"],
    rating: 4.9,
    duration: "1-2 weeks",
    available: true
  },
  {
    id: "mach-008",
    name: "Surface Treatment",
    category: "Machining and Fabrication",
    image: "/src/assets/MACHINING AND FABRICATION.jpg",
    imageAlt: "Surface treatment",
    description: "Professional surface treatment and finishing services.",
    longDescription: "Surface treatment services including coating, plating, heat treatment, and finishing for enhanced durability and appearance.",
    features: ["Surface coating", "Heat treatment", "Plating services", "Finishing options", "Quality control"],
    rating: 4.7,
    duration: "1-3 weeks",
    available: true
  },

  // Civil Works
  {
    id: "civ-001",
    name: "Site Preparation",
    category: "Civil Works",
    image: "/src/assets/CIVIL WORKS.jpeg",
    imageAlt: "Site preparation",
    description: "Professional site preparation and earthworks.",
    longDescription: "Comprehensive site preparation services including excavation, grading, and site development for construction projects.",
    features: ["Excavation services", "Site grading", "Drainage systems", "Site development", "Environmental compliance"],
    rating: 4.6,
    duration: "2-6 weeks",
    available: true
  },
  {
    id: "civ-002",
    name: "Foundation Works",
    category: "Civil Works",
    image: "/src/assets/CIVIL WORKS.jpeg",
    imageAlt: "Foundation works",
    description: "Specialized foundation construction and engineering.",
    longDescription: "Foundation engineering services including design, construction, and testing for buildings and industrial structures.",
    features: ["Foundation design", "Concrete works", "Soil testing", "Structural support", "Quality assurance"],
    rating: 4.8,
    duration: "3-8 weeks",
    available: true
  },
  {
    id: "civ-003",
    name: "Building Construction",
    category: "Civil Works",
    image: "/src/assets/CIVIL WORKS.jpeg",
    imageAlt: "Building construction",
    description: "Complete building construction services.",
    longDescription: "Full-service building construction including commercial, industrial, and specialized structures with project management.",
    features: ["Project management", "Quality construction", "Safety compliance", "Timeline adherence", "Budget control"],
    rating: 4.7,
    duration: "8-24 weeks",
    available: true
  },
  {
    id: "civ-004",
    name: "Infrastructure Development",
    category: "Civil Works",
    image: "/src/assets/CIVIL WORKS.jpeg",
    imageAlt: "Infrastructure development",
    description: "Infrastructure development and construction services.",
    longDescription: "Infrastructure development services including roads, utilities, and support systems for industrial and commercial projects.",
    features: ["Road construction", "Utility installation", "Drainage systems", "Site utilities", "Infrastructure planning"],
    rating: 4.5,
    duration: "4-12 weeks",
    available: true
  },
  {
    id: "civ-005",
    name: "Renovation and Remodeling",
    category: "Civil Works",
    image: "/src/assets/CIVIL WORKS.jpeg",
    imageAlt: "Renovation and remodeling",
    description: "Professional renovation and remodeling services.",
    longDescription: "Renovation and remodeling services for existing buildings and facilities including modernization and space optimization.",
    features: ["Space planning", "Modernization", "Structural upgrades", "Interior renovation", "Energy efficiency"],
    rating: 4.6,
    duration: "4-10 weeks",
    available: true
  },
  {
    id: "civ-006",
    name: "Landscaping and Site Works",
    category: "Civil Works",
    image: "/src/assets/CIVIL WORKS.jpeg",
    imageAlt: "Landscaping and site works",
    description: "Professional landscaping and site improvement.",
    longDescription: "Landscaping and site improvement services including design, installation, and maintenance for commercial and industrial properties.",
    features: ["Landscape design", "Site improvement", "Irrigation systems", "Maintenance services", "Environmental enhancement"],
    rating: 4.4,
    duration: "2-6 weeks",
    available: true
  },
  {
    id: "civ-007",
    name: "Structural Repairs",
    category: "Civil Works",
    image: "/src/assets/CIVIL WORKS.jpeg",
    imageAlt: "Structural repairs",
    description: "Structural repair and reinforcement services.",
    longDescription: "Structural repair services including assessment, reinforcement, and restoration of damaged or deteriorating structures.",
    features: ["Structural assessment", "Repair solutions", "Reinforcement work", "Restoration services", "Safety improvements"],
    rating: 4.7,
    duration: "2-8 weeks",
    available: true
  },
  {
    id: "civ-008",
    name: "Project Management",
    category: "Civil Works",
    image: "/src/assets/CIVIL WORKS.jpeg",
    imageAlt: "Project management",
    description: "Comprehensive construction project management.",
    longDescription: "Professional project management services for construction projects including planning, coordination, and quality control.",
    features: ["Project planning", "Resource coordination", "Quality control", "Timeline management", "Budget oversight"],
    rating: 4.8,
    duration: "Project-based",
    available: true
  }
];

// Helper functions
export const getServicesByCategory = (category: string): Service[] => {
  return services.filter(service => service.category === category);
};

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};

export const getRelatedServices = (serviceId: string, limit: number = 4): Service[] => {
  const service = getServiceById(serviceId);
  if (!service) return [];
  
  return services
    .filter(s => s.id !== serviceId && s.category === service.category)
    .slice(0, limit);
};

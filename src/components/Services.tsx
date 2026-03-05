// Services.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DetailsModal from "./DetailsModal";
import { getServicesByCategory, getRelatedServices } from "@/data/services";
import { useInvoice } from "@/contexts/InvoiceContext";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import category images
import engineeringImage from "@/assets/ENGINEERING SERVICES.jpg";
import machiningImage from "@/assets/MACHINING AND FABRICATION.jpg";
import civilWorksImage from "@/assets/CIVIL WORKS.jpeg";

// Sub-service images
import automationDesign from "@/assets/Automation and Machine Design.png";
import architecturalDesign from "@/assets/Architectural and Structural Design.jpg";
import electricalWorks from "@/assets/Electrical Works.png";
import sheetMetal from "@/assets/Sheet Metal Works.png";
import controlPanel from "@/assets/Fabrication of Electrical Control Panel.png";

import cncLaser from "@/assets/CNC Laser Cutting Machine.png";
import cncMilling from "@/assets/CNC Milling Machine.jpg";
import latheMachine from "@/assets/Lathe Machine.png";
import millingMachine from "@/assets/Milling Machine.png";
import pressBrake from "@/assets/Press Break Bending Machine.jpg";
import shearing from "@/assets/Shearing Machine.jpg";
import bandSaw from "@/assets/Band Saw Machine.jpg";

import backhoe from "@/assets/Rental of Backhoe.jpg";
import roadRehab from "@/assets/Road Rehabilitation.png";
import concreting from "@/assets/Concreting.png";
import structural from "@/assets/Structural.png.jpg";
import fireProtection from "@/assets/Fire Protection System.png";

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10, transition: { duration: 0.18 } },
};

const Services = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeTap, setActiveTap] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { toggleDrawer, getTotalRequests } = useInvoice();

  // Main categories
  const categories = [
    {
      title: "Engineering Services",
      description:
        "Automation & design, electrical works, sheet metal, and control panels.",
      image: engineeringImage,
    },
    {
      title: "Machining & Fabrication",
      description:
        "CNC machining, milling, lathe, bending, shearing, and fabrication services.",
      image: machiningImage,
    },
    {
      title: "Civil Works",
      description:
        "Comprehensive construction and civil engineering services.",
      image: civilWorksImage,
    },
  ];

  const handleServiceClick = (service: any) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  const getRelatedItems = () => {
    if (!selectedService) return [];
    return getRelatedServices(selectedService.id, 4);
  };

  return (
    <section id="services" className="py-14 md:py-20 bg-muted/30 scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between mb-10 md:mb-16">
          <div className="text-center flex-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-blue-dark mb-3 md:mb-4">
              Our Services
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide engineering, machining, and civil works services to support
              industrial and construction needs with precision and reliability.
            </p>
          </div>
          <Button
            onClick={toggleDrawer}
            variant="outline"
            className="relative ml-4"
          >
            <FileText className="w-5 h-5" />
            {getTotalRequests() > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {getTotalRequests()}
              </span>
            )}
          </Button>
        </div>

        <AnimatePresence initial={false} mode="wait">
          {/* Category Grid */}
          {!activeCategory && (
            <motion.div
              key="categories"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={gridVariants}
              viewport={{ once: true, amount: 0.2 }}
            >
              {categories.map((category, i) => (
                <motion.button
                  key={category.title}
                  onClick={() => {
                    setActiveCategory(category.title);
                    setActiveTap(category.title);
                  }}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={itemVariants}
                  transition={{
                    delay: i * 0.03,
                    type: "spring",
                    stiffness: 220,
                    damping: 20,
                  }}
                  whileHover={{ y: -6 }}
                  whileTap={{ scale: 0.98 }}
                  className="group text-left bg-white rounded-2xl overflow-hidden shadow-md transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 md:hover:shadow-xl"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <motion.img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.06 }}
                      transition={{ type: "spring", stiffness: 220 }}
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 sm:p-5">
                    <h3
                      className={`text-lg sm:text-xl font-semibold transition-colors duration-300 ${
                        activeTap === category.title
                          ? "text-[#FFD700]"
                          : "text-brand-blue-dark md:group-hover:text-[#FFD700]"
                      }`}
                    >
                      {category.title}
                    </h3>
                    <p className="mt-1 text-sm sm:text-base text-gray-600">
                      {category.description}
                    </p>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          )}

          {/* Sub-services Grid */}
          {activeCategory && (
            <motion.div
              key={`services-${activeCategory}`}
              className="mt-8 md:mt-12"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.22 }}
            >
              <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
                <button
                  onClick={() => {
                    setActiveCategory(null);
                    setActiveTap(null);
                  }}
                  className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-sm sm:text-base"
                  aria-label="Back to categories"
                >
                  ← Back to Categories
                </button>
                <h3 className="text-2xl sm:text-3xl font-bold text-brand-blue-dark text-center w-full sm:w-auto">
                  {activeCategory}
                </h3>
              </div>

              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={gridVariants}
              >
                {getServicesByCategory(activeCategory).map((service, index) => (
                  <motion.div
                    key={service.id}
                    variants={itemVariants}
                    whileHover={{ y: -6 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{
                      delay: index * 0.02,
                      type: "spring",
                      stiffness: 220,
                      damping: 20,
                    }}
                    layout
                  >
                    <div 
                      className="group bg-white rounded-2xl shadow-md overflow-hidden transition-shadow focus-within:ring-2 focus-within:ring-primary/60 cursor-pointer"
                      onClick={() => handleServiceClick(service)}
                    >
                      <motion.div
                        className="aspect-[16/9] overflow-hidden"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 220, damping: 20 }}
                        layout
                      >
                        <img
                          src={service.image}
                          alt={service.imageAlt}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </motion.div>
                      <div className="p-4 sm:p-5">
                        <h4 className="text-lg font-semibold text-brand-blue-dark transition-colors duration-300 group-hover:text-yellow-500">
                          {service.name}
                        </h4>
                        <p className="mt-1 text-sm sm:text-base text-gray-600">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Details Modal */}
      <DetailsModal
        isOpen={isModalOpen}
        onClose={closeModal}
        item={selectedService}
        itemType="service"
        relatedItems={getRelatedItems()}
      />
    </section>
  );
};

export default Services;

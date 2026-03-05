import React, { useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import DetailsModal from "./DetailsModal";
import { products, getProductsByCategory, getRelatedProducts } from "@/data/products";
import { useInvoice } from "@/contexts/InvoiceContext";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

// Category images
import electricalImage from "@/assets/ELECTRICAL.jpg";
import mechanicalImage from "@/assets/AC Motors and Gear Motors.png";
import pneumaticsImage from "@/assets/PNEUMATICS.png";
import toolsImage from "@/assets/TOOLS.jpeg";

// Product images
import electricalSupplies from "@/assets/Electrical Supplies.jpg";
import electricalPanel from "@/assets/Electrical Panel.png";
import cableTray from "@/assets/Cable Tray.jpg";
import acMotor from "@/assets/AC Motors and Gear Motors.png";
import bearings from "@/assets/Bearing and Seal.jpg";
import pneumaticsPart from "@/assets/Pneumatic Cylinder Accessories.jpg";
import conveyor from "@/assets/Conveyor System.png";
import jigs from "@/assets/Jigs and Fixtures.png";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeTap, setActiveTap] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { toggleDrawer, getTotalRequests } = useInvoice();

  const categories = [
    {
      title: "Electrical",
      description:
        "Electrical supplies and equipment including panels, cable trays, and more.",
      image: electricalImage,
    },
    {
      title: "Mechanical Components",
      description:
        "Industrial-grade motors, bearings, and seals for durability and precision.",
      image: mechanicalImage,
    },
    {
      title: "Automation & Pneumatics",
      description:
        "Pneumatic and automation parts designed for smooth control and efficiency.",
      image: pneumaticsImage,
    },
    {
      title: "Systems & Tooling",
      description:
        "Custom conveyor systems, jigs, and fixtures for industrial use.",
      image: toolsImage,
    },
  ];

  const handleProductClick = (product: any) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const getRelatedItems = () => {
    if (!selectedProduct) return [];
    return getRelatedProducts(selectedProduct.id, 4);
  };

  const gridVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="products" className="py-14 md:py-20 bg-muted/30 scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between mb-10 md:mb-16">
          <div className="text-center flex-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-blue-dark mb-3 md:mb-4">
              Our Products
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our range of electrical, mechanical, automation, and tooling
              products.
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

        {/* Category Grid */}
        {!activeCategory && (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={gridVariants}
          >
            {categories.map((category) => (
              <motion.button
                key={category.title}
                onClick={() => {
                  setActiveCategory(category.title);
                  setActiveTap(category.title);
                }}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                variants={itemVariants}
                className="group text-left bg-white rounded-2xl overflow-hidden shadow-md transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 md:hover:shadow-xl"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-300 md:group-hover:scale-105"
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

        {/* Sub-products Grid */}
        {activeCategory && (
          <div className="mt-8 md:mt-12">
            <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
              <button
                onClick={() => {
                  setActiveCategory(null);
                  setActiveTap(null);
                }}
                className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-sm sm:text-base"
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
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={gridVariants}
            >
              {getProductsByCategory(activeCategory).map((product, index) => (
                <motion.div
                  key={product.id}
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                >
                  <ProductCard
                    title={product.name}
                    description={product.description}
                    image={product.image}
                    imageAlt={product.imageAlt}
                    onToggle={() => handleProductClick(product)}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}
      </div>

      {/* Details Modal */}
      <DetailsModal
        isOpen={isModalOpen}
        onClose={closeModal}
        item={selectedProduct}
        itemType="product"
        relatedItems={getRelatedItems()}
      />
    </section>
  );
};

export default Products;

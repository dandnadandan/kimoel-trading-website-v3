import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  buttonText?: string;
  onToggle?: () => void; // Add onToggle prop
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  image,
  imageAlt,
  buttonText,
  onToggle,
}) => {
  // Reuse the same animation pattern as Products.tsx
  const itemVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group bg-white rounded-2xl shadow-md overflow-hidden transition-shadow hover:shadow-xl"
    >
      {/* Image */}
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-brand-blue-dark mb-2 sm:mb-3 transition-colors duration-300 group-hover:text-[#FFD700]">
            {title}
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">
            {description}
          </p>
        </div>

        {/* View Details Button */}
        <Button
          onClick={(e) => {
            e.stopPropagation(); // Prevent card click
            onToggle?.();
          }}
          variant="outline"
          className="w-full border-black text-black hover:bg-black hover:text-white transition-colors"
        >
          View Details
        </Button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;

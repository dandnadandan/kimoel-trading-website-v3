import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;

  // NEW controlled props
  active?: boolean;                // whether title should be gold
  onToggle?: () => void;           // called on tap/click
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  image,
  imageAlt,
  active = false,
  onToggle,
}) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      onClick={onToggle}       // works on both desktop & mobile
    >
      <Card className="group cursor-pointer rounded-2xl overflow-hidden transition-shadow md:hover:shadow-card">
        {/* Image */}
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover transition-transform duration-300 md:group-hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <CardContent className="p-4 sm:p-6">
          <h3
            className={`text-lg sm:text-xl font-semibold mb-2 sm:mb-3 transition-colors duration-300 ${
              active
                ? "text-[#FFD700]"                               // tapped = gold
                : "text-brand-blue-dark md:group-hover:text-[#FFD700]" // hover = gold on desktop
            }`}
          >
            {title}
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
            {description}
          </p>
          
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
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProductCard;

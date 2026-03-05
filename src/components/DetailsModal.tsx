import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingCart, Minus, Plus, Check, Star, Package, Truck, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useInvoice } from '@/contexts/InvoiceContext';
import { Product } from '@/data/products';
import { Service } from '@/data/services';
import InvoiceRequestModal from './InvoiceRequestModal';

interface DetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: Product | Service;
  itemType: 'product' | 'service';
  relatedItems?: (Product | Service)[];
}

const DetailsModal: React.FC<DetailsModalProps> = ({
  isOpen,
  onClose,
  item,
  itemType,
  relatedItems = []
}) => {
  const { addRequest } = useInvoice();
  const [showInvoiceModal, setShowInvoiceModal] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Reset form state when modal opens/closes
  useEffect(() => {
    if (!isOpen) {
      setShowInvoiceModal(false);
      setQuantity(1);
      setSelectedImageIndex(0);
    }
  }, [isOpen]);

  const handleInvoiceRequest = (formData: any) => {
    addRequest({
      itemType: itemType,
      itemName: item.name,
      itemId: item.id,
      quantity: quantity,
      customerInfo: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        notes: formData.notes,
      },
    });
    
    setShowInvoiceModal(false);
  };

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= 99) {
      setQuantity(newQuantity);
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating)
            ? 'text-yellow-400 fill-yellow-400'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  // Generate default specs if not provided
  const getDefaultSpecs = () => {
    if (itemType === 'product') {
      return {
        'Type': item?.category || 'Product',
        'Model': item?.name || 'Standard Model',
        'Condition': 'New',
        'Warranty': '1 Year',
        'Origin': 'Imported',
        'Availability': (item as any)?.inStock ? 'In Stock' : 'Out of Stock'
      };
    } else {
      return {
        'Service Type': item?.category || 'Service',
        'Duration': (item as any)?.duration || 'Varies',
        'Location': 'On-site Available',
        'Experience': '5+ Years',
        'Certification': 'Professional',
        'Availability': 'Available'
      };
    }
  };

  const specs = (item as any)?.specs || getDefaultSpecs();
  const stockCount = (item as any)?.stockCount || 50;
  const images = (item as any)?.images || [item?.image];

  if (!isOpen || !item) return null;

  return (
    <>
      <AnimatePresence>
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          onClick={onClose}
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 25,
            duration: 0.3
          }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[85vh] overflow-hidden pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 p-2 rounded-full bg-white/90 hover:bg-white shadow-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col lg:flex-row h-full">
              {/* Left: Image Gallery */}
              <div className="lg:w-1/2 bg-gray-50 p-8">
                <div className="aspect-square rounded-xl overflow-hidden bg-white shadow-lg mb-4">
                  <img
                    src={images[selectedImageIndex] || '/placeholder.jpg'}
                    alt={item?.imageAlt || 'Product image'}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = '/placeholder.jpg';
                    }}
                  />
                </div>
                
                {/* Thumbnails */}
                {images.length > 1 && (
                  <div className="flex gap-2 justify-center">
                    {images.map((image: string, index: number) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImageIndex(index)}
                        className={`aspect-square w-16 rounded-lg overflow-hidden bg-white shadow cursor-pointer transition-all ${
                          selectedImageIndex === index 
                            ? 'ring-2 ring-blue-500' 
                            : 'hover:ring-2 hover:ring-gray-300'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${item.imageAlt} ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Right: Details Panel */}
              <div className="lg:w-1/2 p-8 overflow-y-auto">
                {/* Product Name */}
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {item?.name || 'Product'}
                </h1>

                {/* Price and Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {renderStars(item?.rating || 4.5)}
                  </div>
                  <span className="text-sm text-gray-600">
                    {item?.rating || 4.5} ({Math.floor(Math.random() * 50) + 10} reviews)
                  </span>
                </div>

                {/* Price and Stock */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <span className="text-3xl font-bold text-gray-900">
                      Contact for Price
                    </span>
                    <Badge className="bg-green-100 text-green-800 border-green-200">
                      {itemType === 'product' 
                        ? `In Stock (${stockCount})` 
                        : 'Available'
                      }
                    </Badge>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {item?.longDescription || item?.description || 'No description available.'}
                </p>

                {/* Divider */}
                <div className="border-t border-gray-200 mb-6"></div>

                {/* Quantity Stepper */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-sm font-medium text-gray-700">Quantity:</span>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => handleQuantityChange(-1)}
                      className="p-2 hover:bg-gray-100 transition-colors"
                      disabled={quantity <= 1}
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 py-2 min-w-[60px] text-center font-medium">
                      {quantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(1)}
                      className="p-2 hover:bg-gray-100 transition-colors"
                      disabled={quantity >= 99}
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Create Invoice Button */}
                <Button
                  onClick={() => setShowInvoiceModal(true)}
                  className="w-full bg-black text-white hover:bg-gray-800 py-4 text-lg font-semibold mb-8"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Create Invoice
                </Button>

                {/* Perks Row */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg">
                    <Package className="w-6 h-6 text-blue-600 mb-2" />
                    <span className="text-sm font-medium text-gray-900">Premium Quality</span>
                  </div>
                  <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg">
                    <Truck className="w-6 h-6 text-blue-600 mb-2" />
                    <span className="text-sm font-medium text-gray-900">Fast Delivery</span>
                  </div>
                  <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg">
                    <Shield className="w-6 h-6 text-blue-600 mb-2" />
                    <span className="text-sm font-medium text-gray-900">Warranty Included</span>
                  </div>
                </div>

                {/* Specifications Table */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Specifications</h3>
                  <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
                    {Object.entries(specs).map(([key, value], index) => (
                      <div 
                        key={key} 
                        className={`flex ${index !== Object.entries(specs).length - 1 ? 'border-b border-gray-200' : ''}`}
                      >
                        <div className="w-2/5 px-4 py-3 bg-white font-medium text-sm text-gray-900 border-r border-gray-200">
                          {key}
                        </div>
                        <div className="w-3/5 px-4 py-3 bg-gray-50 text-sm text-gray-700">
                          {String(value)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Invoice Request Modal */}
      <InvoiceRequestModal
        isOpen={showInvoiceModal}
        onClose={() => setShowInvoiceModal(false)}
        item={item}
        itemType={itemType}
        onSubmit={handleInvoiceRequest}
      />
    </>
  );
};

export default DetailsModal;

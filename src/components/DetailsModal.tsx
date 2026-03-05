import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, Send, Check, Star } from 'lucide-react';
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

  // Reset form state when modal opens/closes
  useEffect(() => {
    if (!isOpen) {
      setShowInvoiceModal(false);
    }
  }, [isOpen]);

  const handleInvoiceRequest = (formData: any) => {
    addRequest({
      itemType: itemType,
      itemName: item.name,
      itemId: item.id,
      quantity: 1, // Default quantity since we removed the field
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

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
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
          className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 hover:bg-white shadow-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col lg:flex-row h-full">
            {/* Image Gallery */}
            <div className="lg:w-1/2 bg-gray-50 p-6 lg:p-8">
              <div className="aspect-square rounded-xl overflow-hidden bg-white shadow-lg">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="lg:w-1/2 p-6 lg:p-8 overflow-y-auto">
              {/* Header */}
              <div className="mb-6">
                <Badge variant="secondary" className="mb-3">
                  {item.category}
                </Badge>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                  {item.name}
                </h2>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {renderStars(item.rating)}
                  </div>
                  <span className="text-sm text-gray-600">
                    {item.rating} ({Math.floor(Math.random() * 50) + 10} reviews)
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.longDescription || item.description}
                </p>
              </div>

              {/* Features */}
              {item.features && item.features.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Features</h3>
                  <ul className="space-y-2">
                    {item.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-600">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Stock/Availability */}
              <div className="flex items-center gap-2 mb-6">
                {itemType === 'product' ? (
                  <>
                    {(item as Product).inStock ? (
                      <div className="flex items-center gap-1 text-green-600">
                        <Check className="w-4 h-4" />
                        <span className="text-sm font-medium">In Stock</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1 text-red-600">
                        <X className="w-4 h-4" />
                        <span className="text-sm font-medium">Out of Stock</span>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="flex items-center gap-1 text-green-600">
                    <Check className="w-4 h-4" />
                    <span className="text-sm font-medium">Available</span>
                  </div>
                )}
              </div>

              {/* Create Invoice Section */}
              <div className="border-t pt-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Request Pricing</h3>
                      <p className="text-gray-600 text-sm mt-1">
                        Get a customized quote for this {itemType}
                      </p>
                    </div>
                    <FileText className="w-8 h-8 text-gray-400" />
                  </div>
                  
                  <Button
                    onClick={() => setShowInvoiceModal(true)}
                    className="w-full bg-black text-white hover:bg-gray-800 py-3 text-lg font-semibold"
                  >
                    Create Invoice
                  </Button>
                  
                  <p className="text-xs text-gray-500 text-center mt-3">
                    No commitment required. We'll contact you within 24 hours.
                  </p>
                </div>
              </div>

              {/* Additional Info for Services */}
              {itemType === 'service' && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Service Details</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>Duration: {(item as Service).duration}</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Related Items */}
          {relatedItems.length > 0 && (
            <div className="border-t p-6 lg:p-8">
              <h3 className="text-lg font-semibold mb-4">Related {itemType === 'product' ? 'Products' : 'Services'}</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {relatedItems.map((relatedItem) => (
                  <div
                    key={relatedItem.id}
                    className="bg-gray-50 rounded-lg p-3 cursor-pointer hover:bg-gray-100 transition-colors"
                    onClick={() => {
                      // This would typically open the related item in the modal
                      // For now, we'll just close and the parent can handle opening the new item
                      onClose();
                    }}
                  >
                    <div className="aspect-square rounded-lg overflow-hidden mb-2">
                      <img
                        src={relatedItem.image}
                        alt={relatedItem.imageAlt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-sm font-medium truncate">{relatedItem.name}</h4>
                    <p className="text-xs text-gray-600">
                      Contact for pricing
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
      
      {/* Invoice Request Modal */}
      <InvoiceRequestModal
        isOpen={showInvoiceModal}
        onClose={() => setShowInvoiceModal(false)}
        item={item}
        itemType={itemType}
        onSubmit={handleInvoiceRequest}
      />
    </AnimatePresence>
  );
};

export default DetailsModal;

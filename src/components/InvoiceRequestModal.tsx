import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Check, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Product } from '@/data/products';
import { Service } from '@/data/services';

interface InvoiceRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: Product | Service;
  itemType: 'product' | 'service';
  onSubmit: (formData: any) => void;
}

const InvoiceRequestModal: React.FC<InvoiceRequestModalProps> = ({
  isOpen,
  onClose,
  item,
  itemType,
  onSubmit
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    onSubmit({
      ...formData
    });
    
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 3000);
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
          className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-hidden"
        >
          {/* Header */}
          <div className="bg-white border-b border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileText className="w-6 h-6 text-gray-900" />
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Request Information</h2>
                  <p className="text-gray-600 text-sm">
                    {item.name} - {itemType === 'product' ? 'Product' : 'Service'}
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Form */}
          <div className="p-6">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <Input
                      name="company"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div>
                  <Textarea
                    name="notes"
                    placeholder="Additional requirements or notes..."
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows={3}
                  />
                </div>
                <div className="flex gap-2 pt-4">
                  <Button
                    type="submit"
                    className="flex-1 bg-black text-white hover:bg-gray-800"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Request
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={onClose}
                    className="border-gray-300 text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Request Sent!</h3>
                <p className="text-gray-600 mb-4">
                  We'll contact you shortly with pricing information for {item.name}.
                </p>
                <Button
                  onClick={onClose}
                  className="bg-black text-white hover:bg-gray-800"
                >
                  Close
                </Button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default InvoiceRequestModal;

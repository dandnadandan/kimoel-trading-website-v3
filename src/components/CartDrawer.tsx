import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingCart, Mail, Phone, MessageSquare, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useCart } from '@/contexts/CartContext';

const CartDrawer: React.FC = () => {
  const { state, removeItem, updateQuantity, clearCart, toggleCart, getTotalPrice } = useCart();
  const [showQuotationForm, setShowQuotationForm] = useState(false);
  const [quotationSubmitted, setQuotationSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleQuotationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the data to a backend
    console.log('Quotation request:', {
      ...formData,
      items: state.items,
      total: getTotalPrice()
    });
    
    setQuotationSubmitted(true);
    setTimeout(() => {
      setQuotationSubmitted(false);
      setShowQuotationForm(false);
      clearCart();
      toggleCart();
    }, 3000);
  };

  const subtotal = getTotalPrice();

  return (
    <AnimatePresence>
      {state.isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            onClick={toggleCart}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                <h2 className="text-lg font-semibold">Shopping Cart</h2>
                <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                  {state.items.reduce((total, item) => total + item.qty, 0)}
                </span>
              </div>
              <button
                onClick={toggleCart}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Content */}
            <div className="flex-1 overflow-y-auto">
              {state.items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-gray-500 p-8">
                  <ShoppingCart className="w-16 h-16 mb-4 text-gray-300" />
                  <p className="text-lg font-medium mb-2">Your cart is empty</p>
                  <p className="text-sm text-center">Add products or services to get started</p>
                </div>
              ) : (
                <>
                  {/* Cart Items */}
                  <div className="p-4 space-y-4">
                    {state.items.map((item) => (
                      <div key={item.id} className="bg-gray-50 rounded-lg p-4">
                        <div className="flex gap-4">
                          {/* Image */}
                          <div className="w-20 h-20 rounded-lg overflow-hidden bg-white flex-shrink-0">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          {/* Details */}
                          <div className="flex-1">
                            <h3 className="font-medium text-sm mb-1">{item.name}</h3>
                            <p className="text-xs text-gray-600 mb-2 capitalize">{item.type}</p>
                            <p className="font-semibold text-blue-600">${item.price.toFixed(2)}</p>

                            {/* Quantity Controls */}
                            <div className="flex items-center gap-2 mt-2">
                              <button
                                onClick={() => updateQuantity(item.id, item.qty - 1)}
                                className="p-1 rounded hover:bg-gray-200 transition-colors"
                                disabled={item.qty <= 1}
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="text-sm font-medium w-8 text-center">{item.qty}</span>
                              <button
                                onClick={() => updateQuantity(item.id, item.qty + 1)}
                                className="p-1 rounded hover:bg-gray-200 transition-colors"
                                disabled={item.qty >= 99}
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                              <button
                                onClick={() => removeItem(item.id)}
                                className="p-1 rounded hover:bg-red-100 text-red-600 transition-colors ml-auto"
                              >
                                <Trash2 className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Summary */}
                  <div className="border-t p-4 bg-gray-50">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Subtotal</span>
                        <span className="font-semibold">${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Tax (estimated)</span>
                        <span className="font-semibold">${(subtotal * 0.1).toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-lg font-semibold pt-2 border-t">
                        <span>Total</span>
                        <span className="text-blue-600">${(subtotal * 1.1).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Footer Actions */}
            {state.items.length > 0 && (
              <div className="border-t p-4 space-y-3">
                {!showQuotationForm ? (
                  <>
                    <Button
                      onClick={() => setShowQuotationForm(true)}
                      className="w-full py-3"
                      size="lg"
                    >
                      Request Quotation
                    </Button>
                    <Button
                      variant="outline"
                      onClick={clearCart}
                      className="w-full"
                    >
                      Clear Cart
                    </Button>
                  </>
                ) : (
                  <form onSubmit={handleQuotationSubmit} className="space-y-3">
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
                    <div>
                      <Input
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <Textarea
                        name="notes"
                        placeholder="Additional notes or requirements..."
                        value={formData.notes}
                        onChange={handleInputChange}
                        rows={3}
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button
                        type="submit"
                        className="flex-1"
                        disabled={quotationSubmitted}
                      >
                        {quotationSubmitted ? (
                          <>
                            <Check className="w-4 h-4 mr-2" />
                            Submitted!
                          </>
                        ) : (
                          'Submit Request'
                        )}
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setShowQuotationForm(false)}
                        disabled={quotationSubmitted}
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, Mail, Phone, Check, Clock, Send, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { useInvoice } from '@/contexts/InvoiceContext';

const InvoiceDrawer: React.FC = () => {
  const { state, removeRequest, updateStatus, clearRequests, toggleDrawer, getTotalRequests } = useInvoice();
  const [showBulkForm, setShowBulkForm] = useState(false);
  const [bulkSubmitted, setBulkSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    notes: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleBulkSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the data to a backend
    console.log('Bulk invoice request:', {
      ...formData,
      requests: state.requests
    });
    
    // Update all pending requests to 'sent' status
    state.requests.forEach(req => {
      if (req.status === 'pending') {
        updateStatus(req.id, 'sent');
      }
    });
    
    setBulkSubmitted(true);
    setTimeout(() => {
      setBulkSubmitted(false);
      setShowBulkForm(false);
      clearRequests();
      toggleDrawer();
    }, 3000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'sent':
        return 'bg-blue-100 text-blue-800';
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-3 h-3" />;
      case 'sent':
        return <Send className="w-3 h-3" />;
      case 'confirmed':
        return <Check className="w-3 h-3" />;
      default:
        return <Clock className="w-3 h-3" />;
    }
  };

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
            onClick={toggleDrawer}
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
                <FileText className="w-5 h-5" />
                <h2 className="text-lg font-semibold">Invoice Requests</h2>
                <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                  {getTotalRequests()}
                </span>
              </div>
              <button
                onClick={toggleDrawer}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto">
              {state.requests.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-gray-500 p-8">
                  <FileText className="w-16 h-16 mb-4 text-gray-300" />
                  <p className="text-lg font-medium mb-2">No invoice requests</p>
                  <p className="text-sm text-center">Create invoices for products and services to get started</p>
                </div>
              ) : (
                <div className="p-4 space-y-4">
                  {state.requests.map((request) => (
                    <div key={request.id} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h3 className="font-medium text-sm mb-1">{request.itemName}</h3>
                          <p className="text-xs text-gray-600 capitalize mb-2">{request.itemType}</p>
                          <div className="flex items-center gap-2 mb-2">
                            <Badge className={getStatusColor(request.status)}>
                              <div className="flex items-center gap-1">
                                {getStatusIcon(request.status)}
                                <span className="text-xs">{request.status}</span>
                              </div>
                            </Badge>
                            <span className="text-xs text-gray-600">Qty: {request.quantity}</span>
                          </div>
                          <div className="text-xs text-gray-600 space-y-1">
                            <div className="flex items-center gap-1">
                              <Mail className="w-3 h-3" />
                              <span>{request.customerInfo.email}</span>
                            </div>
                            {request.customerInfo.phone && (
                              <div className="flex items-center gap-1">
                                <Phone className="w-3 h-3" />
                                <span>{request.customerInfo.phone}</span>
                              </div>
                            )}
                            {request.customerInfo.company && (
                              <div>{request.customerInfo.company}</div>
                            )}
                          </div>
                        </div>
                        <button
                          onClick={() => removeRequest(request.id)}
                          className="p-1 rounded hover:bg-red-100 text-red-600 transition-colors"
                        >
                          <Trash2 className="w-3 h-3" />
                        </button>
                      </div>
                      {request.customerInfo.notes && (
                        <div className="text-xs text-gray-600 bg-white p-2 rounded mt-2">
                          <strong>Notes:</strong> {request.customerInfo.notes}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer Actions */}
            {state.requests.length > 0 && (
              <div className="border-t p-4 space-y-3">
                {!showBulkForm ? (
                  <>
                    <Button
                      onClick={() => setShowBulkForm(true)}
                      className="w-full py-3"
                      size="lg"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Create All Invoices
                    </Button>
                    <Button
                      variant="outline"
                      onClick={clearRequests}
                      className="w-full"
                    >
                      Clear All
                    </Button>
                  </>
                ) : (
                  <form onSubmit={handleBulkSubmit} className="space-y-3">
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
                      <Input
                        name="company"
                        placeholder="Company Name"
                        value={formData.company}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <textarea
                        name="notes"
                        placeholder="Additional notes or requirements..."
                        value={formData.notes}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full p-2 border rounded-lg text-sm resize-none"
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button
                        type="submit"
                        className="flex-1"
                        disabled={bulkSubmitted}
                      >
                        {bulkSubmitted ? (
                          <>
                            <Check className="w-4 h-4 mr-2" />
                            Invoices Created!
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Create Invoices
                          </>
                        )}
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setShowBulkForm(false)}
                        disabled={bulkSubmitted}
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

export default InvoiceDrawer;

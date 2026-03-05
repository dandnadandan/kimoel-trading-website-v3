import React, { createContext, useContext, useReducer, useEffect } from 'react';

export interface InvoiceRequest {
  id: string;
  itemType: 'product' | 'service';
  itemName: string;
  itemId: string;
  quantity: number;
  customerInfo: {
    name: string;
    email: string;
    phone?: string;
    company?: string;
    notes?: string;
  };
  requestedAt: string;
  status: 'pending' | 'sent' | 'confirmed';
}

interface InvoiceState {
  requests: InvoiceRequest[];
  isOpen: boolean;
}

type InvoiceAction =
  | { type: 'ADD_REQUEST'; payload: Omit<InvoiceRequest, 'id' | 'requestedAt' | 'status'> }
  | { type: 'REMOVE_REQUEST'; payload: string }
  | { type: 'UPDATE_STATUS'; payload: { id: string; status: InvoiceRequest['status'] } }
  | { type: 'CLEAR_REQUESTS' }
  | { type: 'TOGGLE_DRAWER' }
  | { type: 'SET_REQUESTS'; payload: InvoiceRequest[] };

const initialState: InvoiceState = {
  requests: [],
  isOpen: false,
};

const invoiceReducer = (state: InvoiceState, action: InvoiceAction): InvoiceState => {
  switch (action.type) {
    case 'ADD_REQUEST': {
      const newRequest: InvoiceRequest = {
        ...action.payload,
        id: Date.now().toString(),
        requestedAt: new Date().toISOString(),
        status: 'pending',
      };
      return {
        ...state,
        requests: [...state.requests, newRequest],
      };
    }
    case 'REMOVE_REQUEST':
      return {
        ...state,
        requests: state.requests.filter(req => req.id !== action.payload),
      };
    case 'UPDATE_STATUS':
      return {
        ...state,
        requests: state.requests.map(req =>
          req.id === action.payload.id
            ? { ...req, status: action.payload.status }
            : req
        ),
      };
    case 'CLEAR_REQUESTS':
      return {
        ...state,
        requests: [],
      };
    case 'TOGGLE_DRAWER':
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    case 'SET_REQUESTS':
      return {
        ...state,
        requests: action.payload,
      };
    default:
      return state;
  }
};

interface InvoiceContextType {
  state: InvoiceState;
  addRequest: (request: Omit<InvoiceRequest, 'id' | 'requestedAt' | 'status'>) => void;
  removeRequest: (id: string) => void;
  updateStatus: (id: string, status: InvoiceRequest['status']) => void;
  clearRequests: () => void;
  toggleDrawer: () => void;
  getTotalRequests: () => number;
  getPendingRequests: () => InvoiceRequest[];
}

const InvoiceContext = createContext<InvoiceContextType | undefined>(undefined);

export const useInvoice = () => {
  const context = useContext(InvoiceContext);
  if (context === undefined) {
    throw new Error('useInvoice must be used within an InvoiceProvider');
  }
  return context;
};

interface InvoiceProviderProps {
  children: React.ReactNode;
}

export const InvoiceProvider: React.FC<InvoiceProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(invoiceReducer, initialState);

  // Load requests from localStorage on mount
  useEffect(() => {
    const savedRequests = localStorage.getItem('kimoel-invoice-requests');
    if (savedRequests) {
      try {
        const parsedRequests = JSON.parse(savedRequests);
        dispatch({ type: 'SET_REQUESTS', payload: parsedRequests });
      } catch (error) {
        console.error('Failed to load invoice requests from localStorage:', error);
      }
    }
  }, []);

  // Save requests to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('kimoel-invoice-requests', JSON.stringify(state.requests));
  }, [state.requests]);

  const addRequest = (request: Omit<InvoiceRequest, 'id' | 'requestedAt' | 'status'>) => {
    dispatch({ type: 'ADD_REQUEST', payload: request });
  };

  const removeRequest = (id: string) => {
    dispatch({ type: 'REMOVE_REQUEST', payload: id });
  };

  const updateStatus = (id: string, status: InvoiceRequest['status']) => {
    dispatch({ type: 'UPDATE_STATUS', payload: { id, status } });
  };

  const clearRequests = () => {
    dispatch({ type: 'CLEAR_REQUESTS' });
  };

  const toggleDrawer = () => {
    dispatch({ type: 'TOGGLE_DRAWER' });
  };

  const getTotalRequests = () => {
    return state.requests.length;
  };

  const getPendingRequests = () => {
    return state.requests.filter(req => req.status === 'pending');
  };

  const value: InvoiceContextType = {
    state,
    addRequest,
    removeRequest,
    updateStatus,
    clearRequests,
    toggleDrawer,
    getTotalRequests,
    getPendingRequests,
  };

  return <InvoiceContext.Provider value={value}>{children}</InvoiceContext.Provider>;
};

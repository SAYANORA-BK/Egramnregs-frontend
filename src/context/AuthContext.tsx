import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, UserRole } from '../types';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

const mockUsers: { [key: string]: User } = {
  'citizen@demo.com': {
    id: '1',
    name: 'Rajesh Kumar',
    email: 'citizen@demo.com',
    role: 'citizen',
    location: 'Thiruvananthapuram, Kerala'
  },
  'panchayath@demo.com': {
    id: '2',
    name: 'Priya Nair',
    email: 'panchayath@demo.com',
    role: 'panchayath',
    location: 'Neyyattinkara Panchayath'
  },
  'block@demo.com': {
    id: '3',
    name: 'Suresh Menon',
    email: 'block@demo.com',
    role: 'block',
    location: 'Thiruvananthapuram Block'
  },
  'district@demo.com': {
    id: '4',
    name: 'Dr. Lakshmi Devi',
    email: 'district@demo.com',
    role: 'district',
    location: 'Thiruvananthapuram District'
  },
  'state@demo.com': {
    id: '5',
    name: 'K.R. Sreekumar',
    email: 'state@demo.com',
    role: 'state',
    location: 'Kerala State'
  },
  'admin@demo.com': {
    id: '6',
    name: 'System Administrator',
    email: 'admin@demo.com',
    role: 'admin',
    location: 'Central Office'
  }
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('mgnrega_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const foundUser = mockUsers[email];
    if (foundUser && password === 'demo123') {
      setUser(foundUser);
      localStorage.setItem('mgnrega_user', JSON.stringify(foundUser));
      setIsLoading(false);
      return true;
    }
    
    setIsLoading(false);
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('mgnrega_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}
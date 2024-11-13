"use client";
import { createContext, useContext, useState, type ReactNode } from "react";

interface AuthContextType {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
  getCurrentUser: () => string;
}

// Define the context with an initial type of `AuthContextType | null`
const AuthContext = createContext<AuthContextType | null>(null);

// Define the props type for AuthProvider
interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<string>('test user');

  // Get the current user from context
  const getCurrentUser = () => {
    return user;
  };

  return (
    <AuthContext.Provider value={{ getCurrentUser, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook for using the Auth context
export function useAuth() {
  const context = useContext(AuthContext);
  
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}

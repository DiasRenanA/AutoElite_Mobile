import api from '@/src/services/api'; // ou '../services/api'
import * as storage from '@/src/utils/storage'; // ou '../utils/storage'
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface AuthContextData {
  token: string | null;
  isLoading: boolean;
  // Adicione os tipos string aqui:
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      try {
        const storedToken = await storage.getToken();
        if (storedToken) {
          setToken(storedToken);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    }
    loadStorageData();
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      const response = await api.post('/login', { email, password }); // Altere '/login' para sua rota de login
      const { token }: { token: string } = response.data;
      
      setToken(token);
      await storage.saveToken(token);

    } catch (error) {
      console.error("Erro no login:", error);
      // Você pode ser mais específico aqui se sua API retornar um erro
      throw new Error("Falha ao autenticar. Verifique suas credenciais.");
    }
  };

  const signOut = async () => {
    setToken(null);
    await storage.deleteToken();
  };

  return (
    <AuthContext.Provider value={{ token, isLoading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';

// Definimos o tipo do nosso contexto
interface AuthContextData {
  token: string | null;
  isLoading: boolean;
  login: (token: string) => Promise<void>;
  logout: () => Promise<void>;
}

// Criamos o contexto
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

// Este é o Provider, ele vai envolver nosso app
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Efeito para carregar o token do AsyncStorage quando o app iniciar
  useEffect(() => {
    async function loadToken() {
      try {
        const storedToken = await AsyncStorage.getItem('userToken');
        if (storedToken) {
          setToken(storedToken);
        }
      } catch (e) {
        console.error('Failed to load token', e);
      } finally {
        setIsLoading(false);
      }
    }
    loadToken();
  }, []);

  // Função de login: salva o token no estado e no AsyncStorage
  const login = async (newToken: string) => {
    setToken(newToken);
    await AsyncStorage.setItem('userToken', newToken);
  };

  // Função de logout: limpa o token do estado e do AsyncStorage
  const logout = async () => {
    setToken(null);
    await AsyncStorage.removeItem('userToken');
  };

  return (
    <AuthContext.Provider value={{ token, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook customizado para facilitar o uso do contexto
export const useAuth = () => {
  return useContext(AuthContext);
};
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';

interface AuthContextData {
  token: string | null;      // Token do Usuário (Login/Cadastro)
  clientToken: string | null; // Novo: Token de Dados do Cliente
  isLoading: boolean;
  login: (token: string) => Promise<void>;
  setClientDataToken: (token: string) => Promise<void>; // Novo: Função para salvar token do cliente
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [clientToken, setClientToken] = useState<string | null>(null); // Novo Estado
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      try {
        // Carrega os dois tokens da memória
        const [storedToken, storedClientToken] = await Promise.all([
            AsyncStorage.getItem('userToken'),
            AsyncStorage.getItem('clientToken')
        ]);

        if (storedToken) setToken(storedToken);
        if (storedClientToken) setClientToken(storedClientToken);

      } catch (e) {
        console.error('Failed to load data', e);
      } finally {
        setIsLoading(false);
      }
    }
    loadStorageData();
  }, []);

  const login = async (newToken: string) => {
    setToken(newToken);
    await AsyncStorage.setItem('userToken', newToken);
  };

  // Nova função para salvar o token do cliente
  const setClientDataToken = async (newClientToken: string) => {
    setClientToken(newClientToken);
    await AsyncStorage.setItem('clientToken', newClientToken);
  };

  const logout = async () => {
    setToken(null);
    setClientToken(null);
    await AsyncStorage.multiRemove(['userToken', 'clientToken']);
  };

  return (
    <AuthContext.Provider value={{ 
        token, 
        clientToken, 
        isLoading, 
        login, 
        setClientDataToken, // Exportando a nova função
        logout 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
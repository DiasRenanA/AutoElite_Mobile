import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';

interface AuthContextData {
  token: string | null;
  clientToken: string | null;
  userType: 'cliente' | 'loja' | null; // 1. Novo campo para saber o tipo
  isLoading: boolean;
  login: (token: string) => Promise<void>;
  setClientDataToken: (token: string) => Promise<void>;
  saveUserType: (type: 'cliente' | 'loja' | null) => Promise<void>; // 2. Função para salvar o tipo
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [clientToken, setClientToken] = useState<string | null>(null);
  const [userType, setUserType] = useState<'cliente' | 'loja' | null>(null); // 3. Estado
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      try {
        const [storedToken, storedClientToken, storedType] = await Promise.all([
            AsyncStorage.getItem('userToken'),
            AsyncStorage.getItem('clientToken'),
            AsyncStorage.getItem('userType') // 4. Carrega o tipo
        ]);

        if (storedToken) setToken(storedToken);
        if (storedClientToken) setClientToken(storedClientToken);
        if (storedType) setUserType(storedType as 'cliente' | 'loja');

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

  const setClientDataToken = async (newClientToken: string) => {
    setClientToken(newClientToken);
    await AsyncStorage.setItem('clientToken', newClientToken);
  };

  // 5. Implementação da função para salvar tipo
  const saveUserType = async (type: 'cliente' | 'loja') => {
    setUserType(type);
    await AsyncStorage.setItem('userType', type);
  };

  const logout = async () => {
    setToken(null);
    setClientToken(null);
    setUserType(null);
    await AsyncStorage.multiRemove(['userToken', 'clientToken', 'userType']);
  };

  return (
    <AuthContext.Provider value={{ 
        token, 
        clientToken,
        userType, // Exporta o estado
        isLoading, 
        login, 
        setClientDataToken, 
        saveUserType, // Exporta a função
        logout 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
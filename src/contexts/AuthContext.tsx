import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';

interface AuthContextData {
  token: string | null;
  clientToken: string | null;
  userType: 'cliente' | 'loja' | null;
  isLoading: boolean;
  login: (token: string) => Promise<void>;
  setClientDataToken: (token: string) => Promise<void>;
  // A interface diz que pode receber null
  saveUserType: (type: 'cliente' | 'loja' | null) => Promise<void>; 
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [clientToken, setClientToken] = useState<string | null>(null);
  const [userType, setUserType] = useState<'cliente' | 'loja' | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      try {
        const [storedToken, storedClientToken, storedType] = await Promise.all([
            AsyncStorage.getItem('userToken'),
            AsyncStorage.getItem('clientToken'),
            AsyncStorage.getItem('userType')
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

  // 👇 CORREÇÃO AQUI: 
  // 1. Adicionamos '| null' na tipagem do parâmetro para bater com a interface.
  // 2. Adicionamos um 'if' para só salvar no AsyncStorage se NÃO for null.
  const saveUserType = async (type: 'cliente' | 'loja' | null) => {
    setUserType(type);
    
    if (type) {
        await AsyncStorage.setItem('userType', type);
    } else {
        // Se for null, removemos do storage (limpeza)
        await AsyncStorage.removeItem('userType');
    }
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
        userType,
        isLoading, 
        login, 
        setClientDataToken, 
        saveUserType,
        logout 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
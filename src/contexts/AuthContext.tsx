import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';

const API_URL = "http://localhost:3001/";
//const API_URL = "http://localhost:3001/";

interface AuthContextData {
  token: string | null;
  clientToken: string | null;
  userType: 'cliente' | 'loja' | null;
  isLoading: boolean;
  apiUrl: string;
  login: (token: string) => Promise<void>;
  setClientDataToken: (token: string) => Promise<void>;
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

  const saveUserType = async (type: 'cliente' | 'loja' | null) => {
    setUserType(type);
    
    if (type) {
        await AsyncStorage.setItem('userType', type);
    } else {
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
        apiUrl: API_URL,
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
import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { SplashScreen, Stack, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Text } from 'react-native';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { AuthProvider, useAuth } from '@/src/contexts/AuthContext';

// Previna a splash screen
SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  anchor: 'index',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <AuthProvider>
      <ThemeProvider value={DefaultTheme}>
        <StatusBar style="auto" /> 
        <LayoutNavigator />
      </ThemeProvider>
    </AuthProvider>
  );
}

function LayoutNavigator() {
  const { token, isLoading } = useAuth();
  const colorScheme = useColorScheme(); // Você pode precisar disso aqui
  
  // Hook para esconder a splash screen
  useEffect(() => {
    if (!isLoading) {
      SplashScreen.hideAsync();
    }
  }, [isLoading]);

  // Hook para redirecionar o usuário
  useEffect(() => {
    if (isLoading) {
      return; // Ainda carregando
    }

    if (token) {
      // Logado: vá para o painel de admin (ou tela principal)
      router.replace('/adminPanel');
    } else {
      // Deslogado: vá para o login
      router.replace('/login');
    }
  }, [token, isLoading]);

  // Mostra um loading enquanto o token é verificado
  if (isLoading) {
    return <Text>Carregando...</Text>; // Pode ser um componente Spinner
  }

  // Define as telas que o Expo Router deve conhecer
  return (
    <Stack>
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="adminPanel" options={{ headerShown: false }} />
      
      {/* Suas telas originais */}
      <Stack.Screen name="hindexome" options={{ headerShown: false }} /> 
      <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
    </Stack>
  );
}
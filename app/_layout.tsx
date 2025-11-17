import { AuthProvider, useAuth } from '@/src/context/AuthContext'; // Ajuste o caminho
import { Stack, useRouter, useSegments } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { View } from 'react-native';


export const unstable_settings = {
  initialRouteName: '(private)',
};

function RootLayoutNav() {
  const { token, isLoading } = useAuth();
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    if (isLoading) return;

    const inAuthGroup = segments[0] === '(public)';
    if (!token && !inAuthGroup) {
      router.replace('/(public)/login');
    } 
    else if (token && inAuthGroup) {
      router.replace('/(private)/inicio');
    }
  }, [token, isLoading, segments]); 

  if (isLoading) {
    return <View />; 
  }

  return (
    <Stack>
      <Stack.Screen name="(private)" options={{ headerShown: false }} />
      <Stack.Screen name="(public)" options={{ headerShown: false }} />
      <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
      <Stack.Screen name="cadastroEnderecoCliente" options={{ title: 'Endereço Cliente' }} />
      <Stack.Screen name="cadastroEnderecoLoja" options={{ title: 'Endereço Loja' }} />
      <Stack.Screen name="cadastroTipo" options={{ title: 'Tipo de Cadastro' }} />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <RootLayoutNav />
      <StatusBar style="auto" />
    </AuthProvider>
  );
}
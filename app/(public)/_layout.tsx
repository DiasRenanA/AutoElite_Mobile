import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="cadastro" options={{ headerShown: false }} />
      <Stack.Screen name="cadastroCliente" options={{ title: 'Cadastro Cliente' }} />
      <Stack.Screen name="cadastroLoja" options={{ title: 'Cadastro Loja' }} />
    </Stack>
  );
}
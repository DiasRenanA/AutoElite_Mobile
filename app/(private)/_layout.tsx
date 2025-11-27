import { Stack } from 'expo-router';

export default function AppLayout() {
  return (
    <Stack>
      <Stack.Screen name="inicio" options={{ title: 'Home' }} />
      <Stack.Screen name="adminPanelLoja" options={{ title: 'Admin Loja' }} />
      <Stack.Screen name="cadastrarProduto" options={{ title: 'Cadastrar Produto' }} />
      <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
      <Stack.Screen name="perfil" options={{ title: 'Perfil' }} />
      <Stack.Screen name="perfilLoja" options={{ title: 'Perfil Loja' }} />
      <Stack.Screen name="productPage" options={{ title: 'Produto' }} />
    </Stack>
  );
}
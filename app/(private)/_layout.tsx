import { Stack } from 'expo-router';

export default function AppLayout() {
  return (
    <Stack>
      <Stack.Screen name="inicio" options={{ title: 'Home' }} />
      <Stack.Screen name="adminPanel" options={{ title: 'Painel Admin' }} />
    </Stack>
  );
}
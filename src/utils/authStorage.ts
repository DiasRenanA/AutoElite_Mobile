import * as SecureStore from 'expo-secure-store';

const TOKEN_KEY = 'authStorage.ts';

export async function saveToken(token: string): Promise<void> {
  try {
    await SecureStore.setItemAsync(TOKEN_KEY, token);
  } catch (error) {
    console.error("Erro ao salvar o token", error);
  }
}

// Pega o token
export async function getToken(): Promise<string | null> {
  try {
    return await SecureStore.getItemAsync(TOKEN_KEY);
  } catch (error) {
    console.error("Erro ao buscar o token", error);
    return null;
  }
}

// Remove o token (para logout)
export async function deleteToken(): Promise<void> {
  try {
    await SecureStore.deleteItemAsync(TOKEN_KEY);
  } catch (error) {
    console.error("Erro ao deletar o token", error);
  }
}
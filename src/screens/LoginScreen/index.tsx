// src/screens/LoginScreen.tsx

//import { ButtonEnviar } from "@/src/components/buttonsComponent/buttons";
import { ButtonEnviar } from "@/src/components/buttonsComponent/buttons";
import { useAuth } from "@/src/context/AuthContext"; // Importa o hook de auth
import { router } from "expo-router";
import { useState } from "react"; // Importa o useState
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Styles } from "./style";

// 👇 CORREÇÃO AQUI: 
// Mude de 'export default function LoginScreen()' para 'export const LoginScreens = () =>'
export const LoginScreens = () => { 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [erro, setErro] = useState<string | null>(null);
    const handleEmailChange = (text: string) => {
        if (erro) setErro(null); // Limpa o erro
        setEmail(text);
    };

    const handlePasswordChange = (text: string) => {
        if (erro) setErro(null); // Limpa o erro
        setPassword(text);
    };
    
    // Pega a função de login do nosso contexto
    const { login } = useAuth();

    // Função que chama a API
    const handleLogin = async () => {
        setErro(null); // Limpa o erro anterior (Boa prática!)

        if (!email || !password) {
            // 👇 CORREÇÃO AQUI: Troque o Alert.alert por setErro
            setErro('Preencha e-mail e senha.');
            return;
        }

        try {
            // 🚨 Lembre-se de trocar 'localhost' pelo IP da sua máquina
            const response = await fetch('http://localhost:3001/usuarios/login', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    email_usuario: email, 
                    pass_usuario: password 
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                // Joga um erro usando a mensagem da API (data.message) ou uma padrão
                throw new Error(data.message || 'E-mail ou senha inválidos.');
            }

            // Se a resposta foi 'ok' (200), MAS NÃO veio o token
            if (!data.token) {
                // Joga um erro para o caso de a API responder 200 OK sem token
                throw new Error(data.message || 'Login falhou, mas a API não retornou um token.');
            }

            if (data.token) {
                await login(data.token);
            }

        } catch (error: any) {
            setErro(error.message || 'Não foi possível conectar.');        }
    };

    const irParaAdm = () => {
        router.push('/(private)/adminPanel');
    };

    const irParaCadastro = () => {
        router.push('/cadastro');
    };


    return(
        <ScrollView>
            <View style={Styles.container}>
            <Image
                source={require('@/src/assets/images/LogoAutoElite.svg')}
                resizeMode="contain"
            />
            <View style={Styles.containerRed}>
                <Text style={Styles.textH1}>Login</Text>
                <View style={{display:'flex',gap:5}}>
                    <Text style={Styles.textLabel}>E-mail:</Text>
                    <TextInput
                        style={Styles.textInput}
                        value={email}
                        onChangeText={handleEmailChange}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>
                <View style={{display:'flex',gap:5}}>
                    <Text style={Styles.textLabel}>Senha:</Text>
                    <TextInput
                        style={Styles.textInput}
                        value={password}
                        onChangeText={handlePasswordChange}
                        secureTextEntry
                    />
                </View>

                {erro && (
                    <Text style={Styles.textError}> 
                        {erro}
                    </Text>
                )}

                <ButtonEnviar 
                    titulo="Entrar"
                    onPress={handleLogin}
                />
                <View style={{paddingTop: 20}}>
                    <TouchableOpacity style={{}} onPress={irParaCadastro} activeOpacity={0.7}>
                        <Text style={Styles.boxText}>Não tem login? Cadastre-se!</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={{}} onPress={irParaAdm} activeOpacity={0.7}>
                    <Text>Admin</Text>
                </TouchableOpacity>

            </View>

        </View>
        </ScrollView>
        
    )
}
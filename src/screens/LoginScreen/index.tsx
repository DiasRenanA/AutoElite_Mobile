import { ButtonEnviar } from "@/src/components/buttonsComponent/buttons";
import { useAuth } from "@/src/contexts/AuthContext";
import { router } from "expo-router";
import { useState } from "react"; // Importa o useState
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Styles } from "./style";


export const LoginScreens = () => { 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [erro, setErro] = useState<string | null>(null);
    const handleEmailChange = (text: string) => {
        if (erro) setErro(null);
        setEmail(text);
    };

    const handlePasswordChange = (text: string) => {
        if (erro) setErro(null); 
        setPassword(text);
    };
    
    const { login } = useAuth();

    const handleLogin = async () => {
        setErro(null); 

        if (!email || !password) {
            setErro('Preencha e-mail e senha.');
            return;
        }

        try {
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
                throw new Error(data.message || 'E-mail ou senha inválidos.');
            }

            if (!data.token) {
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
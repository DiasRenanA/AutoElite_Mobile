import { ButtonEnviar } from "@/src/components/buttonsComponent/buttons";
import { useAuth } from "@/src/contexts/AuthContext";
import { router } from "expo-router";
import { useState } from "react";
import { ActivityIndicator, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Styles } from "./style";

export default function LoginScreens() { 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [erro, setErro] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    
    const { login, setClientDataToken, saveUserType, apiUrl } = useAuth();

    const handleLogin = async () => {
        setErro(null); 

        if (!email || !password) {
            setErro('Preencha e-mail e senha.');
            return;
        }

        setIsLoading(true);

        try {
            const responseUser = await fetch(apiUrl + 'usuarios/login', { 
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    email_usuario: email, 
                    pass_usuario: password 
                }),
            });

            const dataUser = await responseUser.json();

            if (!responseUser.ok || !dataUser.token) {
                throw new Error(dataUser.message || 'E-mail ou senha inválidos.');
            }

            const userToken = dataUser.token;
            let profileToken = null;
            let profileType: 'cliente' | 'loja' | null = null;

            try {
                const responseCliente = await fetch(apiUrl + 'clientes/id_user', {
                    method: 'POST',
                    headers: { 'Authorization': `Bearer ${userToken}` }
                });
                
                if (responseCliente.ok) {
                    const dataCliente = await responseCliente.json();
                    profileToken = dataCliente.token_dados;
                    profileType = 'cliente'
                    console.log("Perfil Cliente encontrado");
                }
            } catch (e) {
            
            }

            if (!profileToken) {
                try {
                    const responseLoja = await fetch(apiUrl + 'lojas/id_user', {
                        method: 'POST',
                        headers: { 'Authorization': `Bearer ${userToken}` }
                    });

                    if (responseLoja.ok) {
                        const dataLoja = await responseLoja.json();
                        profileToken = dataLoja.token_dados;
                        profileType = 'loja'
                        console.log("Perfil Loja encontrado");
                    }
                } catch (e) {
                }
            }

            if (profileToken) {
                await saveUserType(profileType);
                await setClientDataToken(profileToken);
            }

            await login(userToken);

            if (email.trim() === 'adminColiseu@admin.com') {
                router.replace('/(public)/adminPanel');
            } else {
                router.replace('/(private)/inicio');
            }

        } catch (error: any) {
            setErro(error.message || 'Não foi possível conectar.');
        } finally {
            setIsLoading(false);
        }
    };

    const irParaAdm = () => {
        router.push('/(private)/adminPanel');
    };

    const irParaCadastro = () => {
        router.push('/cadastro');
    };

    const irParaHome = () => {
        router.push('/(public)/home');
    };

    return(
        <ScrollView>
            <View style={Styles.container}>
                <TouchableOpacity onPress={irParaHome}>
                    <Image
                        source={require('@/src/assets/images/LogoAutoElite.svg')}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <View style={Styles.containerRed}>
                    <Text style={Styles.textH1}>Login</Text>
                    
                    <View style={{display:'flex',gap:5}}>
                        <Text style={Styles.textLabel}>E-mail:</Text>
                        <TextInput
                            style={Styles.textInput}
                            value={email}
                            onChangeText={(t) => { setErro(null); setEmail(t); }}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>
                    <View style={{display:'flex',gap:5}}>
                        <Text style={Styles.textLabel}>Senha:</Text>
                        <TextInput
                            style={Styles.textInput}
                            value={password}
                            onChangeText={(t) => { setErro(null); setPassword(t); }}
                            secureTextEntry
                        />
                    </View>

                    {erro && (
                        <Text style={Styles.textError}> 
                            {erro}
                        </Text>
                    )}

                    {isLoading ? (
                        <ActivityIndicator size="large" color="#0000ff" style={{ marginVertical: 20 }} />
                    ) : (
                        <ButtonEnviar 
                            titulo="Entrar"
                            onPress={handleLogin}
                        />
                    )}

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
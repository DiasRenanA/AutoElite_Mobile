import { ButtonEnviar } from "@/src/components/buttonsComponent/buttons";
import { useAuth } from "@/src/contexts/AuthContext";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Styles } from "./style"; // Assumindo que você tem um arquivo de estilo

// Se este arquivo for app/login.tsx, ele deve exportar por padrão
export default function LoginScreen() {
    const { signIn } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async () => {
        if (isLoading) return;
        setIsLoading(true);
        try {
            await signIn(email, password);
            // O redirecionamento é automático pelo _layout.tsx
            
        } catch (error) {
            // Verificação correta do tipo de erro
            let errorMessage = "Não foi possível logar. Tente novamente.";
            if (error instanceof Error) {
                errorMessage = error.message;
            }
            Alert.alert("Erro de Login", errorMessage);

        } finally {
            setIsLoading(false);
        }
    };
    
    const irParaAdm = () => {
        router.push('/adminPanel');
    };

    return(
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
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>
                <View style={{display:'flex',gap:5}}>
                    <Text style={Styles.textLabel}>Senha:</Text>
                    <TextInput
                        style={Styles.textInput}
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                </View>
                <ButtonEnviar 
                    titulo={isLoading ? "Entrando..." : "Entrar"}
                    onPress={handleLogin}
                />
                <View style={{paddingTop: 20}}>
                    <Text style={Styles.boxText}>Esqueceu a senha?</Text>
                    <Text style={Styles.boxText}>Não tem login? Cadastre-se!</Text>
                </View>
                <TouchableOpacity style={{}} onPress={irParaAdm} activeOpacity={0.7}>
                    <Text>Admin (Temporário)</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}
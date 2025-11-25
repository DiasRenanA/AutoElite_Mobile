import { ButtonEnviar } from "@/src/components/buttonsComponent/buttons";
import { useAuth } from "@/src/contexts/AuthContext";
import { router } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Styles } from "./style";

export const CadastroScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [erro, setErro] = useState<string | null>(null);

    const { login, apiUrl } = useAuth();

    const handleCadastro = async () => {
        if (isLoading) return;

        if (!email || !password || !confirmPassword) {
            setErro('Preencha todos os campos.');
            return;
        }
        setIsLoading(true);
        try{
            const response = await fetch(apiUrl + 'usuarios/criar', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email_usuario: email,
                    pass_usuario: password,
                    confirm_pass: confirmPassword
                })
            });

            const data = await response.json();

            if (!response.ok) {
                setErro(data.message || 'Erro ao tentar cadastrar.');
            }

            if (data.token) {
                await login(data.token);
                router.push('/(public)/cadastroTipo');

            } else {
                setErro("Cadastro OK, mas token não recebido.");
            }

        }catch{
            setErro('Erro no Cadastro.');
        }
    }

    const irParaLogin = () => {
        router.push('/login');
    };

    const irParaCadastroTipo = () => {
        router.push('/cadastroTipo');
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
                    <Text style={Styles.textH1}>Cadastro</Text>
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
                    <View style={{display:'flex',gap:5}}>
                        <Text style={Styles.textLabel}>Confirmação de Senha:</Text>
                        <TextInput
                            style={Styles.textInput}
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                            secureTextEntry
                        />
                    </View>

                    {erro && (
                        <Text style={Styles.textError}> 
                            {erro}
                        </Text>
                    )}

                    <ButtonEnviar 
                        titulo="Cadastrar"
                        onPress={handleCadastro}
                    />
                    <View style={{paddingTop: 20}}>
                        <TouchableOpacity style={{}} onPress={irParaLogin} activeOpacity={0.7}>
                            <Text style={Styles.boxText}>É Elite? Clique aqui!</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </ScrollView>
    )
}
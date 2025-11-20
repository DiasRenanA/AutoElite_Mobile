import { ButtonEnviar } from "@/src/components/buttonsComponent/buttons";
import { useAuth } from "@/src/contexts/AuthContext"; // Certifique-se que o caminho é 'context' (singular)
import { router } from "expo-router"; // Removemos useLocalSearchParams
import { useState } from "react";
import { ActivityIndicator, Alert, Image, ScrollView, Text, TextInput, View } from "react-native";
import { Styles } from "./style";

export const CadastroEnderecoClienteScreen = () => {

    // 1. Pegamos os tokens direto do Contexto (Cofre)
    const { token, clientToken } = useAuth(); 

    // Estados do formulário
    const [erro, setErro] = useState<string | null>(null);
    const [cep, setCep] = useState('');
    const [rua, setRua] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');
    const [nmr, setNmr] = useState('');
    const [complemento, setComplemento] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSaveAddressAndLogin = async () => {
        setErro(null); 

        // Validação dos campos
        if (!cep || !rua || !bairro || !cidade || !uf || !nmr) {
            setErro('Erro: Preencha todos os campos obrigatórios.');
            return;
        }
        
        // 2. Validação de Segurança: Verifica se os tokens estão no contexto
        if (!token || !clientToken) {
            Alert.alert('Sessão Expirada', 'Tokens não encontrados. Reinicie o cadastro.');
            router.replace('/(public)/cadastro');
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch('http://localhost:3001/enderecos/criar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // 🔑 HEADER 1: Token de Dados do Cliente (do Contexto)
                    'token_dados': clientToken, 
                    // 🔑 HEADER 2: Token de Autenticação do Usuário (do Contexto)
                    'Authorization': `Bearer ${token}` 
                },
                body: JSON.stringify({
                    cep: cep,
                    rua: rua,
                    bairro: bairro,
                    cidade: cidade,
                    uf: uf,
                    nmr: Number(nmr), 
                    complemento: complemento
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Não foi possível salvar o endereço.');
            }

            // SUCESSO!
            Alert.alert("Sucesso!", "Cadastro completo! Entrando no app.");

            // 3. Como você desligou o redirecionamento automático no _layout,
            // fazemos a navegação manual para a área privada agora.
            router.replace('/(private)/inicio');

        } catch (error: any) {
            setErro(error.message || 'Erro ao Salvar Endereço.');
        } finally {
            setIsLoading(false);
        }
    };

    return(
        <ScrollView>
            <View style={Styles.container}>
                <Image
                    source={require('@/src/assets/images/LogoAutoElite.svg')}
                    resizeMode="contain"
                />
                <View style={Styles.containerRed}>
                    <Text style={Styles.textH1}>Cadastro Cliente Elite</Text>

                    <View style={{display:'flex',gap:5}}>
                        <Text style={Styles.textLabel}>CEP:</Text>
                        <TextInput
                            style={Styles.textInput}
                            value={cep}
                            onChangeText={setCep}
                            placeholder="CEP (APENAS NÚMEROS)"
                            placeholderTextColor="#BFBFBF"
                            keyboardType="number-pad"
                        />
                    </View>
                    <View style={{display:'flex',gap:5}}>
                        <Text style={Styles.textLabel}>Rua:</Text>
                        <TextInput
                            style={Styles.textInput} value={rua} onChangeText={setRua}
                        />
                    </View>
                    <View style={{display:'flex',gap:5}}>
                        <Text style={Styles.textLabel}>Número:</Text>
                        <TextInput
                            style={Styles.textInput} value={nmr} onChangeText={setNmr} keyboardType="number-pad"
                        />
                    </View>
                    <View style={{display:'flex',gap:5}}>
                        <Text style={Styles.textLabel}>Complemento:</Text>
                        <TextInput
                            style={Styles.textInput} value={complemento} onChangeText={setComplemento}
                        />
                    </View>
                    <View style={{display:'flex',gap:5}}>
                        <Text style={Styles.textLabel}>Bairro:</Text>
                        <TextInput
                            style={Styles.textInput} value={bairro} onChangeText={setBairro}
                        />
                    </View>
                    <View style={{display:'flex',gap:5}}>
                        <Text style={Styles.textLabel}>Cidade:</Text>
                        <TextInput
                            style={Styles.textInput} value={cidade} onChangeText={setCidade}
                        />
                    </View>
                    <View style={{display:'flex',gap:5}}>
                        <Text style={Styles.textLabel}>UF:</Text>
                        <TextInput
                            style={Styles.textInput} value={uf} onChangeText={setUf} maxLength={2} autoCapitalize="characters"
                        />
                    </View>

                    {erro && (
                        <Text style={{ color: 'red', textAlign: 'center', marginTop: 10 }}> 
                            {erro}
                        </Text>
                    )}

                    {isLoading ? (
                        <ActivityIndicator size="large" color="#000" style={{ marginVertical: 20 }} />
                    ) : (
                        <ButtonEnviar 
                            titulo="Enviar e Finalizar"
                            onPress={handleSaveAddressAndLogin}
                        />
                    )}
                </View>

            </View>
        </ScrollView>
    )
}
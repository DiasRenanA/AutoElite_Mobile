import { ButtonEnviar } from "@/src/components/buttonsComponent/buttons";
import { useAuth } from "@/src/contexts/AuthContext";
import { router } from "expo-router";
import { useState } from "react";
import { ActivityIndicator, Alert, Image, ScrollView, Text, TextInput, View } from "react-native";
import { Styles } from "./style";

export const CadastroEnderecoClienteScreen = () => {

    const { token, clientToken, apiUrl } = useAuth(); 

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

        if (!cep || !rua || !bairro || !cidade || !uf || !nmr) {
            setErro('Erro: Preencha todos os campos obrigatórios.');
            return;
        }
        
        if (!token || !clientToken) {
            Alert.alert('Sessão Expirada', 'Tokens não encontrados. Reinicie o cadastro.');
            router.replace('/(public)/cadastro');
            return;
        }

        setIsLoading(true);

        try {

            const response = await fetch(apiUrl + 'enderecos/criar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'tokendados': clientToken, 
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

            router.replace('/(private)/inicio');

        } catch (error: any) {
            console.log("Resposta catch: ", error.message)
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
import { ButtonEnviar } from "@/src/components/buttonsComponent/buttons";
import { useAuth } from "@/src/contexts/AuthContext"; // Importando do Contexto
import { router } from "expo-router";
import { useState } from "react";
import { ActivityIndicator, Alert, Image, ScrollView, Text, TextInput, View } from "react-native";
import { Styles } from "./style";

export const CadastroEnderecoLojaScreen = () => {

    // 1. Pegamos os tokens do Contexto
    // 'token': Token do usuário logado/criado
    // 'clientToken': Token contendo os dados da LOJA (salvo na tela anterior)
    const { token, clientToken } = useAuth(); 

    const [cep, setCep] = useState('');
    const [rua, setRua] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');
    const [nmr, setNmr] = useState('');
    const [complemento, setComplemento] = useState('');
    
    const [isLoading, setIsLoading] = useState(false);
    const [erro, setErro] = useState<string | null>(null);

    const handleSaveAddressAndFinalize = async () => {
        setErro(null);

        // Validação de segurança
        if (isLoading || !token || !clientToken) {
            Alert.alert('Sessão Expirada', 'Tokens não encontrados. Reinicie o cadastro.');
            router.replace('/(public)/cadastro');
            return;
        }

        // Validação de campos obrigatórios
        if (!cep || !rua || !bairro || !cidade || !uf || !nmr) {
            setErro('Preencha todos os campos obrigatórios.');
            return;
        }

        setIsLoading(true);

        try {
            // 2. Reutilizamos o mesmo endpoint de endereços
            const response = await fetch('http://localhost:3001/enderecos/criar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // 🔑 HEADER 1: Token de Dados da LOJA (salvo como clientToken no contexto)
                    'token_dados': clientToken, 
                    // 🔑 HEADER 2: Token de Autenticação do Usuário
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
                throw new Error(data.message || 'Não foi possível salvar o endereço da loja.');
            }

            // 3. Sucesso!
            Alert.alert("Sucesso!", "Loja cadastrada com sucesso! Entrando...");

            // 4. Navegação manual para a área privada (Painel da Loja ou Início)
            // Como é uma loja, talvez você queira ir para '/adminPanelLoja', mas 
            // vou mandar para '/inicio' conforme seu pedido anterior.
            router.replace('/(private)/inicio');

        } catch (error: any) {
            setErro(error.message || 'Erro ao conectar com o servidor.');
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
                    <Text style={Styles.textH1}>Endereço da Loja</Text>

                    <View style={{display:'flex',gap:5}}>
                        <Text style={Styles.textLabel}>CEP:</Text>
                        <TextInput
                            style={Styles.textInput}
                            placeholder="CEP (APENAS NÚMEROS)"
                            placeholderTextColor="#BFBFBF"
                            value={cep}
                            onChangeText={setCep}
                            keyboardType="number-pad"
                        />
                    </View>
                    <View style={{display:'flex',gap:5}}>
                        <Text style={Styles.textLabel}>Rua:</Text>
                        <TextInput
                            style={Styles.textInput}
                            value={rua}
                            onChangeText={setRua}
                        />
                    </View>
                    <View style={{display:'flex',gap:5}}>
                        <Text style={Styles.textLabel}>Número:</Text>
                        <TextInput
                            style={Styles.textInput}
                            value={nmr}
                            onChangeText={setNmr}
                            keyboardType="number-pad"
                        />
                    </View>
                    <View style={{display:'flex',gap:5}}>
                        <Text style={Styles.textLabel}>Complemento:</Text>
                        <TextInput
                            style={Styles.textInput}
                            value={complemento}
                            onChangeText={setComplemento}
                        />
                    </View>
                    <View style={{display:'flex',gap:5}}>
                        <Text style={Styles.textLabel}>Bairro:</Text>
                        <TextInput
                            style={Styles.textInput}
                            value={bairro}
                            onChangeText={setBairro}
                        />
                    </View>
                    <View style={{display:'flex',gap:5}}>
                        <Text style={Styles.textLabel}>Cidade:</Text>
                        <TextInput
                            style={Styles.textInput}
                            value={cidade}
                            onChangeText={setCidade}
                        />
                    </View>
                    <View style={{display:'flex',gap:5}}>
                        <Text style={Styles.textLabel}>UF:</Text>
                        <TextInput
                            style={Styles.textInput}
                            value={uf}
                            onChangeText={setUf}
                            maxLength={2}
                            autoCapitalize="characters"
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
                            titulo="Finalizar Cadastro"
                            onPress={handleSaveAddressAndFinalize}
                        />
                    )}

                </View>
            </View>
        </ScrollView>
    )
}
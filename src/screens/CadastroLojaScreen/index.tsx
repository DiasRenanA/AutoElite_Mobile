import { ButtonEnviar } from "@/src/components/buttonsComponent/buttons";
import { useAuth } from "@/src/contexts/AuthContext"; // Importando o Contexto
import { router } from "expo-router";
import { useState } from "react";
import { ActivityIndicator, Image, ScrollView, Text, TextInput, View } from "react-native";
import { Styles } from "./style";

export const CadastroLojaScreen = () => {

    // 1. Pega o token do usuário e a função para salvar o token da loja
    // (Reaproveitamos o setClientDataToken para guardar o token de dados da loja)
    const { token, setClientDataToken } = useAuth();

    // Estados do formulário
    const [cnpj, setCnpj] = useState('');
    const [nomeFantasia, setNomeFantasia] = useState('');
    const [razaoSocial, setRazaoSocial] = useState('');
    const [telefone, setTelefone] = useState('');
    const [celular, setCelular] = useState('');
    const [abertura, setAbertura] = useState(''); // Data de abertura (Exigido na API)
    
    const [isLoading, setIsLoading] = useState(false);
    const [erro, setErro] = useState<string | null>(null);

    const handleCadastroLoja = async () => {
        // Validação de segurança
        if (isLoading || !token) {
            setErro('Sessão inválida. Por favor, faça login novamente.');
            return;
        }

        // Validação de campos vazios
        if (!cnpj || !nomeFantasia || !razaoSocial || !telefone || !celular || !abertura) {
            setErro('Preencha todos os campos, incluindo a Data de Abertura.');
            return;
        }

        setIsLoading(true);
        setErro(null);

        try {
            const response = await fetch('http://localhost:3001/lojas/criar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` // Token do usuário logado
                },
                body: JSON.stringify({
                    cnpj: cnpj,
                    nomeFantasia: nomeFantasia,
                    razaoSocial: razaoSocial,
                    telefone: telefone,
                    celular: celular,
                    abertura: abertura // Formato esperado: YYYY-MM-DD
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Erro ao cadastrar a loja.');
            }

            // O backend deve retornar o token com os dados da loja recém criada
            // Geralmente vem como 'token' ou 'token_dados'. Vou usar a mesma lógica do cliente.
            const novoTokenLoja = data.token_dados || data.token; 

            if (novoTokenLoja) {
                // 2. Salva o token da loja no contexto (para usar na tela de endereço)
                await setClientDataToken(novoTokenLoja);
            } else {
                throw new Error('API não retornou o token da loja.');
            }

            // 3. Navega para o cadastro de endereço da loja
            router.push('/(public)/cadastroEnderecoLoja');

        } catch (error: any) {
            setErro(error.message || 'Erro de conexão com o servidor.');
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
                    <Text style={Styles.textH1}>Cadastro Loja Elite</Text>

                    <View style={{display:'flex',gap:5}}>
                        <Text style={Styles.textLabel}>CNPJ:</Text>
                        <TextInput
                            style={Styles.textInput}
                            placeholder="CNPJ: (APENAS NÚMEROS)"
                            placeholderTextColor="#BFBFBF"
                            value={cnpj}
                            onChangeText={setCnpj}
                            keyboardType="numeric"
                        />
                    </View>
                    <View style={{display:'flex',gap:5}}>
                        <Text style={Styles.textLabel}>Nome Fantasia:</Text>
                        <TextInput
                            style={Styles.textInput}
                            value={nomeFantasia}
                            onChangeText={setNomeFantasia}
                        />
                    </View>
                    <View style={{display:'flex',gap:5}}>
                        <Text style={Styles.textLabel}>Razão Social:</Text>
                        <TextInput
                            style={Styles.textInput}
                            value={razaoSocial}
                            onChangeText={setRazaoSocial}
                        />
                    </View>
                    <View style={{display:'flex',gap:5}}>
                        <Text style={Styles.textLabel}>Data de Abertura (AAAA-MM-DD):</Text>
                        <TextInput
                            style={Styles.textInput}
                            placeholder="Ex: 2020-01-01"
                            placeholderTextColor="#BFBFBF"
                            value={abertura}
                            onChangeText={setAbertura}
                        />
                    </View>
                    <View style={{display:'flex',gap:5}}>
                        <Text style={Styles.textLabel}>Telefone:</Text>
                        <TextInput
                            style={Styles.textInput}
                            value={telefone}
                            onChangeText={setTelefone}
                            keyboardType="phone-pad"
                        />
                    </View>
                    <View style={{display:'flex',gap:5}}>
                        <Text style={Styles.textLabel}>Celular:</Text>
                        <TextInput
                            style={Styles.textInput}
                            value={celular}
                            onChangeText={setCelular}
                            keyboardType="phone-pad"
                        />
                    </View>

                    {erro && (
                        <Text style={{ color: 'red', textAlign: 'center', marginTop: 10 }}> 
                            {erro}
                        </Text>
                    )}

                    {isLoading ? (
                        <ActivityIndicator size="large" color="#0000ff" style={{ marginVertical: 20 }} />
                    ) : (
                        <ButtonEnviar 
                            titulo="Enviar"
                            onPress={handleCadastroLoja}
                        />
                    )}

                </View>
            </View>
        </ScrollView>
    )
}
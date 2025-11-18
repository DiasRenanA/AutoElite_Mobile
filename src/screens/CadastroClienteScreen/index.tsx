import { ButtonEnviar } from "@/src/components/buttonsComponent/buttons";
import { Picker } from '@react-native-picker/picker';
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { ActivityIndicator, Image, ScrollView, Text, TextInput, View } from "react-native";
import { Styles } from "./style";

export const CadastroClienteScreen = () => {

    const { userToken } = useLocalSearchParams<{ userToken: string }>();

    const { token } = useLocalSearchParams<{ token: string }>(); 

    const [cpf, setCpf] = useState('');
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [genero, setGenero] = useState<string | number>('null');
    const [possuiCarro, setPossuiCarro] = useState<string | number>('null');
    const [dtNascimento, setDtNascimento] = useState(''); // Campo obrigatório na API
    const [isLoading, setIsLoading] = useState(false);
    const [erro, setErro] = useState<string | null>(null);

    const handleCadastroCliente = async () => {
        if (isLoading || !token) {
            setErro('Token não encontrado ou carregando.');
            return;
        }

        if (!cpf || !nome || !telefone || genero === 'null' || possuiCarro === 'null' || !dtNascimento) {
            setErro('Preencha todos os campos, incluindo a Data de Nascimento.');
            return;
        }

        setIsLoading(true);
        setErro(null);

        try {
            const response = await fetch('http://localhost:3001/clientes/criar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` 
                },
                body: JSON.stringify({
                    cpf: cpf,
                    nome: nome,
                    dtNascimento: dtNascimento,
                    telefone: telefone,
                    genero: Number(genero),
                    carro: Number(possuiCarro)
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Erro ao criar o perfil do cliente.');
            }

            // Assumindo que a API retorna o NOVO token em data.token
            const novoToken = data.token; 

            // Sucesso! Vai para a próxima tela, levando o NOVO token
            router.push({
                pathname: '/(public)/cadastroEnderecoCliente',
                params: { 
                    userToken: userToken,           // O token original do usuário
                    clientDataToken: novoToken      // O token de dados do cliente (o segundo)
                } 
            });

        } catch (error: any) {
            setErro(error.message || 'Erro de conexão/servidor.');
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
                        <Text style={Styles.textLabel}>CPF:</Text>
                        <TextInput
                            style={Styles.textInput}
                            placeholder="CPF: (APENAS NÚMEROS)"
                            placeholderTextColor="#BFBFBF"
                            value={cpf}
                            onChangeText={setCpf}
                            keyboardType="numeric"
                        />
                    </View>
                    <View style={{display:'flex',gap:5}}>
                        <Text style={Styles.textLabel}>Nome Completo:</Text>
                        <TextInput
                            style={Styles.textInput}
                            value={nome}
                            onChangeText={setNome}
                        />
                    </View>
                    <View style={{display:'flex',gap:5}}>
                        <Text style={Styles.textLabel}>Data de Nascimento (AAAA-MM-DD):</Text>
                        <TextInput
                            style={Styles.textInput}
                            placeholder="Ex: 1990-01-01"
                            placeholderTextColor="#BFBFBF"
                            value={dtNascimento}
                            onChangeText={setDtNascimento}
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
                        <Text style={Styles.textLabel}>Gênero:</Text>
                        <Picker style={Styles.textPicker} selectedValue={genero} onValueChange={setGenero}>
                            <Picker.Item color="#BFBFBF" label="Selecione..." value="null" />
                            <Picker.Item label="Masculino" value={1} />
                            <Picker.Item label="Feminino" value={2} />
                            <Picker.Item label="Outros" value={0} />
                        </Picker>
                    </View>
                    <View style={{display:'flex',gap:5}}>
                        <Text style={Styles.textLabel}>Possui Carro:</Text>
                        <Picker style={Styles.textPicker} selectedValue={possuiCarro} onValueChange={setPossuiCarro}>
                            <Picker.Item color="#BFBFBF" label="Selecione..." value="null" />
                            <Picker.Item label="Sim" value={1} />
                            <Picker.Item label="Não" value={0} />
                        </Picker>
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
                            onPress={handleCadastroCliente}
                        />
                    )}
                </View>

            </View>
        </ScrollView>
    )
}
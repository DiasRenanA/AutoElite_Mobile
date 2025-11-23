import { Head } from "@/src/components/headComponent/head";
import { useAuth } from "@/src/contexts/AuthContext";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { ActivityIndicator, Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Styles } from "./style";

//teste


export default function PerfilScreen() {
     interface MyJwtPayload {
        endereco: {
            id: string;
            bairro: string;
            cep: string;
            cidade: string;
            rua: string;
            latitude: number;
            longitude: number;
            nmr: string;
            uf: string;
            complemento: string;
        };
    }
    const { logout, token, clientToken } = useAuth();
    const [screenKey, setScreenKey] = useState(0);

    // Controle de Edição e Loading
    const [isEditing, setIsEditing] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Estados dos Dados (Inicializados com os valores do seu exemplo)
    // Na vida real, você buscaria isso de um useEffect com GET /enderecos
    const [cep, setCep] = useState('06840160');
    const [rua, setRua] = useState('Rua Sebastião Francisco dos Santos');
    const [nmr, setNmr] = useState('360');
    const [complemento, setComplemento] = useState('Casa 2');
    const [bairro, setBairro] = useState('São Judas');
    const [cidade, setCidade] = useState('São Paulo');
    const [uf, setUf] = useState('SP');
    const [idEndereco, setIdEndereco] = useState('17'); // ID necessário para a API

    
    async function buscar() {
        const API_URL = "http://localhost:3001/enderecos/";

        try {
            if(token && clientToken){
                let response = await fetch(API_URL + "id_user/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "authorization": "Bearer "+token,
                    "token_dados": clientToken
                    },
                });
                const respostaJson = await response.json();

                const mensagem = respostaJson.message;
                if (response.status !== 200) {
                    return [null, mensagem];
                }

                const decoded = jwtDecode<MyJwtPayload>(respostaJson.token_endereco);
                console.log(decoded.endereco)
                setCep(decoded.endereco.cep)
                setBairro(decoded.endereco.bairro)
                setCidade(decoded.endereco.cidade)
                setComplemento(decoded.endereco.complemento)
                setNmr(decoded.endereco.nmr)
                setRua(decoded.endereco.rua)
                setUf(decoded.endereco.uf)
                setIdEndereco(decoded.endereco.id)

            return [decoded, mensagem];
            }
            return ['token não encontrado', 'token']
        } catch (error) {
            console.error("Erro na requisição:", error);
            return [null, "Erro na requisição"];
        }
    }

    const handleSalvar = async () => {
        if (!token || !clientToken) {
            Alert.alert('Erro', 'Sessão inválida.');
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch('http://localhost:3001/enderecos/editar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'token_dados': clientToken,
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    id_endereco: Number(idEndereco),
                    cep,
                    rua,
                    nmr: Number(nmr),
                    bairro,
                    cidade,
                    uf,
                    complemento
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Erro ao atualizar.');
            }

            Alert.alert("Sucesso", "Endereço atualizado!");
            setIsEditing(false); // Sai do modo de edição

        } catch (error: any) {
            Alert.alert("Erro", error.message || "Falha na conexão.");
        } finally {
            setScreenKey(screenKey + 1);
            setIsLoading(false);
        }
    };

    const toggleEdicao = () => {
        // Se for cancelar, poderíamos resetar os valores aqui se tivéssemos um backup
        setIsEditing(!isEditing);
    };

    const sair = async () => {
        await logout();
        // router.replace('/(public)/login'); // Opcional
    };

    // Componente auxiliar para renderizar Campo ou Texto
    const RenderField = ({ label, value, onChange, keyboardType = 'default' }: any) => (
        <View style={Styles.boxText}>
            <Text style={Styles.label}>{label}:</Text>
            {isEditing ? (
                <TextInput
                    style={[ { height: 40, marginBottom: 0, flex: 1 }]} // Estilo inline para ajustar no box
                    value={value}
                    onChangeText={onChange}
                    keyboardType={keyboardType}
                />
            ) : (
                <Text style={Styles.value}>{value}</Text>
            )}
        </View>
    );

    useEffect(() => {
            async function carregarProdutos() {
                const [resposta, mensagem] = await buscar();
    
                if (resposta) {
                    console.log("Produtos recebidos:", resposta);
                }
            }

        carregarProdutos()
        }, [screenKey]);

    return (
        <ScrollView key={screenKey} contentContainerStyle={Styles.container}>
            <Head />

            <Text style={Styles.h1}>No menu, você edita suas principais informações.</Text>

            {/* --- DADOS CADASTRAIS (Estáticos por enquanto) --- */}
            <View style={Styles.boxCadastro}>
                <Text style={Styles.cardTitle}>Informações cadastrais:</Text>
                <View style={Styles.boxText}>
                    <Text style={Styles.label}>CPF:</Text>
                    <Text style={Styles.value}>424.323.542-44</Text>
                </View>
                <View style={Styles.boxText}>
                    <Text style={Styles.label}>Nome:</Text>
                    <Text style={Styles.value}>Gustavo Sousa de Melo</Text>
                </View>
                {/* Adicione os outros campos estáticos aqui... */}
            </View>

            {/* --- ENDEREÇO (Editável) --- */}
            <View style={Styles.boxCadastro}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text style={Styles.cardTitle}>Informações de endereço:</Text>
                    {/* ID do endereço para debug (opcional) */}
                    {isEditing && <Text style={{fontSize: 10, color: '#aaa'}}>ID: {idEndereco}</Text>}
                </View>

                <RenderField label="CEP" value={cep} onChange={setCep} keyboardType="numeric" />
                <RenderField label="Rua" value={rua} onChange={setRua} />
                <RenderField label="Número" value={nmr} onChange={setNmr} keyboardType="numeric" />
                <RenderField label="Compl." value={complemento} onChange={setComplemento} />
                <RenderField label="Bairro" value={bairro} onChange={setBairro} />
                <RenderField label="Cidade" value={cidade} onChange={setCidade} />
                <RenderField label="UF" value={uf} onChange={setUf} />

                <View style={{ marginTop: 15 }}>
                    {isLoading ? (
                        <ActivityIndicator size="large" color="#000" />
                    ) : (
                        <>
                            {isEditing ? (
                                <View style={{ gap: 10 }}>
                                    <TouchableOpacity style={Styles.buttonEdit} onPress={handleSalvar} activeOpacity={0.7}>
                                        <Text style={Styles.buttonText}>Salvar Alterações</Text>
                                    </TouchableOpacity>
                                    
                                    <TouchableOpacity 
                                        style={[Styles.buttonEdit, { backgroundColor: '#ccc' }]} 
                                        onPress={toggleEdicao} 
                                        activeOpacity={0.7}
                                    >
                                        <Text style={Styles.buttonText}>Cancelar</Text>
                                    </TouchableOpacity>
                                </View>
                            ) : (
                                <TouchableOpacity style={Styles.buttonEdit} onPress={toggleEdicao} activeOpacity={0.7}>
                                    <Text style={Styles.buttonText}>Editar Endereço</Text>
                                </TouchableOpacity>
                            )}
                        </>
                    )}
                </View>
            </View>

            <TouchableOpacity style={Styles.logoutButton} onPress={sair} activeOpacity={0.7}>
                <Text style={Styles.logoutButtonText}>Sair</Text>
            </TouchableOpacity>

            <Text style={Styles.footerText}>
                Auto Elite – conectando você ao melhor do mundo automotivo.
            </Text>
        </ScrollView>
    );
}
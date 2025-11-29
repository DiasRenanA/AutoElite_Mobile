import { HeadAdmLoja } from "@/src/components/headComponent/head";
import { useAuth } from "@/src/contexts/AuthContext";
import { router } from "expo-router";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { ActivityIndicator, Alert, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Styles } from "./style";



export const PerfilLojaScreen = () => {

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

    const { logout, token, clientToken, apiUrl } = useAuth();
    const [screenKey, setScreenKey] = useState(0);
    const [isEditing, setIsEditing] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [cep, setCep] = useState('06840160');
    const [rua, setRua] = useState('Rua Sebastião Francisco dos Santos');
    const [nmr, setNmr] = useState('360');
    const [complemento, setComplemento] = useState('Casa 2');
    const [bairro, setBairro] = useState('São Judas');
    const [cidade, setCidade] = useState('São Paulo');
    const [uf, setUf] = useState('SP');
    const [idEndereco, setIdEndereco] = useState('17'); 

    async function buscar() {
            const API_URL = apiUrl + "enderecos/";
    
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
                const response = await fetch(apiUrl + 'enderecos/editar', {
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
                setIsEditing(false);
    
            } catch (error: any) {
                Alert.alert("Erro", error.message || "Falha na conexão.");
            } finally {
                setScreenKey(screenKey + 1);
                setIsLoading(false);
            }
    };

    
    const toggleEdicao = () => {
        setIsEditing(!isEditing);
    };

    const proximo = () => {
        router.push('/cadastroTipo');
    };

    const sair = async () => {
        await logout();
    };

    useEffect(() => {
                async function carregarProdutos() {
                    const [resposta, mensagem] = await buscar();
        
                    if (resposta) {
                        console.log("Produtos recebidos:", resposta);
                    }
                }
    
            carregarProdutos()
            }, [screenKey]);

    const RenderField = ({ label, value, onChange, keyboardType = 'default' }: any) => (
            <View style={Styles.boxText}>
                <Text style={Styles.label}>{label}:</Text>
                {isEditing ? (
                    <TextInput
                        style={[ { height: 40, marginBottom: 0, flex: 1 }]}
                        value={value}
                        onChangeText={onChange}
                        keyboardType={keyboardType}
                    />
                ) : (
                    <Text style={Styles.value}>{value}</Text>
                )}
            </View>
        );
    return(
        <ScrollView >
            <HeadAdmLoja />

            <View style={Styles.container}>
                <Text style={Styles.h1}>No menu, você edita suas principais informações.</Text>
                
                <View style={Styles.boxCadastro}>
                    <Text style={Styles.cardTitle}>Informações cadastrais:</Text>
                    
                    <View style={Styles.boxText}>
                        <Text style={Styles.label}>CPF:</Text>
                        <Text style={Styles.value}>424.323.542-44</Text>
                    </View>
                    <View style={Styles.boxText}>
                        <Text style={Styles.label}>Nome Completo:</Text>
                        <Text style={Styles.value}>Gustavo Sousa de Melo</Text>
                    </View>
                    <View style={Styles.boxText}>
                        <Text style={Styles.label}>Telefone:</Text>
                        <Text style={Styles.value}>(11) 98345-2345</Text>
                    </View>
                    <View style={Styles.boxText}>
                        <Text style={Styles.label}>Data de Nascimento:</Text>
                        <Text style={Styles.value}>23/03/1998</Text>
                    </View>
                    <View style={Styles.boxText}>
                        <Text style={Styles.label}>Gênero:</Text>
                        <Text style={Styles.value}>Masculino</Text>
                    </View >
                    
                    <TouchableOpacity style={Styles.buttonEdit} activeOpacity={0.7}>
                        <Text style={Styles.buttonText}>Editar</Text>
                    </TouchableOpacity>
                </View>
                </View>
                <View style={Styles.boxCadastro}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Text style={Styles.cardTitle}>Informações de endereço:</Text>
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
    )
}
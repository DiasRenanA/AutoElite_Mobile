import { CardCadastro } from "@/src/components/cardComponent/card";
import { HeadAdm } from "@/src/components/headComponent/head";
import { useAuth } from "@/src/contexts/AuthContext";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Styles } from "./style";

export const AdminPanelScreens = () => {

    const { apiUrl } = useAuth();
    const {token} = useAuth()

    const [screenKey, setScreenKey] = useState(0);
    const [produtos, setProdutos] = useState<any[]>([]);
    


    async function listar(nomes:string[] = [], categoria = null) {

        const dadosUsuario = {
            nomes: nomes,
            categoria: categoria,
        };

        try {
            let response = await fetch(API_URL + "produtos/listar/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    ...(token && { "authorization": "Bearer " + token })
                },
                body: JSON.stringify(dadosUsuario),
            });
    
            const respostaJson = await response.json();
            console.log(respostaJson)
            const mensagem = respostaJson.message;
    
            if (response.status !== 200) {
                return [null, mensagem];
            }
    
            return [respostaJson, mensagem];
    
        } catch (error) {
            console.error("Erro na requisição:", error);
            return [null, "Erro na requisição"];
        }
    }

    const API_URL = apiUrl;
    
    
    const irParaCadastrarProduto = () => {
        router.push('/cadastrarProduto');
    };

    const mockProdutos = [
    { id: '1', title: 'Pneu', image: require('@/src/assets/images/volante.png') },
    { id: '2', title: 'Volante', image: require('@/src/assets/images/volante.png') },
    { id: '3', title: 'Farol', image: require('@/src/assets/images/volante.png') },
    // Adicione mais se precisar...
];
const handleEditarProduto = () => {
        console.log("EDITAR:");
    };

    async function handleDeletarProduto(id_produto:any)  {
        console.log("DELETAR:");
        const resposta = await fetch('http://localhost:3001/produtos/excluir/', {
          method: 'DELETE',
          headers: {
              'Content-Type': 'application/json',
              "authorization": "Bearer "+token,
          },
          body: JSON.stringify({ id_produto: id_produto })
        });
        const respostaJson = await resposta.json();
        console.log(respostaJson)
  
        const mensagem = respostaJson.message;
        setScreenKey(screenKey + 1);

        return mensagem
    };

    async function carregarProdutos() 
    {
        setProdutos([])
        const [resposta, mensagem] = await listar();

        if (resposta) {
            console.log("Produtos recebidos:", resposta.produtos);
            setProdutos(resposta.produtos);
        }
    }

    useEffect(() => {
            carregarProdutos();
        }, [screenKey]);

    return(
        <ScrollView>
            <View key={screenKey} style={Styles.container}>
                <HeadAdm />
                <TouchableOpacity style={Styles.buttonCadastrar} onPress={irParaCadastrarProduto} activeOpacity={0.7}>
                    <Text style={{color: '#fff'}}>Cadastrar Produto</Text>
                </TouchableOpacity>
            <FlatList
            data={produtos} 
            keyExtractor={(item) => item.id} 
            
            renderItem={({ item }) => (
                <CardCadastro
                    title={item.title}
                    imageSource={item.img}
                    onEdit={() => handleEditarProduto()}
                    onDelete={() => handleDeletarProduto(item.id_produto)}
                />
            )}
            
        />
            </View>
        </ScrollView>
    )
}
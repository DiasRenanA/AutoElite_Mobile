import { CardCadastroLoja } from "@/src/components/cardComponent/card";
import { HeadAdmLoja } from "@/src/components/headComponent/head";
import { useAuth } from "@/src/context/AuthContext";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Styles } from "./style";

export const AdminPanelLojaScreen = () => {
    const {token} = useAuth()
    

    const API_URL = "http://localhost:3001/produtos/";

    function limitarTexto(texto: string, limite: number) {
    if (texto.length <= limite) return texto;
        return texto.substring(0, limite) + "...";
    }
    
    async function listar(nomes:string[] = [], categoria = null) {
    
        const dadosUsuario = {
            nomes: nomes,
            categoria: categoria,
        };
    
        try {
            let response = await fetch(API_URL + "listar/", {
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
    const irParaCadastrarProduto = () => {
        router.push('/cadastrarProduto');
    };

    const [produtos, setProdutos] = useState<any[]>([]);
    useEffect(() => {
        async function carregarProdutos() {
            const [resposta, mensagem] = await listar();

            if (resposta) {
                console.log("Produtos recebidos:", resposta.produtos);
                setProdutos(resposta.produtos);
            }
        }

        carregarProdutos();
    }, []);

    return(
        <ScrollView>
            <View style={Styles.container}>
                <HeadAdmLoja />
                <TouchableOpacity style={Styles.buttonCadastrar} onPress={irParaCadastrarProduto} activeOpacity={0.7}>
                    <Text style={{color: '#fff'}}>Meus Produtos</Text>
                </TouchableOpacity>
                {
                        produtos.map((item) => (
                            <CardCadastroLoja
                                title = {limitarTexto(item.nome_produto,30)}
                                imageSource = {item.img}
                                onPress={irParaCadastrarProduto}
                            
                            />
                        ))
                }
                
            </View>
        </ScrollView>
    )
}
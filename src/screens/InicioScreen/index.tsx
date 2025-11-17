import { CardPequeno } from "@/src/components/cardComponent/card"
import { Head } from "@/src/components/headComponent/head"
import { Input } from "@/src/components/inputComponent"
import { Rodape } from "@/src/components/rodapeComponent/rodape"
import { router } from "expo-router"
import { useEffect, useState } from "react"
import { Image, ScrollView, Text, View, } from "react-native"
import { Styles } from "./style"


import AsyncStorage from '@react-native-async-storage/async-storage'


const API_URL = "http://localhost:3001/produtos_loja/";


export async function listar(nomes = [], categoria = null) {

    const token = await AsyncStorage.getItem('token');

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



export const InicioScreen = () => {
    const [produtos, setProdutos] = useState<any[]>([]);

    useEffect(() => {
        async function carregarProdutos() {
            const [resposta, mensagem] = await listar();

            if (resposta) {
                console.log("Produtos recebidos:", resposta.produtos_loja);
                setProdutos(resposta.produtos_loja);
            }
        }

        carregarProdutos();
    }, []);


    const irParaProductPage = () =>{
        router.push('/productPage')
    }

    return(
        <ScrollView>

            <View style={Styles.container}>
                <Head/>
                <Input/>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {produtos.map((item) => (
                        <CardPequeno
                            key={item.id_produto_loja}
                            onPress={irParaProductPage}
                            title={item.produto.nome_produto}
                            imageSource={{ uri: item.produto.img }}
                            distance={"Descubra a distância deste produto"}
                        />
                    ))}
                </ScrollView>

                <View style={Styles.containerBeneficios}>
                    <Image
                        source={require('@/src/assets/images/ImagemCasal.png')}
                        resizeMode="contain"
                    />
                    <View style={Styles.boxTextBeneficios}>
                        <Text style={Styles.text_H1}>Serviços automotivos na sua mão!</Text>
                        <Text style={Styles.text_padrao}>Conectamos você à loja ideal sem complicação. Com poucos toques no celular, encontre os melhores serviços e produtos automotivos perto de você. E para as lojas, essa é a chance de se destacar e alcançar mais clientes.</Text>
                        <Text style={Styles.text_padrao}>
                            • Tudo rápido, fácil e direto pelo seu celular. {`\n`}
                            • Encontre, compare e escolha o melhor serviço para você. {`\n`}
                            •<Text style={Styles.textDestacadosYellow}> Lojas premium</Text> sempre em destaque para mais visibilidade.
                        </Text>
                        <Text style={Styles.text_padrao}>Seu carro precisa, você encontra. Sua loja oferece, seu cliente acha. Simples assim!</Text>
                    </View>
                </View>

                <Rodape />
            </View>
        </ScrollView>
    )
}
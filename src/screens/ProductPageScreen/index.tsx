import { CardGrande } from "@/src/components/cardComponent/card"
import { Head } from "@/src/components/headComponent/head"
import { Rodape } from "@/src/components/rodapeComponent/rodape"
import { useAuth } from "@/src/contexts/AuthContext"
import { useLocalSearchParams } from "expo-router"
import { useEffect, useState } from "react"
import { Linking, ScrollView, View } from "react-native"
import { Styles } from "./style"


    
    const API_URL = "http://localhost:3001/produtos_loja/";

    
export const ProductPageScreen = () => {
    const {token} = useAuth()
    const { id } = useLocalSearchParams();
    const [getProduto, setProduto] = useState<any>(null);

    async function buscar() {
        const idNumber = Number(id);
        const dadosUsuario = {
            id_produto_loja: idNumber
        };

        try {
            let response = await fetch(API_URL + "buscar/", {
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

    
    useEffect(() => {
                async function carregarProduto() {
                    const [resposta, mensagem] = await buscar();
        
                    if (resposta) {
                        setProduto(resposta)
                        console.log("Produtos recebidos:", resposta);
                    }
                }
                carregarProduto()
            }, []);
    if (!getProduto) {
        return <ScrollView><Head /><View><Rodape /></View></ScrollView>;
    }

    const handlePress = () => {
        Linking.openURL("https://www.google.com/maps/dir/"+getProduto.endereco.rua+",+"+getProduto.endereco.nmr+",+"+getProduto.endereco.cidade+",+"+getProduto.endereco.uf+",+"+getProduto.endereco.cep+"/"+getProduto.produto_loja.endereco.rua+",+"+getProduto.produto_loja.endereco.nmr+",+"+getProduto.produto_loja.endereco.cidade+",+"+getProduto.produto_loja.endereco.uf+",+"+getProduto.produto_loja.endereco.cep);
    };

    return(
        
        <ScrollView>
            <View style={Styles.container}>
                <Head/>
                <CardGrande 
                title={getProduto.produto_loja.produto.nome_produto}
                distance={getProduto.distancia.toFixed(2)}
                imageSource={{ uri: getProduto.produto_loja.produto.img }}
                fantasia={getProduto.produto_loja.loja.nomeFantasia}
                razao={getProduto.produto_loja.loja.razaoSocial}
                cel={getProduto.produto_loja.loja.celular}
                tel={getProduto.produto_loja.loja.telefone}
                cep={getProduto.produto_loja.endereco.cep}
                rua={getProduto.produto_loja.endereco.rua}
                nmr={getProduto.produto_loja.endereco.nmr}
                uf={getProduto.produto_loja.endereco.uf}
                onMapPress={handlePress}
                />
                
                <Rodape />
            </View>
        </ScrollView>
    )
}
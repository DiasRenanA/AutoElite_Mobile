import { Head } from "@/src/components/headComponent/head"
import { Rodape } from "@/src/components/rodapeComponent/rodape"
import { useLocalSearchParams } from "expo-router"
import { useEffect } from "react"
import { ScrollView, View } from "react-native"
import { Styles } from "./style"

    
    const API_URL = "http://localhost:3001/produtos_loja/";
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7ImlkX3VzdWFyaW8iOjYsImVtYWlsX3VzdWFyaW8iOiJlc3NhZGlrNzUyQHVvcmFrLmNvbSIsInBhc3NfdXN1YXJpbyI6IiQyYiQxMCRkUzE3SHZnTGo4bkJCb0ZFc1dLL1R1OHZSbmpnM0xDSTlxY0s1N2hNcVA5RVNTNlUuWEhjZSIsInR5cGVVc2VyIjpudWxsLCJ2ZXJpZmljYWRvIjoiMjAyNS0wMS0wMVQwMzowMDowMC4wMDBaIn0sImlhdCI6MTc2MzY3MDQxOSwiZXhwIjoxNzYzNjc0MDE5fQ.2OSa-_JnrlhRPcRSHGdNz2ElVw8Wl6UgyYpxtBDNrgQ"

    
export const ProductPageScreen = () => {
    const { id } = useLocalSearchParams();

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
                        console.log("Produtos recebidos:", resposta.produtos_loja);
                    }
                }
                carregarProduto()
            }, []);

    return(
        
        <ScrollView>
            <View style={Styles.container}>
                <Head/>
                
                
                <Rodape />
            </View>
        </ScrollView>
    )
}
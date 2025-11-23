import { CardPequeno } from "@/src/components/cardComponent/card"
import { Head } from "@/src/components/headComponent/head"
import { Input } from "@/src/components/inputComponent"
import { Rodape } from "@/src/components/rodapeComponent/rodape"
import { useAuth } from "@/src/contexts/AuthContext"
import { router } from "expo-router"
import { useEffect, useState } from "react"
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { Styles } from "./style"




const API_URL = "http://localhost:3001/produtos_loja/";
//const token_session = await AsyncStorage.getItem('token');

export async function listar(nomes:string[] = [], categoria = null,token:any = null) {

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

function limitarTexto(texto: string, limite: number) {
    if (texto.length <= limite) return texto;
    return texto.substring(0, limite) + "...";
}


export const InicioScreen = () => {
    const {token} = useAuth()


    const [produtos, setProdutos] = useState<any[]>([]);
    const [pesquisa, setPesquisa] = useState("");
    useEffect(() => {
        async function carregarProdutos() {
            const [resposta, mensagem] = await listar([],null,token);

            if (resposta) {
                console.log("Produtos recebidos:", resposta.produtos_loja);
                setProdutos(resposta.produtos_loja);
            }
        }

        carregarProdutos();
    }, []);


    const irParaProductPage = (id_produto: number) =>{
        router.push({
            pathname: "/productPage",
            params: { id: id_produto }
        });
    }


    const irParaMyProducts = () =>{
        router.push('/adminPanelLoja')
    }

    const handlePesquisa = async (textoDigitado: string) => {
    setPesquisa(textoDigitado);

    const palavrasProcessadas = limparTexto(textoDigitado);
    console.log("Palavras filtradas:", palavrasProcessadas);

    // limpa a lista
    setProdutos([]);

    // garante que o React renderize a limpeza antes de continuar
    await new Promise(resolve => setTimeout(resolve, 10));

    const [resposta, mensagem] = await listar(palavrasProcessadas,null,token);

    setProdutos(resposta.produtos_loja);
};

    return(
        <ScrollView>
            <View style={Styles.container}>
                <Head/>
                <Input onChange={handlePesquisa} />
                <TouchableOpacity onPress={() => irParaMyProducts()}>
                    <Text>ADICONAR PRODUTOS</Text>
                </TouchableOpacity> 
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {
                        produtos.map((item) => (
                        <CardPequeno
                            key={item.id_produto_loja}
                            onPress={() => irParaProductPage(item.id_produto_loja)}
                            title={limitarTexto(item.produto.nome_produto, 20)}
                            imageSource={{ uri: item.produto.img }}

                            distance={
                                token
                                ? item.distancia + " km"   // 👉 quando tem token
                                : "Descubra a distância deste produto"  // 👉 quando não tem
                            }
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


export function limparTexto(texto:string) {
    const stopwords = [
        "a","as","o","os","um","uma","uns","umas","de","da","do","das","dos",
        "e","ou","mas","por","para","com","sem","no","na","nos","nas","ao","à",
        "às","aos","que","quem","onde","quando","como","porque","porquê",
        "se","sua","seu","suas","seus","me","te","lhe","eles","elas","ele",
        "ela","isso","isto","aquilo","em","num","numa","sobre","até"
    ];
    if (!texto) return [];

    // 1. Remover pontuação
    let resultado = texto.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"']/g, "");

    // 2. Remover múltiplos espaços
    resultado = resultado.replace(/\s+/g, " ").trim();

    // 3. Separar em palavras
    let palavras = resultado.split(" ");

    // 4. Remover stopwords
    let palavrasFiltradas = palavras.filter(
        p => !stopwords.includes(p.toLowerCase())
    );

    // 5. Normalizar tudo para lowercase
    palavrasFiltradas = palavrasFiltradas.map(p => p.toLowerCase());

    // 6. Remover repetidas
    palavrasFiltradas = [...new Set(palavrasFiltradas)];

    return palavrasFiltradas;
    }

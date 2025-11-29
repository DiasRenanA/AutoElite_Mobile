import { CardCadastro } from "@/src/components/cardComponent/card";
import { HeadAdm } from "@/src/components/headComponent/head";
import { Input } from "@/src/components/inputComponent";
import { useAuth } from "@/src/contexts/AuthContext";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Styles } from "./style";


export const AdminPanelScreens = () => {

    

    const {token,apiUrl } = useAuth()

    const [screenKey, setScreenKey] = useState(0);
    const [produtos, setProdutos] = useState<any[]>([]);
    const [pesquisa, setPesquisa] = useState("");
    

    const handlePesquisa = async (textoDigitado: string) => {
        setPesquisa(textoDigitado);
        //
        const palavrasProcessadas = limparTexto(textoDigitado);
        console.log("Palavras filtradas:", palavrasProcessadas);

        setProdutos([]);
    
        await new Promise(resolve => setTimeout(resolve, 10));
    
        const [resposta, mensagem] = await listar(palavrasProcessadas,null);
    
        setProdutos(resposta.produtos);
    };
    


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

    const irParaEditarProduto = (id_produto: number) =>{
        router.push({
            pathname: "/cadastrarProduto",
            params: { id: id_produto }
        });
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
        const resposta = await fetch(apiUrl+'produtos/excluir/', {
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
                <Input onChange={handlePesquisa} />
                
                <TouchableOpacity style={Styles.buttonCadastrar} onPress={irParaCadastrarProduto} activeOpacity={0.7}>
                    <Text style={{color: '#fff'}}>Cadastrar Produto</Text>
                </TouchableOpacity>
            <FlatList
            data={produtos} 
            keyExtractor={(item) => item.id} 
            
            renderItem={({ item }) => (
                <CardCadastro
                    title={item.nome_produto}
                    imageSource={item.img}
                    onEdit={() => irParaEditarProduto(item.id_produto)}
                    onDelete={() => handleDeletarProduto(item.id_produto)}
                />
            )}
            
        />
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

    let resultado = texto.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"']/g, "");

    resultado = resultado.replace(/\s+/g, " ").trim();

    let palavras = resultado.split(" ");

    let palavrasFiltradas = palavras.filter(
        p => !stopwords.includes(p.toLowerCase())
    );

    palavrasFiltradas = palavrasFiltradas.map(p => p.toLowerCase());

    palavrasFiltradas = [...new Set(palavrasFiltradas)];

    return palavrasFiltradas;
    }

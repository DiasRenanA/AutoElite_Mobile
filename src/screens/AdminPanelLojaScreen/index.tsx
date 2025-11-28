import { CardCadastroLoja } from "@/src/components/cardComponent/card";
import { HeadAdmLoja } from "@/src/components/headComponent/head";
import { Input } from "@/src/components/inputComponent";
import { useAuth } from "@/src/contexts/AuthContext";
import { router } from "expo-router";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Styles } from "./style";

export const AdminPanelLojaScreen = () => {
    

    const [screenKey, setScreenKey] = useState(0);

    const {token, apiUrl} = useAuth()
    
    const [pesquisa, setPesquisa] = useState("");

    const [TokenDados, setTokenDados] = useState<any>([]);

    const [botao, setBotao] = useState("Vincular");

    const handlePesquisa = async (textoDigitado: string) => {
        setPesquisa(textoDigitado);
    
        const palavrasProcessadas = limparTexto(textoDigitado);
        console.log("Palavras filtradas:", palavrasProcessadas);

        setProdutos([]);
    
        await new Promise(resolve => setTimeout(resolve, 10));
    
        const [resposta, mensagem] = await listar(palavrasProcessadas,null);
    
        setProdutos(resposta.produtos);
    };

    const API_URL = apiUrl;

    function limitarTexto(texto: string, limite: number) {
    if (texto.length <= limite) return texto;
        return texto.substring(0, limite) + "...";
    }

    async function listarMyProducts(){

        buscarDados()
        
        try{

            const response = await fetch(API_URL + "produtos_loja/listarProdutosLoja/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "authorization": "Bearer "+token,
                    "token_dados": TokenDados
                },
            });
            const respostaJson = await response.json();
        
            console.log("Produtos:", respostaJson)

            const mensagem = respostaJson.message;
            if (response.status !== 200) {
                return [null, mensagem];
            }
            return [respostaJson.produtos_loja, mensagem];
        }
        catch (error){
            return [null, "Erro na requisição"];
        } 
    }

    
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

    interface MyJwtPayload {
        usuario: {
            id_usuario: number;
            email_usuario: string;
            pass_usuario: string;
            typeUser: null | number;
            vrificado: Date
        };
    }


    async function buscarDados() {
            if(!token){
                console.log("Token não encontrado")
                return "Token não encontrado"
            }
            const decoded = jwtDecode<MyJwtPayload>(token);
            console.log(decoded);

            const dadosUsuario = {
                id_usuario: decoded.usuario.id_usuario
            };
            const response = await fetch(API_URL + "lojas/id_user/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authorization": "Bearer "+token,
            },
            body: JSON.stringify(dadosUsuario),
            });
            if (response.status !== 200) {
                console.log(response.status)
                return null;
            }
            const respostaJson = await response.json();
            const mensagem = respostaJson.message;
            setTokenDados(respostaJson.token_dados)
            return respostaJson.token_dados;
        }    
  
    const irParaCadastrarProduto = () => {
        router.push('/cadastrarProduto');
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

    async function carregarMeusProdutos() 
    {
        setProdutos([])
        const [resposta, mensagem] = await listarMyProducts();

        if (resposta) {
            console.log("Produtos recebidos:", resposta);
            setBotao('Desvincular')
            setProdutos(
                resposta.map((item: any) => ({
                    ...item.produto,
                    id_produto_loja: item.id_produto_loja
                }))
                );
        }
    }

    const adicionarProduto = async function(id_product: number){
        const resposta = await fetch(apiUrl + 'produtos_loja/criar/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "authorization": "Bearer "+token,
                    "token_dados": TokenDados
                },
                body: JSON.stringify({ id_produto: id_product })
                });
                const respostaJson = await resposta.json();
        
                const mensagem = respostaJson.message;
                console.log(mensagem)
                setScreenKey(screenKey + 1);
                return mensagem
        }
    const excluirProduto = async function(id_product: number){
        const resposta = await fetch(apiUrl + 'produtos_loja/excluir/', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    "authorization": "Bearer "+token,
                    "token_dados": TokenDados
                },
                body: JSON.stringify({ id_produto_loja: id_product })
                });
                const respostaJson = await resposta.json();
        
                const mensagem = respostaJson.message;
                console.log(mensagem)
                setScreenKey(screenKey + 1);
                return mensagem
        }


    const [produtos, setProdutos] = useState<any[]>([]);
    
    useEffect(() => {
        carregarProdutos();
        setTokenDados(buscarDados());
    }, [screenKey]);

    return(
        <ScrollView>
            <View key={screenKey} style={Styles.container}>
                <HeadAdmLoja />
                <Input onChange={handlePesquisa} />
                
                <TouchableOpacity style={Styles.buttonCadastrar} onPress={carregarMeusProdutos} activeOpacity={0.7}>
                    <Text style={{color: '#fff'}}>Meus Produtos</Text>
                </TouchableOpacity>
                {
                        produtos.map((item) => (
                            <CardCadastroLoja
                                key={item.id_produto}
                                title={limitarTexto(item.nome_produto, 30)}
                                imageSource={item.img}
                                botao={botao}
                                onPress={() =>
                                    botao === "Vincular"
                                        ? adicionarProduto(item.id_produto)
                                        : excluirProduto(item.id_produto_loja)
                                }
                            />
                        ))
                }
                
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

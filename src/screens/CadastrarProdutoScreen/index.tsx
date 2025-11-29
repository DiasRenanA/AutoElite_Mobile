import { useAuth } from "@/src/contexts/AuthContext";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Styles } from "./style";

export const CadastrarProdutoScreen = () => {
    const [nome, setNome] = useState('');
    const [categoria, setCategoria] = useState('');
    const [URL, setURL] = useState('');
    const [mensagem, setMensagem] = useState('Cadastrar')
    const { id } = useLocalSearchParams();
    const {token,apiUrl } = useAuth()

    
    async function cadastrarPRODUTO() {

        const response = await fetch(apiUrl+'produtos/criar', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        "authorization": "Bearer " + token,
                    },
                    body: JSON.stringify({  
                        nome_produto: nome,
                        img: URL,
                        categoria: categoria
                    })
                });
                const respostaJson = await response.json();
  
                const mensagem = respostaJson.message;
            
                if (response.status == 201) {
                    console.log("Produto Cadastrado com Sucesso")
                    window.location.reload();
                } else {
                    alert("Erro ao cadastrar produto." + mensagem);
                }
        
    }

     async function editarProduto() {

        const response = await fetch(apiUrl+'produtos/editar', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        "authorization": "Bearer " + token,
                    },
                    body: JSON.stringify({
                        id_produto: id,
                        nome_produto: nome,
                        img: URL,
                        categoria: categoria
                    })
                });
                const respostaJson = await response.json();
  
                const mensagem = respostaJson.message;
            
                if (response.status == 201) {
                    console.log("Produto Cadastrado com Sucesso")
                    window.location.reload();
                } else {
                    alert("Erro ao cadastrar produto." + mensagem);
                }
        
    }
    async function buscarProduto(){
            const resposta = await fetch(apiUrl+'produtos/buscar', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                "authorization": "Bearer "+token,
                            },
                            body: JSON.stringify({ id_produto: id })
                        });
    
                const produto = await resposta.json();
                setNome(produto.produto.nome_produto)
                setURL(produto.produto.img)
                setCategoria(produto.produto.categoria)
                setMensagem('Editar')
        }
    
    useEffect(() => {
        if(id != null){
            buscarProduto()
        }
        }, []);

    return(
        <ScrollView contentContainerStyle={Styles.CadastrarProduto_scrollViewContent}>
            <View style={Styles.CadastrarProduto_container}>
                
                <Text style={Styles.CadastrarProduto_title}>Cadastro de Produto</Text>

                <Text style={Styles.CadastrarProduto_label}>Nome do produto:</Text>
                <TextInput
                    style={Styles.CadastrarProduto_input}
                    placeholder=""
                    placeholderTextColor="#888"
                    value={nome}
                    onChangeText={setNome}
                />

                <Text style={Styles.CadastrarProduto_label}>Categoria:</Text>
                <TextInput
                    style={Styles.CadastrarProduto_input}
                    placeholder="" 
                    placeholderTextColor="#888"
                    value={categoria}
                    onChangeText={setCategoria}
                />

                <Text style={Styles.CadastrarProduto_label}>URL DA IMAGEM:</Text>
                <TextInput
                    style={Styles.CadastrarProduto_input}
                    placeholder="" 
                    placeholderTextColor="#888"
                    value={URL}
                    onChangeText={setURL}
                />
                <TouchableOpacity 
                    style={Styles.CadastrarProduto_cadastrarButton}
                   
                    onPress={
                        id == null
                        ?cadastrarPRODUTO
                        :editarProduto
                    } 
                    activeOpacity={0.7}
                >
                    <Text style={Styles.CadastrarProduto_cadastrarButtonText}>{mensagem} produto</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    )
}
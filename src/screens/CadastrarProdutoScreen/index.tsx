import { router } from "expo-router";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Styles } from "./style";

export const CadastrarProdutoScreen = () => {

    const proximo = () => {
        router.push('/inicio');
    };

    const handleChooseFile = () => {
        console.log("Abrir seletor de arquivos...");
    };

    const handleCadastrarProduto = () => {
        console.log("Cadastrar produto...");
    };

    return(
        <ScrollView contentContainerStyle={Styles.CadastrarProduto_scrollViewContent}>
            <View style={Styles.CadastrarProduto_container}>
                
                <Text style={Styles.CadastrarProduto_title}>Cadastro de Produto</Text>

                <Text style={Styles.CadastrarProduto_label}>Nome do produto:</Text>
                <TextInput
                    style={Styles.CadastrarProduto_input}
                    placeholder=""
                    placeholderTextColor="#888"
                />

                <Text style={Styles.CadastrarProduto_label}>Categoria:</Text>
                <TextInput
                    style={Styles.CadastrarProduto_input}
                    placeholder="" 
                    placeholderTextColor="#888"
                />

                <Text style={Styles.CadastrarProduto_imageLabel}>Selecione uma imagem</Text>
                <TouchableOpacity 
                    style={Styles.CadastrarProduto_chooseFileButton} 
                    onPress={handleChooseFile}
                    activeOpacity={0.7}
                >
                    <Text style={Styles.CadastrarProduto_chooseFileButtonText}>Escolher arquivo</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={Styles.CadastrarProduto_cadastrarButton} 
                    onPress={handleCadastrarProduto} 
                    activeOpacity={0.7}
                >
                    <Text style={Styles.CadastrarProduto_cadastrarButtonText}>Cadastrar produto</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    )
}
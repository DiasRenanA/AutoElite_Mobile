import { router } from "expo-router";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Styles } from "./style";

export const CadastrarProdutoScreen = () => {

    const proximo = () => {
        router.push('/inicio');
    };

    const handleChooseFile = () => {
        // Lógica para abrir o seletor de arquivos (ImagePicker, DocumentPicker, etc.)
        console.log("Abrir seletor de arquivos...");
    };

    const handleCadastrarProduto = () => {
        // Lógica para cadastrar o produto
        console.log("Cadastrar produto...");
        // Você pode chamar 'proximo()' aqui depois de cadastrar
        // proximo(); 
    };

    return(
        <ScrollView contentContainerStyle={Styles.CadastrarProduto_scrollViewContent}>
            <View style={Styles.CadastrarProduto_container}>
                
                {/* Título da tela */}
                <Text style={Styles.CadastrarProduto_title}>Cadastro de Produto</Text>

                {/* Campo Nome do produto */}
                <Text style={Styles.CadastrarProduto_label}>Nome do produto:</Text>
                <TextInput
                    style={Styles.CadastrarProduto_input}
                    placeholder="" // No design não tem placeholder para "Nome do produto"
                    placeholderTextColor="#888"
                />

                {/* Campo Categoria */}
                <Text style={Styles.CadastrarProduto_label}>Categoria:</Text>
                <TextInput
                    style={Styles.CadastrarProduto_input}
                    placeholder="" // No design não tem placeholder para "Categoria"
                    placeholderTextColor="#888"
                />

                {/* Seleção de Imagem */}
                <Text style={Styles.CadastrarProduto_imageLabel}>Selecione uma imagem</Text>
                <TouchableOpacity 
                    style={Styles.CadastrarProduto_chooseFileButton} 
                    onPress={handleChooseFile}
                    activeOpacity={0.7}
                >
                    <Text style={Styles.CadastrarProduto_chooseFileButtonText}>Escolher arquivo</Text>
                </TouchableOpacity>

                {/* Botão Cadastrar Produto */}
                <TouchableOpacity 
                    style={Styles.CadastrarProduto_cadastrarButton} 
                    onPress={handleCadastrarProduto} // Chama a função de cadastro
                    activeOpacity={0.7}
                >
                    <Text style={Styles.CadastrarProduto_cadastrarButtonText}>Cadastrar produto</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    )
}
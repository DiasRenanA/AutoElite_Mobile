import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
CadastrarProduto_scrollViewContent: {
        flexGrow: 1, // Permite que o ScrollView cresça e centralize
        justifyContent: 'center', // Centraliza o container verticalmente
        alignItems: 'center',    // Centraliza o container horizontalmente
        backgroundColor: '#000', // Fundo preto da tela
    },

    CadastrarProduto_container: {
        backgroundColor: '#000', // Fundo preto do card central
        borderRadius: 20,
        borderWidth: 4,
        borderColor: '#E0CA3C', // Borda amarela/dourada
        padding: 30, // Espaçamento interno maior
        alignItems: 'flex-start', // Alinha itens à esquerda dentro do container
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 8,
        width: '90%', // Largura do card, ajuste conforme necessário
        maxWidth: 400, // Máxima largura para telas maiores
        gap: 20, // Espaço entre os elementos dentro do container
    },

    CadastrarProduto_title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
        alignSelf: 'center', // Centraliza o título
    },

    CadastrarProduto_label: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 5,
    },

    CadastrarProduto_input: {
        backgroundColor: '#fff',
        width: '100%',
        height: 50,
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 16,
        color: '#000', // Cor do texto digitado
        marginBottom: 15, // Espaço extra após o input
    },

    CadastrarProduto_imageLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        alignSelf: 'center', // Centraliza o texto "Selecione uma imagem"
        marginBottom: 10,
    },

    CadastrarProduto_chooseFileButton: {
        backgroundColor: '#555', // Cor cinza do botão
        width: '100%',
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30, // Espaço antes do botão final
    },

    CadastrarProduto_chooseFileButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },

    CadastrarProduto_cadastrarButton: {
        backgroundColor: '#fff', // Cor branca do botão final
        width: '100%',
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    CadastrarProduto_cadastrarButtonText: {
        color: '#000', // Cor preta do texto do botão final
        fontSize: 18,
        fontWeight: 'bold',
    },
})
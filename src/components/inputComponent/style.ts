import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    BoxInput: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#000',
        width: 400,
        alignItems: 'center',
        
        // --- Correções ---
        borderRadius: 30,       // Aumentado para fazer a borda "pilula"
        paddingHorizontal: 20,  // Aumentado para mais espaço lateral
        paddingVertical: 5,    // Adicionado para dar altura
    },

    textInput: {
        color: '#fff', // Cor do texto QUANDO O USUÁRIO DIGITAR
        padding: 5,
        flex: 1,
        borderWidth: 0,
        fontSize: 16, // Aumentei um pouco a fonte
    },

    // --- Novo Estilo ---
    inputIcon: {
        width: 15,
        height: 15,
        // Se o seu PNG for preto, adicione a linha abaixo para deixá-lo branco:
        // tintColor: '#fff' 
    }
});
import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        gap: 30,
        marginBottom: 20,
        paddingHorizontal: 30
    },

    h1:{
        width: '80%'
    },

    boxCadastro:{
        display: 'flex',
        width:'100%',
        alignItems: 'center',
        gap: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        padding: 20
    },

    boxText:{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        textAlign: 'left'
    },

    buttonEdit:{
        display: 'flex',
        textAlign: 'center',
        padding: 5,
        borderRadius: 5,
        borderWidth: 3, 
        borderColor: '#D2D2D2',
        borderStyle: 'solid', 
    }

})
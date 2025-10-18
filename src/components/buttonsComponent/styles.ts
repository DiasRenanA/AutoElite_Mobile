import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    buttonConfirmar: {
        backgroundColor: '#C4151C',
        paddingVertical: 10,      
        paddingHorizontal: 40,
        borderRadius: 10,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },

    textButtonConfirmar: {
        color: '#fff',    
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    },

    buttonEnviar:{
        backgroundColor: '#fff',
        paddingVertical: 3,      
        borderRadius: 5,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        width: '100%',
        marginTop: 20,
    },

    textButtonEnviar:{
        color: '#000',    
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})
import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    containerButtons: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        gap: 2,
    },
    button:{
        borderWidth: 5, 
        borderColor: '#C4151C',
        borderStyle: 'solid', 
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    textButton: {
        color: '#C4151C',
        fontSize: 10,
        fontWeight: 'bold'
    },

    containerAdmLoja: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#000',
        justifyContent: 'space-around', 
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 15,          
        minHeight: 60,                  
    },

    logo: {
        width: 100,
        height: 80, 
    },

    containerAdmLojaText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        fontFamily: 'serif', 
    },
})
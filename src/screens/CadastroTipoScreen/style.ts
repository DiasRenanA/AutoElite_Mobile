import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'center',
        width: '100%',
        gap: 20,
        paddingBottom: 20,
        marginBottom: 50,
    },

    textNegrito: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    textCard: {
        fontSize: 12,
        textAlign: 'center',
        color: '#fff',
        fontWeight: '100',
    },

    textCardH1: {
        fontSize: 20,
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold'
    },

    textYellow:{
        color: '#EECE5A'
    },

    buttonCardRed:{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#C4151C',
        shadowColor: '#000',
        shadowOffset: { width: 8, height: 8 },
        shadowOpacity: 0.5, 
        shadowRadius: 2,
        borderWidth: 5, 
        borderColor: '#fff',
        borderStyle: 'solid', 
        borderRadius: 20,
        paddingHorizontal: 40,
        paddingVertical: 30,
        width: '65%',
        gap: 20,
        marginBottom: 10
    },

        buttonCardBlack:{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#000',
        shadowColor: '#000',
        shadowOffset: { width: 8, height: 8 },
        shadowOpacity: 0.5, 
        shadowRadius: 2,
        borderWidth: 5, 
        borderColor: '#EECE5A',
        borderStyle: 'solid', 
        borderRadius: 20,
        paddingHorizontal: 40,
        paddingVertical: 30,
        width: '65%',
        gap: 20,
    }
})
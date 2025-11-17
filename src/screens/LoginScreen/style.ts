import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'center',
        width: '100%',
        gap: 30,
        marginBottom: 50,
    },

    textError: {
    color: '#FF3B30', 
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bold',
    },

    containerRed:{
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
        paddingHorizontal: 30,
        paddingVertical: 30,
        width: '80%',
    },

    textH1:{
        color: '#fff',
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        paddingBottom: 20,
    },

    textInput:{
        backgroundColor: '#fff',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 8,
        marginBottom: 15,
        
    },

    textLabel: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '500',
    },

    boxText:{
        display: 'flex',
        flexDirection: 'column',
        color: '#fff',
        textAlign: 'center',
        width: '100%',
        fontSize: 12,
    }
})
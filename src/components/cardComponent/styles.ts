import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    containerCardPequeno: {
        paddingVertical: 10,      
        paddingHorizontal: 40,
        borderRadius: 30,
        borderWidth: 8, 
        borderColor: '#C4151C',
        borderStyle: 'solid', 
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    boxText:{
        display:'flex',
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#C4151C',
        color: 'fff',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5
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
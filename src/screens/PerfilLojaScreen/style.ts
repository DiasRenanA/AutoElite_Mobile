import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '100%',
        gap: 30,
        paddingVertical: 20,
        paddingHorizontal: 30,
        backgroundColor: '#FAFAFA' ,
    },

    h1:{
        textAlign: 'center',
        fontSize: 16,
        color: '#333',
    },

    boxCadastro:{
        display: 'flex',
        width: '100%',
        alignItems: 'stretch', 
        gap: 12, 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, 
        padding: 20,
        backgroundColor: '#FFFFFF', 
        borderRadius: 8 
    },

    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5, 
    },

    boxText:{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        gap: 8, 
    },

    label: {
        fontWeight: 'bold',
        fontSize: 14,
        color: '#000',
    },

    value: {
        fontSize: 14,
        color: '#333',
        flex: 1, 
    },

    buttonEdit:{
        alignSelf: 'center', 
        paddingVertical: 8, 
        paddingHorizontal: 25,
        borderRadius: 5,
        borderWidth: 1, 
        borderColor: '#D2D2D2',
        borderStyle: 'solid',
        marginTop: 10, 
    },

    buttonText: {
        fontSize: 14,
        color: '#000',
    },

    footerText: {
        marginTop: 10, 
        fontSize: 12,
        color: '#777',
        textAlign: 'center',
    },

    logoutButton: {
        alignSelf: 'center',
        width: '100%', 
        paddingVertical: 12, 
        paddingHorizontal: 25,
        borderRadius: 5,
        backgroundColor: '#C4151C',
        alignItems: 'center',
        marginTop: 10, 
    },

    logoutButtonText: {
        fontSize: 14,
        color: '#FFFFFF', 
        fontWeight: 'bold',
    }
})
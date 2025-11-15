import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    BoxInput: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#000',
        width: 350,
        alignItems: 'center',
        borderRadius: 20,      
        paddingHorizontal: 20, 
        paddingVertical: 10,   
    },

    textInput: {
        color: '#fff', 
        padding: 5,
        flex: 1,
        borderWidth: 0,
        fontSize: 16, 
    },

    inputIcon: {
        width: 15,
        height: 15,
        tintColor: '#fff' 
    }
});
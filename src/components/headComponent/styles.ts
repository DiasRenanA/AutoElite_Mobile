import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    container:{
        paddingTop: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20
    },
    texto: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    logo: {
        width: 80,
        height: 80,
        resizeMode: 'contain'
  }
})
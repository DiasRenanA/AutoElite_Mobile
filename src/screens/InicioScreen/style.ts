import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        width: '100%',
        gap: 30,
        paddingBottom: 50,
    },
    containerBeneficios:{
        display:'flex',
        flexDirection:'row',
        width: '100%',
    },
    boxTextBeneficios:{
        display:'flex',
        flexDirection:'column',
        gap: 5,
        width: '100%',
        flexShrink: 1,
        marginLeft: 10,
    },
    text_H1:{
        fontSize: 18,
        fontWeight: 'bold'
    },
    text_padrao:{
        fontSize: 9,
    },
    textDestacadosYellow: {
        color: '#EECE5A',
        fontWeight: 'bold'
    },
})
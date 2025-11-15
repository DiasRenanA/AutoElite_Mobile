import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems: 'center',
        width: '100%',
        gap: 50,
    },

    box_init:{
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: 15,
        paddingRight: 5,
        justifyContent: 'center'
    },

    box_text_init:{
        display:'flex',
        flexDirection:'column',
        width: '40%',
        gap: 10,
    },

    text_negrito:{
        fontWeight: 'bold',
        fontSize: 12,
    },

    text_padrao:{
        fontSize: 10,
    },

    containerButton: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10
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
        fontSize: 15,
        fontWeight: 'bold'
    },

    textDestacadosYellow: {
        color: '#EECE5A',
        fontWeight: 'bold'
    },

    text_end:{
        paddingHorizontal: 20,
        display: 'flex',
        flexDirection:'column',
        gap: 30,
    },

    text_end_bold:{
        marginBottom: 20,
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',
        fontFamily: 'Racing Sans One'
    }
    
})
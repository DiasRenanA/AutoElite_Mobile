import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
CardPequeno_container: {
        backgroundColor: '#fff', 
        padding: 20,             
        borderWidth: 4,          
        gap: 15,                 
        borderRadius: 30,
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
        marginRight: 15,
    },

    CardPequeno_titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },

    CardPequeno_cardImage: {
        width: 120,
        height: 120,
    },

    CardPequeno_distanceBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#C4151C',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 8,
    },

    CardPequeno_distanceText: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '500',
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

    CardGrande_container: {
        backgroundColor: '#fff',
        paddingVertical: 20,   
        paddingHorizontal: 20, 
        borderRadius: 30,
        borderWidth: 6,        
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
        maxWidth: 350,
        gap: 15, 
    },

    CardGrande_h2: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18, 
        width: '90%', 
    },

    CardGrande_productImagesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around', 
        width: '100%',
    },
    CardGrande_productImage: {
        width: 120, 
        height: 120,
    },
    CardGrande_ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    CardGrande_ratingText: {
        fontSize: 15,
    },
    CardGrande_ratingStars: {
        fontSize: 20,
        color: '#f1c40f', 
        marginHorizontal: 5,
    },
    CardGrande_ratingCount: {
        fontSize: 15,
        color: '#555',
    },
    CardGrande_distanceBanner: {
        backgroundColor: '#C4151C',
        width: '100%',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    CardGrande_distanceBannerText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },
    CardGrande_mapImage: {
        width: '100%',
        height: 150, 
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
    },

    CardGrande_infoContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        width: '100%',
    },
    CardGrande_sectionTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
        borderBottomWidth: 1, 
        borderBottomColor: '#eee',
        paddingBottom: 5,
    },
    // Renomeado
    CardGrande_infoRow: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
        flexWrap: 'wrap', 
    },
    CardGrande_infoLabel: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    CardGrande_infoValue: {
        fontSize: 15,
        flex: 1, 
    },

    containerCardCadastroLoja: {
        backgroundColor: '#fff',
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
        padding: 20,         
        width: 300,        
        gap: 15,            
    },

    cardCadastroLojaTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000',
    },

    cardCadastroLojaImage: {
        width: 180, 
        height: 180,
    },

    cardCadastroLojaVincularButton: {
        backgroundColor: '#39C80B', 
        paddingVertical: 12,      
        paddingHorizontal: 60, 
        borderRadius: 30,          
        alignSelf: 'stretch',    
        alignItems: 'center',      
    },

    cardCadastroLojaVincularButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },

    cardCadastroLojaBoxText:{
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

    CardCadastro_container: {
        backgroundColor: '#F0EFEA',
        borderRadius: 20,
        borderWidth: 4,
        borderColor: '#E0CA3C',
        padding: 20,
        alignItems: 'center',
        gap: 20, 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 8,
        width: 280, 
    },

    CardCadastro_title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },

    CardCadastro_image: {
        width: 180,
        height: 180,
        backgroundColor: '#fff', 
        borderRadius: 10,
    },

    CardCadastro_buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },

    CardCadastro_buttonBase: {
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    CardCadastro_buttonEdit: {
        backgroundColor: '#1E40AF', 
    },

    CardCadastro_buttonDelete: {
        backgroundColor: '#DC2626', 
    },

    CardCadastro_buttonIcon: {
        width: 24,
        height: 24,
        tintColor: '#FFFFFF', 
    },

})
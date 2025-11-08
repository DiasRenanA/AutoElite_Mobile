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
    },

    // Renomeado de 'titleText' para 'CardPequeno_titleText'
    CardPequeno_titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },

    // Renomeado de 'cardImage' para 'CardPequeno_cardImage'
    CardPequeno_cardImage: {
        width: 120,
        height: 120,
    },

    // Renomeado de 'distanceBox' para 'CardPequeno_distanceBox'
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

    // Renomeado de 'distanceText' para 'CardPequeno_distanceText'
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
        backgroundColor: '#fff', // Faltava o fundo branco
        paddingVertical: 20,   // Padding ajustado
        paddingHorizontal: 20, // Padding ajustado
        borderRadius: 30,
        borderWidth: 6,        // Borda um pouco mais fina
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
        maxWidth: 450,
        gap: 15, // Adiciona espaço uniforme entre os elementos
    },

    // Renomeado e corrigido
    CardGrande_h2: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18, // Fonte um pouco maior
        width: '90%', // Um pouco mais de largura
    },

    // --- Novos Estilos ---
    CardGrande_productImagesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around', // Espaça as imagens
        width: '100%',
    },
    CardGrande_productImage: {
        width: 120, // Ajuste o tamanho conforme necessário
        height: 120,
    },
    CardGrande_ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap', // Permite quebrar a linha se for muito longo
    },
    CardGrande_ratingText: {
        fontSize: 15,
    },
    CardGrande_ratingStars: {
        fontSize: 20,
        color: '#f1c40f', // Cor amarela para estrelas
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
        fontSize: 16,
        fontWeight: 'bold',
    },
    CardGrande_mapImage: {
        width: '100%',
        height: 150, // Defina uma altura para o mapa
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    // --- Fim dos Novos Estilos ---

    // Renomeado e corrigido
    CardGrande_infoContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8, // Espaço entre as linhas de informação
        width: '100%',
    },
    CardGrande_sectionTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
        borderBottomWidth: 1, // Adiciona uma linha sutil abaixo do título
        borderBottomColor: '#eee',
        paddingBottom: 5,
    },
    // Renomeado
    CardGrande_infoRow: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
        flexWrap: 'wrap', // Permite que o valor quebre a linha
    },
    CardGrande_infoLabel: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    CardGrande_infoValue: {
        fontSize: 15,
        flex: 1, // Permite que o texto ocupe o espaço e quebre a linha
    },

    containerCardCadastroLoja: {
        backgroundColor: '#fff', // Fundo branco
        borderRadius: 30,
        borderWidth: 8, 
        borderColor: '#C4151C', // Borda vermelha
        borderStyle: 'solid', 
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',    // Centraliza tudo
        padding: 20,            // Espaçamento interno
        width: 300,             // Largura do card
        gap: 15,                // Espaço entre os itens (título, imagem, botão)
    },

    // 2. Estilo para o título "Volante"
    cardCadastroLojaTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000',
    },

    // 3. Estilo para a imagem
    cardCadastroLojaImage: {
        width: 180, // Ajuste o tamanho conforme necessário
        height: 180,
    },

    // 4. Estilo para o botão VERDE "Vincular"
    cardCadastroLojaVincularButton: {
        backgroundColor: '#39C80B', // Cor verde da imagem
        paddingVertical: 12,      
        paddingHorizontal: 60, // Largura do botão
        borderRadius: 30,           // Bordas arredondadas
        alignSelf: 'stretch',     // Faz o botão esticar (ou use padding)
        alignItems: 'center',       // Centraliza o texto
    },

    // 5. Estilo para o texto "Vincular"
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
        backgroundColor: '#F0EFEA', // Um cinza/bege bem claro
        borderRadius: 20,
        borderWidth: 4,
        borderColor: '#E0CA3C', // Um tom de amarelo/dourado
        padding: 20,
        alignItems: 'center',
        gap: 20, // Espaço entre o título, a imagem e os botões
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 8,
        width: 280, // Uma largura fixa para o card
    },

    CardCadastro_title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },

    CardCadastro_image: {
        width: 180,
        height: 180,
        // A imagem no design tem um fundo branco próprio
        backgroundColor: '#fff', 
        borderRadius: 10,
    },

    CardCadastro_buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around', // Espaça os botões
        width: '100%',
    },

    // Um estilo base para os botões (tamanho, borda)
    CardCadastro_buttonBase: {
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    // Cor específica do botão de editar
    CardCadastro_buttonEdit: {
        backgroundColor: '#1E40AF', // Azul escuro
    },

    // Cor específica do botão de deletar
    CardCadastro_buttonDelete: {
        backgroundColor: '#DC2626', // Vermelho
    },

    // Estilo dos ícones DENTRO dos botões
    CardCadastro_buttonIcon: {
        width: 24,
        height: 24,
        // IMPORTANTE: Isso torna seus ícones (buttonEdit/buttonDelete) brancos!
        tintColor: '#FFFFFF', 
    },

})
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Styles } from "./styles";

type typeButton = {
  onPress: () => void;
};

type CardCadastroProps = {
    title: string;
    imageSource: any; // 'any' é mais fácil para lidar com require()
    onEdit: () => void;
    onDelete: () => void;
};

export function CardPequeno({ onPress }: typeButton) {
    return(
        // Estilo do container atualizado
        <TouchableOpacity style={Styles.CardPequeno_container} onPress={onPress} activeOpacity={0.7}>
            
            {/* Estilo do título atualizado */}
            <Text style={Styles.CardPequeno_titleText}>Volante</Text>
            
            <Image
                // Estilo da imagem atualizado
                style={Styles.CardPequeno_cardImage} 
                source={require('@/src/assets/images/volante.png')}
                resizeMode="contain"
            />
            
            {/* Estilo da caixa de distância atualizado */}
            <View style={Styles.CardPequeno_distanceBox}>
                {/* Estilo do texto da distância atualizado */}
                <Text style={Styles.CardPequeno_distanceText}>3.2 km de você</Text>
            </View>
        </TouchableOpacity>
    )
}

export function CardGrande() {
    return (
        <View style={Styles.CardGrande_container}>
            {/* Título */}
            <Text style={Styles.CardGrande_h2}>Volante Mercedes Mb 430mm Pequeno 608 710 1620 1935</Text>

            {/* Container para as 2 Imagens do Produto */}
            <View style={Styles.CardGrande_productImagesContainer}>
                <Image
                    style={Styles.CardGrande_productImage}
                    source={require('@/src/assets/images/volante.png')}
                    resizeMode="contain"
                />
                <Image
                    style={Styles.CardGrande_productImage}
                    // Assumindo que a segunda imagem seja diferente
                    source={require('@/src/assets/images/volante.png')} 
                    resizeMode="contain"
                />
            </View>

            {/* Seção de Avaliação (Faltando) */}
            <View style={Styles.CardGrande_ratingContainer}>
                <Text style={Styles.CardGrande_ratingText}>Avalie esse produto: </Text>
                {/* Você pode usar ícones ou emojis de estrela aqui */}
                <Text style={Styles.CardGrande_ratingStars}>★★☆☆☆</Text>
                <Text style={Styles.CardGrande_ratingCount}> (34)</Text>
            </View>

            {/* Banner de Distância (Corrigido) */}
            <View style={Styles.CardGrande_distanceBanner}>
                <Text style={Styles.CardGrande_distanceBannerText}>Este produto está a 3.2 KM de você!</Text>
            </View>

            {/* Informações da Loja */}
            <View style={Styles.CardGrande_infoContainer}>
                <Text style={Styles.CardGrande_sectionTitle}>Informações da loja:</Text>
                <View style={Styles.CardGrande_infoRow}>
                    <Text style={Styles.CardGrande_infoLabel}>Razão Social:</Text>
                    <Text style={Styles.CardGrande_infoValue}> ARCOS DOURADOS COMERCIO DE ALIMENTOS SA</Text>
                </View>
                <View style={Styles.CardGrande_infoRow}>
                    <Text style={Styles.CardGrande_infoLabel}>Nome Fantasia:</Text>
                    <Text style={Styles.CardGrande_infoValue}> Pedro Paulo</Text>
                </View>
                <View style={Styles.CardGrande_infoRow}>
                    <Text style={Styles.CardGrande_infoLabel}>Telefone:</Text>
                    <Text style={Styles.CardGrande_infoValue}> (11) 4196-9800</Text>
                </View>
                <View style={Styles.CardGrande_infoRow}>
                    <Text style={Styles.CardGrande_infoLabel}>Celular:</Text>
                    <Text style={Styles.CardGrande_infoValue}> (11) 4196-9800</Text>
                </View>
            </View>

            {/* Imagem do Mapa (Corrigido) */}
            <Image
                style={Styles.CardGrande_mapImage}
                source={require('@/src/assets/images/maps.png')}
                resizeMode="cover" // Cover ou stretch fica melhor para mapas
            />

            {/* Informações do Endereço */}
            <View style={Styles.CardGrande_infoContainer}>
                <Text style={Styles.CardGrande_sectionTitle}>Informações do endereço:</Text>
                <View style={Styles.CardGrande_infoRow}>
                    <Text style={Styles.CardGrande_infoLabel}>CEP:</Text>
                    <Text style={Styles.CardGrande_infoValue}> 06785050</Text>
                </View >
                <View style={Styles.CardGrande_infoRow}>
                    <Text style={Styles.CardGrande_infoLabel}>Rua:</Text>
                    <Text style={Styles.CardGrande_infoValue}> Rua Antônio Marcos Torres</Text>
                </View >
                {/* ... (Restante dos campos de endereço seguem o mesmo padrão) ... */}
                <View style={Styles.CardGrande_infoRow}>
                    <Text style={Styles.CardGrande_infoLabel}>Estado:</Text>
                    <Text style={Styles.CardGrande_infoValue}> SP</Text>
                </View>
            </View>

        </View>
    )
}

export function CardCadastro({ title, imageSource, onEdit, onDelete }: CardCadastroProps) {
    return (
        // 1. Aplicando o estilo do card (fundo, borda, sombra)
        <View style={Styles.CardCadastro_container}>
            
            {/* 2. Estilo do Título (usando a prop 'title') */}
            <Text style={Styles.CardCadastro_title}>{title}</Text>
            
            <Image
                style={Styles.CardCadastro_image} // 3. Estilo para a Imagem (tamanho)
                source={imageSource} // Usando a prop 'imageSource'
                resizeMode="contain"
            />
            
            {/* 4. Container para alinhar os botões lado a lado */}
            <View style={Styles.CardCadastro_buttonContainer}>
                
                {/* 5. Botão de Editar (Azul) */}
                <TouchableOpacity 
                    // Combina um estilo base + a cor específica
                    style={[Styles.CardCadastro_buttonBase, Styles.CardCadastro_buttonEdit]} 
                    onPress={onEdit} 
                    activeOpacity={0.7}
                >
                    <Image
                        source={require('@/src/assets/images/buttonEdit.png')}
                        // 6. Estilo do Ícone (branco)
                        style={Styles.CardCadastro_buttonIcon}
                        resizeMode="contain"
                    />
                </TouchableOpacity>

                {/* 7. Botão de Deletar (Vermelho) */}
                <TouchableOpacity 
                    style={[Styles.CardCadastro_buttonBase, Styles.CardCadastro_buttonDelete]} 
                    onPress={onDelete} 
                    activeOpacity={0.7}
                >
                    <Image
                        source={require('@/src/assets/images/buttonDelete.png')}
                        style={Styles.CardCadastro_buttonIcon}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export function CardCadastroLoja({ onPress }: typeButton){
    return(
        // 1. Aplicando o estilo do card (borda vermelha, fundo branco)
        <View style={Styles.containerCardCadastroLoja}> 
            
            {/* 2. Estilo do Título */}
            <Text style={Styles.cardCadastroLojaTitle}>Volante</Text>
            
            <Image
                style={Styles.cardCadastroLojaImage} // 3. Estilo para a Imagem (tamanho)
                source={require('@/src/assets/images/volante.png')}
                resizeMode="contain"
            />
            
            {/* 4. Estilo do Botão (verde) */}
            <TouchableOpacity 
                style={Styles.cardCadastroLojaVincularButton} 
                onPress={onPress} 
                activeOpacity={0.7}
            >
                {/* 5. Estilo do Texto do Botão (branco) */}
                <Text style={Styles.cardCadastroLojaVincularButtonText}>Vincular</Text>
            </TouchableOpacity>
        </View>
    )
}
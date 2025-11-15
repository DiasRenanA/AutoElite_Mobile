import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from "react-native";
import { Styles } from "./styles";

type typeButton = {
  onPress: () => void;
};

type CardPequenoProps = {
    onPress: () => void;
    title: string;
    imageSource: ImageSourcePropType;
    distance: string;
};

type CardCadastroProps = {
    title: string;
    imageSource: any;
    onEdit: () => void;
    onDelete: () => void;
};

export function CardPequeno({ onPress, title, imageSource, distance }: CardPequenoProps) {
    return(
        <TouchableOpacity style={Styles.CardPequeno_container} onPress={onPress} activeOpacity={0.7}>
            
            <Text style={Styles.CardPequeno_titleText}>{title}</Text>
            
            <Image
                style={Styles.CardPequeno_cardImage} 
                source={imageSource}
                resizeMode="contain"
            />
            
            <View style={Styles.CardPequeno_distanceBox}>
                <Text style={Styles.CardPequeno_distanceText}>{distance}</Text>
            </View>
        </TouchableOpacity>
    )
}

export function CardGrande() {
    return (
        <View style={Styles.CardGrande_container}>
            <Text style={Styles.CardGrande_h2}>Volante Mercedes Mb 430mm Pequeno 608 710 1620 1935</Text>
            <View style={Styles.CardGrande_productImagesContainer}>
                <Image
                    style={Styles.CardGrande_productImage}
                    source={require('@/src/assets/images/volante.png')}
                    resizeMode="contain"
                />
                <Image
                    style={Styles.CardGrande_productImage}
                    source={require('@/src/assets/images/volante.png')} 
                    resizeMode="contain"
                />
            </View>

            <View style={Styles.CardGrande_ratingContainer}>
                <Text style={Styles.CardGrande_ratingText}>Avalie esse produto: </Text>
                <Text style={Styles.CardGrande_ratingStars}>★★☆☆☆</Text>
                <Text style={Styles.CardGrande_ratingCount}> (34)</Text>
            </View>

            <View style={Styles.CardGrande_distanceBanner}>
                <Text style={Styles.CardGrande_distanceBannerText}>Este produto está a 3.2 KM de você!</Text>
            </View>

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

            <Image
                style={Styles.CardGrande_mapImage}
                source={require('@/src/assets/images/maps.png')}
                resizeMode="cover"
            />

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
        <View style={Styles.CardCadastro_container}>
            
            <Text style={Styles.CardCadastro_title}>{title}</Text>
            
            <Image
                style={Styles.CardCadastro_image} 
                source={imageSource} 
                resizeMode="contain"
            />
            
            <View style={Styles.CardCadastro_buttonContainer}>
                
                <TouchableOpacity 
                    style={[Styles.CardCadastro_buttonBase, Styles.CardCadastro_buttonEdit]} 
                    onPress={onEdit} 
                    activeOpacity={0.7}
                >
                    <Image
                        source={require('@/src/assets/images/buttonEdit.png')}
                        style={Styles.CardCadastro_buttonIcon}
                        resizeMode="contain"
                    />
                </TouchableOpacity>

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
        <View style={Styles.containerCardCadastroLoja}> 
            
            <Text style={Styles.cardCadastroLojaTitle}>Volante</Text>
            
            <Image
                style={Styles.cardCadastroLojaImage} 
                source={require('@/src/assets/images/volante.png')}
                resizeMode="contain"
            />
            
            <TouchableOpacity 
                style={Styles.cardCadastroLojaVincularButton} 
                onPress={onPress} 
                activeOpacity={0.7}
            >
                <Text style={Styles.cardCadastroLojaVincularButtonText}>Vincular</Text>
            </TouchableOpacity>
        </View>
    )
}
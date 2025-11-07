import { Image, Text, TouchableOpacity, View } from "react-native";
import { Styles } from "./styles";

type typeButton = {
  onPress: () => void;
};

export function CardPequeno({ onPress }: typeButton) {
    return(
        <TouchableOpacity style={Styles.containerCardPequeno} onPress={onPress} activeOpacity={0.7}>
            <Text>Volante</Text>
            <Image
                source={require('@/src/assets/images/volante.png')}
                resizeMode="contain"
            />
            <View style={Styles.boxText}>
                <Text style={{color:'#fff', fontSize: 15}}>3.2 km de você</Text>
            </View>
        </TouchableOpacity>
    )
}

export function CardGrande() {
    return(
        <View style={Styles.containerCardGrande}>
            <Text style={Styles.h2}>Volante Mercedes Mb 430mm Pequeno 608 710 1620 1935</Text>
            <Image
                source={require('@/src/assets/images/volante.png')}
                resizeMode="contain"
            />
            <View style={Styles.boxText}>
                <Text style={{color:'#fff', fontSize: 15}}>Este produto está a 3.2 KM de você!</Text>
            </View>
            <View style={Styles.boxTextCardGrandeContainer}>
                <Text>Informações da loja:</Text>
                <View style={Styles.boxTextCardGrande}>
                    <Text>Razão Social:</Text><Text> ARCOS DOURADOS COMERCIO DE ALIMENTOS SA</Text>
                </View>
                <View style={Styles.boxTextCardGrande}>
                    <Text>Nome Fantasia:</Text><Text> Pedro Paulo</Text>
                </View>
                <View style={Styles.boxTextCardGrande}>
                    <Text>Telefone:</Text><Text>(11) 4196-9800</Text>
                </View>
                <View style={Styles.boxTextCardGrande}>
                    <Text>Celular:</Text><Text>(11) 4196-9800</Text>
                </View>
            </View>
            <Image
                source={require('@/src/assets/images/maps.png')}
                resizeMode="contain"
            />
            <View style={Styles.boxTextCardGrandeContainer}>
                <Text>Informações do endereço:</Text>
                <View style={Styles.boxTextCardGrande}>
                    <Text>CEP:</Text><Text> 06785050</Text>
                </View >
                <View style={Styles.boxTextCardGrande}>
                    <Text>Rua:</Text><Text> Rua Antônio Marcos Torres</Text>
                </View >
                <View style={Styles.boxTextCardGrande}>
                    <Text>Número:</Text><Text>105</Text>
                </View>
                <View style={Styles.boxTextCardGrande}>
                    <Text>Complemento:</Text><Text>Casa</Text>
                </View>
                <View style={Styles.boxTextCardGrande}>
                    <Text>Bairro:</Text><Text>Jardim Scândia</Text>
                </View>
                <View style={Styles.boxTextCardGrande}>
                    <Text>Cidade:</Text><Text>Taboão da Serra</Text>
                </View>
                <View style={Styles.boxTextCardGrande}>
                    <Text>Estado:</Text><Text>SP</Text>
                </View>
            </View>
        </View>
    )
}

export function CardCadastro({ onPress }: typeButton){
    return(
        <View>
            <Text>Volante</Text>
            <Image
                source={require('@/src/assets/images/volante.png')}
                resizeMode="contain"
            />
            <View>
                <TouchableOpacity style={Styles.containerCardPequeno} onPress={onPress} activeOpacity={0.7}>
                    <Image
                        source={require('@/src/assets/images/buttonEdit.png')}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
                <TouchableOpacity style={Styles.containerCardPequeno} onPress={onPress} activeOpacity={0.7}>
                    <Image
                        source={require('@/src/assets/images/buttonDelete.png')}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>

        </View>

    )
}

export function CardCadastroLoja({ onPress }: typeButton){
    return(
        <View>
            <Text>Volante</Text>
            <Image
                source={require('@/src/assets/images/volante.png')}
                resizeMode="contain"
            />
            <View>
                <TouchableOpacity style={Styles.containerCardPequeno} onPress={onPress} activeOpacity={0.7}>
                    <Text>Vincular</Text>
                </TouchableOpacity>
            </View>

        </View>

    )
}
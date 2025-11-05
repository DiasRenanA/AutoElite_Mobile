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
        <View>
            
        </View>
    )
}



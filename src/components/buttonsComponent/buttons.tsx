import { Text, TouchableOpacity } from "react-native";
import { Styles } from "./styles";

type typeButton = {
  titulo: string;
  onPress: () => void;
};

export function ButtonConfirmar({ titulo, onPress }: typeButton) {
    return(
        <TouchableOpacity style={Styles.buttonConfirmar} onPress={onPress} activeOpacity={0.7}>
            <Text style={Styles.textButtonConfirmar}>{titulo}</Text>
        </TouchableOpacity>
    )
}

export function ButtonEnviar({ titulo, onPress }: typeButton) {
    return(
        <TouchableOpacity style={Styles.buttonEnviar} onPress={onPress} activeOpacity={0.7}>
            <Text style={Styles.textButtonEnviar}>{titulo}</Text>
        </TouchableOpacity>
    )
}



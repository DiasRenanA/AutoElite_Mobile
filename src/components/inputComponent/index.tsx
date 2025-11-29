import { useState } from "react";
import { Image, TextInput, View } from "react-native";
import { Styles } from "./style";

export const Input = ({ onChange }: { onChange: (texto: string) => void }) => {

    const [valor, setValor] = useState("");

    return (
        <View style={Styles.BoxInput}>
            <TextInput
                style={Styles.textInput}
                placeholder="Pesquisar..."
                placeholderTextColor="#aaa"
                underlineColorAndroid="transparent"
                value={valor}
                onChangeText={setValor} 
                onSubmitEditing={() => onChange(valor)} 
                returnKeyType="search" 
            />

            <Image
                source={require('@/src/assets/images/lupa_icon.png')}
                style={Styles.inputIcon}
                resizeMode="contain"
            />
        </View>
    )
}

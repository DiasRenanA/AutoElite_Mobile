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
                onChangeText={setValor} // só atualiza o texto no input
                onSubmitEditing={() => onChange(valor)} // só envia quando clicar ENTER
                returnKeyType="search" // muda o botão do teclado pra "Buscar"
            />

            <Image
                source={require('@/src/assets/images/lupa_icon.png')}
                style={Styles.inputIcon}
                resizeMode="contain"
            />
        </View>
    )
}

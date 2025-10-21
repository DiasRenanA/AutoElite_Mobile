import { TextInput, View } from "react-native"
import { Styles } from "./style"

export const Input = () => {
    return(
        <View>
            <TextInput
                style={Styles.textInput}
                placeholder="Pesquisar..."
                placeholderTextColor="#fff"
            />
        </View>
    )
}
import { Image, TextInput, View } from "react-native"
import { Styles } from "./style"

export const Input = () => {
    return(
        <View style={Styles.BoxInput}>
            <TextInput
                style={Styles.textInput}
                placeholder="Pesquisar..."
                placeholderTextColor="#aaa" 
                underlineColorAndroid="transparent"
            />
            <Image
                source={require('@/src/assets/images/lupa_icon.svg')}
                style={Styles.inputIcon} 
                resizeMode="contain"
            />
        </View>
    )
}
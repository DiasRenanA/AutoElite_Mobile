import { Image, TextInput, View } from "react-native"
import { Styles } from "./style"

export const Input = () => {
    return(
        <View>
            <View style={Styles.BoxInput}>
                <TextInput
                    style={Styles.textInput}
                    placeholder="Pesquisar..."
                    placeholderTextColor="#fff"
                    underlineColorAndroid="transparent"
                />
                <Image
                    source={require('@/src/assets/images/lupa_icon.svg')}
                    resizeMode="contain"
                />
            </View>
        </View>
    )
}
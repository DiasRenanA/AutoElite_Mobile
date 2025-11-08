import { Image, TextInput, View } from "react-native"
import { Styles } from "./style"

export const Input = () => {
    return(
        // Removi a <View> externa desnecessária
        <View style={Styles.BoxInput}>
            <TextInput
                style={Styles.textInput}
                placeholder="Pesquisar..."
                // Mudei para um cinza claro, #fff é muito forte para placeholder
                placeholderTextColor="#aaa" 
                underlineColorAndroid="transparent"
            />
            <Image
                // 🚨 IMPORTANTE: Use um arquivo .png
                source={require('@/src/assets/images/lupa_icon.svg')}
                // Adicionei um estilo para o ícone
                style={Styles.inputIcon} 
                resizeMode="contain"
            />
        </View>
    )
}
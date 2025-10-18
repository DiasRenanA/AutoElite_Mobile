import { Image, Text, View } from "react-native"
import { Styles } from "./styles"

export const Head = () => {
    return(
        <View style={Styles.container}>
            <Text style={Styles.texto}>ONG</Text>
            <Image
                style={Styles.logo}
                source={require('../../screens/images/Logo.png')}
            />
            <Text style={Styles.texto}>Jacira</Text>
        </View>
    )
}

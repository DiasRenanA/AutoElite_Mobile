import { Head } from "@/src/components/headComponent/head"
import { Input } from "@/src/components/inputComponent"
import { ScrollView, View } from "react-native"
import { Styles } from "./style"

export const InicioScreen = () => {
    return(
        <ScrollView>
            <View style={Styles.container}>
                <Head/>
                <Input/>
            </View>
        </ScrollView>
    )
}
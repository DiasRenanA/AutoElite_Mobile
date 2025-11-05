import { CardGrande } from "@/src/components/cardComponent/card"
import { Head } from "@/src/components/headComponent/head"
import { Rodape } from "@/src/components/rodapeComponent/rodape"
import { ScrollView, View } from "react-native"
import { Styles } from "./style"

export const ProductPageScreen = () => {
    return(
        <ScrollView>
            <View style={Styles.container}>
                <Head/>

                <CardGrande />

                <Rodape />
            </View>
        </ScrollView>
    )
}
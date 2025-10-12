import { Image, ScrollView, Text, View } from "react-native"
import { Styles } from "./style"

export const HomeScreen = () => {
    return(
        <ScrollView >
            <View style={Styles.container}>
                <Image
                    style={{width: '50%'}}
                    source={require('@/src/assets/images/Logo.svg')}
                />
                <View>
                    <View>
                        <Text>A plataforma que te conecta aos melhores serviços automotivos da sua região</Text>
                        <Text>Sendo <Text>Auto Elite</Text> você como cliente em busca de produtos ou serviços específicos, ou uma loja que deseja expandir sua presença online, estamos aqui para facilitar essa conexão.</Text>
                    </View>
                    <Image
                        style={{width: '50%'}}
                        source={require('@/src/assets/images/ImagemMecanico.svg')}
                    />
                </View>

            </View>

        </ScrollView>
    )
}
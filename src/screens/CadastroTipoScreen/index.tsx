import { router } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Styles } from "./style";

export const CadastroTipoScreen = () => {
    const irParaCadastroCliente = () => {
        router.push('/cadastroCliente');
    };

    const irParaCadastroLoja = () => {
        router.push('/cadastroLoja');
    };

    return(
        <ScrollView >
            <View style={Styles.container}>
                <Image
                    source={require('@/src/assets/images/LogoAutoElite.svg')}
                    resizeMode="contain"
                />
                <Text style={Styles.textNegrito}>Antes de começarmos, <br/> precisamos te conhecer!</Text>
                <Text style={Styles.textNegrito}>Você quer ser uma LOJA ou um <br/> CLIENTE Elite?</Text>

                <TouchableOpacity style={Styles.buttonCardRed} onPress={irParaCadastroCliente} activeOpacity={0.7}>
                    <Text style={Styles.textCardH1}>Um Cliente Elite</Text>
                    <Text style={Styles.textCard}>Pesquise por produtos ou serviços automotivos e descubra as lojas mais próximas que atendem às suas necessidades.</Text>
                    <Text style={Styles.textCard}>Tenha acesso às 10 principais lojas premium que se destacam em nossas buscas, garantindo qualidade e confiança.</Text>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.buttonCardBlack} onPress={irParaCadastroLoja} activeOpacity={0.7}>
                    <Text style={Styles.textCardH1}>Um Loja Elite</Text>
                    <Text style={Styles.textCard}>Amplie sua visibilidade online e alcance mais clientes cadastrando sua loja em nossa plataforma.</Text>
                    <Text style={Styles.textCard}>Torne-se uma <Text style={Styles.textYellow}>Loja Premium:</Text> Invista em destaque nas buscas e aumente suas oportunidades de negócio tornando-se uma loja premium.</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
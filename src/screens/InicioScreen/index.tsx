import { CardPequeno } from "@/src/components/cardComponent/card"
import { Head } from "@/src/components/headComponent/head"
import { Input } from "@/src/components/inputComponent"
import { Rodape } from "@/src/components/rodapeComponent/rodape"
import { router } from "expo-router"
import { Image, ScrollView, Text, View } from "react-native"
import { Styles } from "./style"

// 1. Defina os dados para o carrossel
// Você precisará adicionar as imagens correspondentes em 'assets'
const carouselData = [
    {
        id: '1',
        title: 'Volante',
        imageSource: require('@/src/assets/images/volante.png'),
        distance: '3.2 km de você'
    },
    {
        id: '2',
        title: 'Pneus',
        imageSource: require('@/src/assets/images/volante.png'), // Imagem de exemplo
        distance: '1.5 km de você'
    },
    {
        id: '3',
        title: 'Motor',
        imageSource: require('@/src/assets/images/volante.png'), // Imagem de exemplo
        distance: '5.0 km de você'
    },
    {
        id: '4',
        title: 'Óleo',
        imageSource: require('@/src/assets/images/volante.png'), // Imagem de exemplo
        distance: '2.1 km de você'
    }
];

export const InicioScreen = () => {
    const irParaProductPage = () =>{
        router.push('/productPage')
    }

    return(
        <ScrollView>
            <View style={Styles.container}>
                <Head/>
                <Input/>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {carouselData.map((item) => (
                        <CardPequeno
                            key={item.id}
                            onPress={irParaProductPage}
                            title={item.title}
                            imageSource={item.imageSource}
                            distance={item.distance}
                        />
                    ))}
                </ScrollView>

                <View style={Styles.containerBeneficios}>
                    <Image
                        source={require('@/src/assets/images/ImagemCasal.png')}
                        resizeMode="contain"
                    />
                    <View style={Styles.boxTextBeneficios}>
                        <Text style={Styles.text_H1}>Serviços automotivos na sua mão!</Text>
                        <Text style={Styles.text_padrao}>Conectamos você à loja ideal sem complicação. Com poucos toques no celular, encontre os melhores serviços e produtos automotivos perto de você. E para as lojas, essa é a chance de se destacar e alcançar mais clientes.</Text>
                        <Text style={Styles.text_padrao}>
                            • Tudo rápido, fácil e direto pelo seu celular. {`\n`}
                            • Encontre, compare e escolha o melhor serviço para você. {`\n`}
                            •<Text style={Styles.textDestacadosYellow}> Lojas premium</Text> sempre em destaque para mais visibilidade.
                        </Text>
                        <Text style={Styles.text_padrao}>Seu carro precisa, você encontra. Sua loja oferece, seu cliente acha. Simples assim!</Text>
                    </View>
                </View>

                <Rodape />
            </View>
        </ScrollView>
    )
}
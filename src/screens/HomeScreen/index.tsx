import { ButtonConfirmar } from "@/src/components/buttonsComponent/buttons";
import { router } from "expo-router";
import { Image, ScrollView, Text, View } from "react-native";
import { Styles } from "./style";

export const HomeScreen = () => {
    const irParaLogin = () => {
        router.push('/login');
    };

    return(
        <ScrollView >
            <View style={Styles.container}>
                <Image
                    source={require('@/src/assets/images/LogoAutoElite.svg')}
                    resizeMode="contain"
                />
                <View style={Styles.box_init}>
                    <View style={Styles.box_text_init}>
                        <Text style={Styles.text_negrito}>A plataforma que te conecta aos melhores serviços automotivos da sua região</Text>
                        <Text style={Styles.text_padrao}>Sendo <Text>Auto Elite</Text> você como cliente em busca de produtos ou serviços específicos, ou uma loja que deseja expandir sua presença online, estamos aqui para facilitar essa conexão.</Text>
                    </View>
                    <Image
                        source={require('@/src/assets/images/ImagemMecanico.png')}
                        resizeMode="contain"
                    />
                </View>

                <View style={Styles.containerButton}>
                    <ButtonConfirmar
                        titulo="SEJA ELITE"
                        onPress={irParaLogin}
                    />
                    <ButtonConfirmar
                        titulo="JA SOU ELITE"
                        onPress={irParaLogin}
                    />
                </View>

                <View style={Styles.containerBeneficios}>
                    <Image
                        source={require('@/src/assets/images/ImagemCasal.png')}
                        resizeMode="contain"
                    />
                    <View style={Styles.boxTextBeneficios}>
                        <Text style={Styles.text_H1}>Serviços automotivos na sua mão!</Text>
                        <Text style={Styles.text_padrao}>Conectamos você à loja ideal sem complicação. Com poucos toques no celular, encontre os melhores serviços e produtos automotivos perto de você. E para as lojas, essa é a chance de se destacar e alcançar mais clientes.</Text>
                        <Text style={Styles.text_padrao}>
                            • Tudo rápido, fácil e direto pelo seu celular. <br/>
                            • Encontre, compare e escolha o melhor serviço para você. <br/>
                            •<Text style={Styles.textDestacadosYellow}> Lojas premium</Text> sempre em destaque para mais visibilidade.
                        </Text>
                        <Text style={Styles.text_padrao}>Seu carro precisa, você encontra. Sua loja oferece, seu cliente acha. Simples assim!</Text>
                    </View>
                </View>

                <View style={Styles.containerBeneficios}>
                    <View style={Styles.boxTextBeneficios}>
                        <Text style={Styles.text_H1}>Rápido e Fácil!</Text>
                        <Text style={Styles.text_padrao}>Simples, rápido e eficiente! Seja para encontrar o melhor serviço automotivo ou para destacar sua loja, a Auto Elite conecta você ao que há de melhor no mercado.</Text>
                    </View>
                    <Image
                        source={require('@/src/assets/images/ImagemMulher.png')}
                        resizeMode="contain"
                    />
                </View>

                <View style={Styles.containerBeneficios}>
                    <Image
                        source={require('@/src/assets/images/ImagemGrupo.png')}
                        resizeMode="contain"
                    />
                    <View style={Styles.boxTextBeneficios}>
                        <Text style={Styles.text_H1}>Nosso Comprometimento Elite!</Text>
                        <Text style={Styles.text_padrao}>Na Auto Elite, nosso compromisso é conectar você aos melhores serviços automotivos com transparência, qualidade e praticidade. Trabalhamos para garantir que cada cliente encontre exatamente o que precisa, de forma rápida e segura.</Text>
                    </View>

                </View>
                <View style={Styles.text_end}>
                    <Text style={Styles.text_padrao}>
                        Nos dedicamos a oferecer uma experiência confiável, onde lojas e profissionais qualificados possam crescer e atender cada vez melhor. Acreditamos que um bom serviço faz a diferença, e por isso estamos sempre aprimorando nossa plataforma para entregar as melhores soluções para você e seu carro.
                    </Text>
                    <Text style={Styles.text_end_bold}>
                        Auto Elite – conectando você ao melhor do mundo automotivo.
                    </Text>
                </View>



            </View>
        </ScrollView>
    )
}
import { ButtonEnviar } from "@/src/components/buttonsComponent/buttons"
import { router } from "expo-router"
import { Image, ScrollView, Text, TextInput, View } from "react-native"
import { Styles } from "./style"

export const CadastroLojaScreen = () => {
    const proximo = () => {
        router.push('/cadastroEnderecoLoja')
    };
    //teste
    return(
        <ScrollView>
            <View style={Styles.container}>
                <Image
                    source={require('@/src/assets/images/LogoAutoElite.svg')}
                    resizeMode="contain"
                />
                <View style={Styles.containerRed}>
                    <Text style={Styles.textH1}>Cadastro Loja Elite</Text>

                    <View style={{display:'flex',gap:5}}>
                        <Text style={Styles.textLabel}>CNPJ:</Text>
                        <TextInput
                            style={Styles.textInput}
                            placeholder="CNPJ: (APENAS NÚMEROS)"
                            placeholderTextColor="#BFBFBF"
                        />
                    </View>
                    <View style={{display:'flex',gap:5}}>
                        <Text style={Styles.textLabel}>Nome Fantasia:</Text>
                        <TextInput
                            style={Styles.textInput}
                        />
                    </View>
                    <View style={{display:'flex',gap:5}}>
                        <Text style={Styles.textLabel}>Razão Social:</Text>
                        <TextInput
                            style={Styles.textInput}
                        />
                    </View>
                    <View style={{display:'flex',gap:5}}>
                        <Text style={Styles.textLabel}>Telefone:</Text>
                        <TextInput
                            style={Styles.textInput}
                        />
                    </View>
                    <View style={{display:'flex',gap:5}}>
                        <Text style={Styles.textLabel}>Celular:</Text>
                        <TextInput
                            style={Styles.textInput}
                        />
                    </View>
                    <ButtonEnviar 
                        titulo="Enviar"
                        onPress={proximo}
                    />

                </View>

            </View>
        </ScrollView>
    )
}
import { ButtonEnviar } from "@/src/components/buttonsComponent/buttons";
import { router } from "expo-router";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Styles } from "./style";

export const CadastroScreen = () => {
    const proximo = () => {
        router.push('/cadastroTipo');
    };

    const irParaLogin = () => {
        router.push('/login');
    };

    return(
        <ScrollView>
            <View style={Styles.container}>
            <Image
                source={require('@/src/assets/images/LogoAutoElite.svg')}
                resizeMode="contain"
            />
            <View style={Styles.containerRed}>
                <Text style={Styles.textH1}>Cadastro</Text>
                <View style={{display:'flex',gap:5}}>
                    <Text style={Styles.textLabel}>E-mail:</Text>
                    <TextInput
                        style={Styles.textInput}
                    />
                </View>
                <View style={{display:'flex',gap:5}}>
                    <Text style={Styles.textLabel}>Senha:</Text>
                    <TextInput
                        style={Styles.textInput}
                    />
                </View>
                <View style={{display:'flex',gap:5}}>
                    <Text style={Styles.textLabel}>Confirmação de Senha:</Text>
                    <TextInput
                        style={Styles.textInput}
                    />
                </View>
                <ButtonEnviar 
                    titulo="Cadastrar"
                    onPress={proximo}
                />
                <View style={{paddingTop: 20}}>
                    <TouchableOpacity style={{}} onPress={irParaLogin} activeOpacity={0.7}>
                        <Text style={Styles.boxText}>É Elite? Clique aqui!</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
        </ScrollView>
    )
}
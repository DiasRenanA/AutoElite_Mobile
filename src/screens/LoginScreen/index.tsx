import { ButtonEnviar } from "@/src/components/buttonsComponent/buttons";
import { router } from "expo-router";
import { Image, Text, TextInput, View } from "react-native";
import { Styles } from "./style";

export const LoginScreens = () => {
    const proximo = () => {
        router.push('/login');
    };
    return(
        <View style={Styles.container}>
            <Image
                source={require('@/src/assets/images/LogoAutoElite.svg')}
                resizeMode="contain"
            />
            <View style={Styles.containerRed}>
                <Text style={Styles.textH1}>Login</Text>
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
                <ButtonEnviar 
                    titulo="Entrar"
                    onPress={proximo}
                />
                <View style={{paddingTop: 20}}>
                    <Text style={Styles.boxText}>Esqueceu a senha?</Text>
                    <Text style={Styles.boxText}>Não tem login? Cadastre-se!</Text>
                </View>

            </View>

        </View>
    )
}

import { ButtonEnviar } from "@/src/components/buttonsComponent/buttons";
import { router } from "expo-router";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Styles } from "./style";

export const LoginScreens = () => {
    const proximo = () => {
        router.push('/login');
    };
    const irParaAdm = () => {
        router.push('/adminPanel');
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
                <TouchableOpacity style={{}} onPress={irParaAdm} activeOpacity={0.7}>
                    <Text>Admin</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}
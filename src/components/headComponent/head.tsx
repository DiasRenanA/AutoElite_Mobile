import { router } from "expo-router"
import { Image, Text, TouchableOpacity, View } from "react-native"
import { Styles } from "./styles"

export const Head = () => {
    const irParaInicio = () => {
         router.push('/inicio')
    } 

    const irParaPerfil = () => {
         router.push('/perfil')
    } 

    return(
       <View style={Styles.container}>
            <TouchableOpacity style={{}} onPress={irParaInicio} activeOpacity={0.7}>
                <Image
                    style={{width: 100}}
                    source={require('@/src/assets/images/LogoAutoElite.svg')}
                    resizeMode="contain"
                />
            </TouchableOpacity>

            <View style={Styles.containerButtons}>
                <TouchableOpacity style={Styles.button} activeOpacity={0.7}>
                    <Text style={Styles.textButton}>Sobre nós</Text>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.button} activeOpacity={0.7}>
                    <Text style={Styles.textButton}>Como funcionamos</Text>
                </TouchableOpacity> 

                <TouchableOpacity style={Styles.button} activeOpacity={0.7}>
                    <Text style={Styles.textButton}>Nosso Objetivo</Text>
                </TouchableOpacity> 

                <TouchableOpacity style={Styles.button} activeOpacity={0.7}>
                    <Text style={Styles.textButton}>Contatos</Text>
                </TouchableOpacity> 
            </View>

            <TouchableOpacity style={{}} onPress={irParaPerfil} activeOpacity={0.7}>
                <Image
                    source={require('@/src/assets/images/user_icon.svg')}
                    resizeMode="contain"
                />
            </TouchableOpacity>
            
        </View>
    )
}

export const HeadAdmLoja = () => {
    
    const irParaPerfil = () => {
        router.push('/perfilLoja') 
    } 

    const irParaAdminPanelLoja = () => {
        router.push('/adminPanelLoja') 
    } 

    return(
        <View style={Styles.containerAdmLoja}>
            <Image
                style={Styles.logo} 
                source={require('@/src/assets/images/LogoAutoElite.svg')}
                resizeMode="contain"
            />

            <TouchableOpacity onPress={irParaAdminPanelLoja} activeOpacity={0.7}>
                <Text style={Styles.containerAdmLojaText}>Produtos</Text> 
            </TouchableOpacity>

            <TouchableOpacity onPress={irParaPerfil} activeOpacity={0.7}>
                <Text style={Styles.containerAdmLojaText}>Perfil</Text>
            </TouchableOpacity>
        </View>
    )
}

export const HeadAdm = () => {

    return(
        <View style={Styles.containerAdmLoja}>
            <Image
                style={Styles.logo} 
                source={require('@/src/assets/images/LogoAutoElite.svg')}
                resizeMode="contain"
            />
        </View>
    )
}
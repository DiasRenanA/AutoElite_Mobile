import { router } from "expo-router"
import { Image, Text, TouchableOpacity, View } from "react-native"
import { Styles } from "./styles"

export const Head = () => {
    const irPara = () => {
         router.push('/inicio')
    } 

    const irParaPerfil = () => {
         router.push('/perfil')
    } 

    return(
       <View style={Styles.container}>
            <Image
                style={{width: 100}}
                source={require('@/src/assets/images/LogoAutoElite.svg')}
                resizeMode="contain"
            />

            <View style={Styles.containerButtons}>
                <TouchableOpacity style={Styles.button} onPress={irPara} activeOpacity={0.7}>
                    <Text style={Styles.textButton}>Sobre nós</Text>
                </TouchableOpacity>

                <TouchableOpacity style={Styles.button} onPress={irPara} activeOpacity={0.7}>
                    <Text style={Styles.textButton}>Como funcionamos</Text>
                </TouchableOpacity> 

                <TouchableOpacity style={Styles.button} onPress={irPara} activeOpacity={0.7}>
                    <Text style={Styles.textButton}>Nosso Objetivo</Text>
                </TouchableOpacity> 

                <TouchableOpacity style={Styles.button} onPress={irPara} activeOpacity={0.7}>
                    <Text style={Styles.textButton}>Contatos</Text>
                </TouchableOpacity> 
            </View>

            <TouchableOpacity style={Styles.button} onPress={irParaPerfil} activeOpacity={0.7}>
                <Image
                    source={require('@/src/assets/images/user_icon.svg')}
                    resizeMode="contain"
                />
            </TouchableOpacity>
            
        </View>
    )
}

export const HeadAdmLoja = () => {
    
    // Ajustei os nomes das funções para clareza
    const irParaMenu = () => {
        // router.push('/inicio') // ou '/menu'
    } 

    const irParaProdutos = () => {
        // router.push('/produtos') 
    } 

    return(
        <View style={Styles.containerAdmLoja}>
            {/* Logo na Esquerda */}
            <Image
                style={Styles.logo} // Aplicando estilo do StyleSheet
                source={require('@/src/assets/images/LogoAutoElite.svg')}
                resizeMode="contain"
            />

            <TouchableOpacity onPress={irParaMenu} activeOpacity={0.7}>
                {/* Texto alterado para "Menu" */}
                <Text style={Styles.containerAdmLojaText}>Menu</Text> 
            </TouchableOpacity>

            <TouchableOpacity onPress={irParaProdutos} activeOpacity={0.7}>
                <Text style={Styles.containerAdmLojaText}>Produtos</Text>
            </TouchableOpacity>
        </View>
    )
}
import { useAuth } from "@/src/contexts/AuthContext"; // 1. Importe o Contexto
import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Styles } from "./styles";

export const Head = () => {
    // 2. Pegue o userType do contexto
    const { userType } = useAuth();

    const irParaInicio = () => {
         router.push('/inicio')
    } 

    const irParaPerfil = () => {
        // Lógica simples: se for loja vai pro perfil de loja, se for cliente vai pro perfil de cliente
        if (userType === 'loja') {
            router.push('/perfilLoja');
        } else {
            router.push('/perfil');
        }
    } 
    
    const irParaAdminPanel = () => {
        router.push('/adminPanelLoja');
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

                {/* 3. RENDERIZAÇÃO CONDICIONAL: Só aparece se for LOJA */}
                {userType === 'loja' && (
                    <TouchableOpacity 
                        style={[Styles.button, { backgroundColor: '#FFD700' }]} // Exemplo: cor diferente para destaque
                        onPress={irParaAdminPanel} 
                        activeOpacity={0.7}
                    >
                        <Text style={[Styles.textButton, { color: '#000', fontWeight: 'bold' }]}>
                            Painel Loja
                        </Text>
                    </TouchableOpacity> 
                )}

                {/* Se NÃO for loja (ou seja, cliente ou visitante), mostra os outros botões normais se quiser */}
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
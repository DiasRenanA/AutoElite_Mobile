import { Head } from "@/src/components/headComponent/head";
import { router } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Styles } from "./style";

export const PerfilScreen = () => {
    const proximo = () => {
        router.push('/cadastroTipo');
    };

    const sair = () => {
        router.push('/');
    };
    return(
        <ScrollView contentContainerStyle={Styles.container}>
            <Head />

            <Text style={Styles.h1}>No menu, você edita suas principais informações.</Text>
            
            <View style={Styles.boxCadastro}>
                <Text style={Styles.cardTitle}>Informações cadastrais:</Text>
                
                <View style={Styles.boxText}>
                    <Text style={Styles.label}>CPF:</Text>
                    <Text style={Styles.value}>424.323.542-44</Text>
                </View>
                <View style={Styles.boxText}>
                    <Text style={Styles.label}>Nome Completo:</Text>
                    <Text style={Styles.value}>Gustavo Sousa de Melo</Text>
                </View>
                <View style={Styles.boxText}>
                    <Text style={Styles.label}>Telefone:</Text>
                    <Text style={Styles.value}>(11) 98345-2345</Text>
                </View>
                <View style={Styles.boxText}>
                    <Text style={Styles.label}>Data de Nascimento:</Text>
                    <Text style={Styles.value}>23/03/1998</Text>
                </View>
                <View style={Styles.boxText}>
                    <Text style={Styles.label}>Gênero:</Text>
                    <Text style={Styles.value}>Masculino</Text>
                </View >
                
                <TouchableOpacity style={Styles.buttonEdit} onPress={proximo} activeOpacity={0.7}>
                    <Text style={Styles.buttonText}>Editar</Text>
                </TouchableOpacity>
            </View>

            <View style={Styles.boxCadastro}>
                <Text style={Styles.cardTitle}>Informações de endereço:</Text>

                <View style={Styles.boxText}>
                    <Text style={Styles.label}>CEP:</Text>
                    <Text style={Styles.value}>06840-160</Text>
                </View>
                <View style={Styles.boxText}>
                    <Text style={Styles.label}>RUA:</Text>
                    <Text style={Styles.value}>Rua Sebastião Francisco dos Santos</Text>
                </View>
                <View style={Styles.boxText}>
                    <Text style={Styles.label}>Número:</Text>
                    <Text style={Styles.value}>360</Text>
                </View>
                <View style={Styles.boxText}>
                    <Text style={Styles.label}>Complemento:</Text>
                    <Text style={Styles.value}>Casa 2</Text>
                </View>
                <View style={Styles.boxText}>
                    <Text style={Styles.label}>Bairro:</Text>
                    <Text style={Styles.value}>São Judas</Text>
                </View>
                <View style={Styles.boxText}>
                    <Text style={Styles.label}>Cidade:</Text>
                    <Text style={Styles.value}>São Paulo</Text>
                </View>
                <View style={Styles.boxText}>
                    <Text style={Styles.label}>UF:</Text>
                    <Text style={Styles.value}>SP</Text>
                </View>
                
                <TouchableOpacity style={Styles.buttonEdit} onPress={proximo} activeOpacity={0.7}>
                    <Text style={Styles.buttonText}>Editar</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={Styles.logoutButton} onPress={sair} activeOpacity={0.7}>
                <Text style={Styles.logoutButtonText}>Sair</Text>
            </TouchableOpacity>

            <Text style={Styles.footerText}>
                Auto Elite – conectando você ao melhor do mundo automotivo.
            </Text>
        </ScrollView>
    )
}
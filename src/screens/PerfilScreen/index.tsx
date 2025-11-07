import { router } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Styles } from "./style";

export const PerfilScreen = () => {
    const proximo = () => {
        router.push('/cadastroTipo');
    };
    return(
        <ScrollView>
            <View style={Styles.container}>
                <Text style={Styles.h1}>No menu, você edita suas principais informações.</Text>
            
                <View style={Styles.boxCadastro}>
                    <Text>Informações cadastrais:</Text>
                    <View style={Styles.boxText}>
                        <Text>CPF:</Text>
                        <Text>424.323.542-44</Text>
                    </View>
                    <View style={Styles.boxText}>
                        <Text>Nome Completo:</Text>
                        <Text>Gustavo Sousa de Melo</Text>
                    </View>
                    <View style={Styles.boxText}>
                        <Text>Telefone:</Text>
                        <Text>(11)  98345-2345</Text>
                    </View>
                    <View style={Styles.boxText}>
                        <Text>Data de Nascimento:</Text>
                        <Text>23/03/1998</Text>
                    </View>
                    <View style={Styles.boxText}>
                        <Text>Gênero:</Text>
                        <Text>Masculino</Text>
                    </View >
                    <TouchableOpacity style={Styles.buttonEdit} onPress={proximo} activeOpacity={0.7}>
                        <Text>Editar</Text>
                    </TouchableOpacity>
                </View>
                <View style={Styles.boxCadastro}>
                    <Text>Informações de endereço:</Text>
                    <View style={Styles.boxText}>
                        <Text>CEP:</Text>
                        <Text>06840-160</Text>
                    </View>
                    <View style={Styles.boxText}>
                        <Text>RUA:</Text>
                        <Text>Rua Sebastião Francisco dos Santos</Text>
                    </View>
                    <View style={Styles.boxText}>
                        <Text>Número:</Text>
                        <Text>360</Text>
                    </View>
                    <View style={Styles.boxText}>
                        <Text>Complemento:</Text>
                        <Text>Casa 2</Text>
                    </View>
                    <View style={Styles.boxText}>
                        <Text>Bairro:</Text>
                        <Text>São Judas</Text>
                    </View>
                    <View style={Styles.boxText}>
                        <Text>Cidade:</Text>
                        <Text>São Paulo</Text>
                    </View>
                    <View style={Styles.boxText}>
                        <Text>UF:</Text>
                        <Text>SP</Text>
                    </View>
                    <TouchableOpacity style={Styles.buttonEdit} onPress={proximo} activeOpacity={0.7}>
                        <Text>Editar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}
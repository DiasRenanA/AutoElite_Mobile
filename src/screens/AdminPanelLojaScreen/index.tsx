import { CardCadastroLoja } from "@/src/components/cardComponent/card";
import { Input } from "@/src/components/inputComponent";
import { router } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Styles } from "./style";

export const AdminPanelLojaScreen = () => {
    const proximo = () => {
        router.push('/login');
    };

    return(
        <ScrollView>
            <View style={Styles.container}>
                <Input />
                <TouchableOpacity style={Styles.buttonCadastrar} onPress={proximo} activeOpacity={0.7}>
                    <Text style={{color: '#fff'}}>Cadastrar Produto</Text>
                </TouchableOpacity>
                <CardCadastroLoja
                    onPress={proximo}
                />
            </View>
        </ScrollView>
    )
}
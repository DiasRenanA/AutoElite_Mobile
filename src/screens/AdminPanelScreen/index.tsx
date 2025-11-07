import { CardCadastro } from "@/src/components/cardComponent/card";
import { Input } from "@/src/components/inputComponent";
import { router } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Styles } from "./style";

export const AdminPanelScreens = () => {
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
                <CardCadastro
                    onPress={proximo}
                />
            </View>
        </ScrollView>
    )
}
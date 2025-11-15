import { CardCadastroLoja } from "@/src/components/cardComponent/card";
import { HeadAdmLoja } from "@/src/components/headComponent/head";
import { Input } from "@/src/components/inputComponent";
import { router } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Styles } from "./style";

export const AdminPanelLojaScreen = () => {
    const irParaCadastrarProduto = () => {
        router.push('/cadastrarProduto');
    };

    return(
        <ScrollView>
            <View style={Styles.container}>
                <HeadAdmLoja />
                <Input />
                <TouchableOpacity style={Styles.buttonCadastrar} onPress={irParaCadastrarProduto} activeOpacity={0.7}>
                    <Text style={{color: '#fff'}}>Cadastrar Produto</Text>
                </TouchableOpacity>
                <CardCadastroLoja
                    onPress={irParaCadastrarProduto}
                />
            </View>
        </ScrollView>
    )
}
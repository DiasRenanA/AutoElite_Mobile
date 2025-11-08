import { CardCadastro } from "@/src/components/cardComponent/card";
import { HeadAdmLoja } from "@/src/components/headComponent/head";
import { Input } from "@/src/components/inputComponent";
import { router } from "expo-router";
import { FlatList, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Styles } from "./style";

export const AdminPanelScreens = () => {
    const proximo = () => {
        router.push('/login');
    };
    const irParaCadastrarProduto = () => {
        router.push('/cadastrarProduto');
    };

    const mockProdutos = [
    { id: '1', title: 'Pneu', image: require('@/src/assets/images/volante.png') },
    { id: '2', title: 'Volante', image: require('@/src/assets/images/volante.png') },
    { id: '3', title: 'Farol', image: require('@/src/assets/images/volante.png') },
    // Adicione mais se precisar...
];
const handleEditarProduto = () => {
        console.log("EDITAR:");
        // Aqui você chamaria a navegação para a tela de edição
        // Ex: navigation.navigate('EditarProduto', { id: produto.id });
        // O seu 'proximo' provavelmente faria algo assim.
    };

    const handleDeletarProduto = () => {
        console.log("DELETAR:");
        // Aqui você implementaria a lógica para deletar o item
    };

    return(
        <ScrollView>
            <View style={Styles.container}>
                <HeadAdmLoja />
                <Input />
                <TouchableOpacity style={Styles.buttonCadastrar} onPress={irParaCadastrarProduto} activeOpacity={0.7}>
                    <Text style={{color: '#fff'}}>Cadastrar Produto</Text>
                </TouchableOpacity>
<FlatList
            data={mockProdutos} // 1. Passa os dados mocados
            keyExtractor={(item) => item.id} // 2. Define uma chave única
            
            // 3. Renderiza cada item da lista usando seu CardCadastro
            renderItem={({ item }) => (
                <CardCadastro
                    title={item.title}
                    imageSource={item.image}
                    onEdit={() => handleEditarProduto()}
                    onDelete={() => handleDeletarProduto()}
                />
            )}
            
        />
            </View>
        </ScrollView>
    )
}
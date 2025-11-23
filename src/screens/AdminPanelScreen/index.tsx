import { CardCadastro } from "@/src/components/cardComponent/card";
import { HeadAdm } from "@/src/components/headComponent/head";
import { router } from "expo-router";
import { FlatList, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Styles } from "./style";

export const AdminPanelScreens = () => {
    
    
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
    };

    const handleDeletarProduto = () => {
        console.log("DELETAR:");
    };

    return(
        <ScrollView>
            <View style={Styles.container}>
                <HeadAdm />
                <TouchableOpacity style={Styles.buttonCadastrar} onPress={irParaCadastrarProduto} activeOpacity={0.7}>
                    <Text style={{color: '#fff'}}>Cadastrar Produto</Text>
                </TouchableOpacity>
            <FlatList
            data={mockProdutos} 
            keyExtractor={(item) => item.id} 
            
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
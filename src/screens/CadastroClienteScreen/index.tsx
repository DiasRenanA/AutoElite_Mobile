import { ButtonEnviar } from "@/src/components/buttonsComponent/buttons";
import { Picker } from '@react-native-picker/picker';
import { router } from "expo-router";
import { Image, ScrollView, Text, TextInput, View } from "react-native";
import { Styles } from "./style";

export const CadastroClienteScreen = () => {


    const proximo = () => {
        router.push('/cadastroEnderecoCliente')
    };

    return(
        <ScrollView>
            <View style={Styles.container}>
                <Image
                    source={require('@/src/assets/images/LogoAutoElite.svg')}
                    resizeMode="contain"
                />
                <View style={Styles.containerRed}>
                    <Text style={Styles.textH1}>Cadastro Cliente Elite</Text>

                    <View style={{display:'flex',gap:5}}>
                        <Text style={Styles.textLabel}>CPF:</Text>
                        <TextInput
                            style={Styles.textInput}
                            placeholder="CPF: (APENAS NÚMEROS)"
                            placeholderTextColor="#BFBFBF"
                        />
                    </View>
                    <View style={{display:'flex',gap:5}}>
                        <Text style={Styles.textLabel}>Nome Completo:</Text>
                        <TextInput
                            style={Styles.textInput}
                        />
                    </View>
                    <View style={{display:'flex',gap:5}}>
                        <Text style={Styles.textLabel}>Telefone:</Text>
                        <TextInput
                            style={Styles.textInput}
                        />
                    </View>
                    <View style={{display:'flex',gap:5}}>
                        <Text style={Styles.textLabel}>Gênero:</Text>
                        <Picker style={Styles.textPicker}>
                            <Picker.Item color="#BFBFBF" label="Selecione..." value="null" />
                            <Picker.Item label="Masculino" value="1" />
                            <Picker.Item label="Feminino" value="2" />
                            <Picker.Item label="Outros" value="0" />
                        </Picker>
                    </View>
                    <View style={{display:'flex',gap:5}}>
                        <Text style={Styles.textLabel}>Possui Carro:</Text>
                        <Picker style={Styles.textPicker}>
                            <Picker.Item color="#BFBFBF" label="Selecione..." value="null" />
                            <Picker.Item label="Sim" value="1" />
                            <Picker.Item label="Não" value="0" />
                        </Picker>
                    </View>
                    <ButtonEnviar 
                        titulo="Enviar"
                        onPress={proximo}
                    />
                </View>

            </View>
        </ScrollView>
    )
}
import { ButtonEnviar } from "@/src/components/buttonsComponent/buttons";
import { useAuth } from "@/src/contexts/AuthContext";
import * as Location from "expo-location";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, Alert, Image, ScrollView, Text, TextInput, View } from "react-native";
import { Styles } from "./style";



export const CadastroEnderecoLojaScreen = () => {

    const { token, clientToken, apiUrl } = useAuth(); 
    const [endereco, setEndereco] = useState<string | null>(null);

    const [cep, setCep] = useState('');
    const [rua, setRua] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');
    const [nmr, setNmr] = useState('');
    const [complemento, setComplemento] = useState('');
    
    const [isLoading, setIsLoading] = useState(false);
    const [erro, setErro] = useState<string | null>(null);

    const handleSaveAddressAndFinalize = async () => {
        setErro(null);

        if (isLoading || !token || !clientToken) {
            Alert.alert('Sessão Expirada', 'Tokens não encontrados. Reinicie o cadastro.');
            router.replace('/(public)/cadastro');
            return;
        }

        if (!cep || !rua || !bairro || !cidade || !uf || !nmr) {
            setErro('Preencha todos os campos obrigatórios.');
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch(apiUrl + 'enderecos/criar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'tokendados': clientToken, 
                    'Authorization': `Bearer ${token}` 
                },
                body: JSON.stringify({
                    cep: cep,
                    rua: rua,
                    bairro: bairro,
                    cidade: cidade,
                    uf: uf,
                    nmr: Number(nmr), 
                    complemento: complemento
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Não foi possível salvar o endereço da loja.');
            }
            Alert.alert("Sucesso!", "Loja cadastrada com sucesso! Entrando...");
            router.replace('/(private)/inicio');

        } catch (error: any) {
            setErro(error.message || 'Erro ao conectar com o servidor.');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
    (async () => {
      // 1. Pede permissão
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setEndereco("Permissão de localização negada!");
        return;
      }

      // 2. Pega latitude/longitude
      let location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      console.log("LAT:", latitude, "LON:", longitude);

    try {
      const response = await fetch(
        `https://us1.locationiq.com/v1/reverse?key=pk.f28bd3f0d377a4ad38ef01a18db59184&lat=${latitude}&lon=${longitude}&format=json&`
      );

      const data = await response.json();
      console.log(data)
      const partes = data.display_name.split(",");

    setCep(data.address.postcode)
    setRua(partes[0]);
    setBairro(partes[1]);
    setCidade(partes[2]);
    setUf('SP');

    } catch (e) {
      console.log("Erro ViaCEP:", e);
    }
    })();
  }, []);

    return(
        <ScrollView>
            <View style={Styles.container}>
                <Image
                    source={require('@/src/assets/images/LogoAutoElite.png')}
                    resizeMode="contain"
                />
                <View style={Styles.containerRed}>
                    <Text style={Styles.textH1}>Endereço da Loja</Text>

                    <View style={{display:'flex',gap:5}}>
                        <Text style={Styles.textLabel}>CEP:</Text>
                        <TextInput
                            style={Styles.textInput}
                            placeholder="CEP (APENAS NÚMEROS)"
                            placeholderTextColor="#BFBFBF"
                            value={cep}
                            onChangeText={setCep}
                            keyboardType="number-pad"
                        />
                    </View>
                    <View style={{display:'flex',gap:5}}>
                        <Text style={Styles.textLabel}>Rua:</Text>
                        <TextInput
                            style={Styles.textInput}
                            value={rua}
                            onChangeText={setRua}
                        />
                    </View>
                    <View style={{display:'flex',gap:5}}>
                        <Text style={Styles.textLabel}>Número:</Text>
                        <TextInput
                            style={Styles.textInput}
                            value={nmr}
                            onChangeText={setNmr}
                            keyboardType="number-pad"
                        />
                    </View>
                    <View style={{display:'flex',gap:5}}>
                        <Text style={Styles.textLabel}>Complemento:</Text>
                        <TextInput
                            style={Styles.textInput}
                            value={complemento}
                            onChangeText={setComplemento}
                        />
                    </View>
                    <View style={{display:'flex',gap:5}}>
                        <Text style={Styles.textLabel}>Bairro:</Text>
                        <TextInput
                            style={Styles.textInput}
                            value={bairro}
                            onChangeText={setBairro}
                        />
                    </View>
                    <View style={{display:'flex',gap:5}}>
                        <Text style={Styles.textLabel}>Cidade:</Text>
                        <TextInput
                            style={Styles.textInput}
                            value={cidade}
                            onChangeText={setCidade}
                        />
                    </View>
                    <View style={{display:'flex',gap:5}}>
                        <Text style={Styles.textLabel}>UF:</Text>
                        <TextInput
                            style={Styles.textInput}
                            value={uf}
                            onChangeText={setUf}
                            maxLength={2}
                            autoCapitalize="characters"
                        />
                    </View>

                    {erro && (
                        <Text style={{ color: 'red', textAlign: 'center', marginTop: 10 }}> 
                            {erro}
                        </Text>
                    )}

                    {isLoading ? (
                        <ActivityIndicator size="large" color="#000" style={{ marginVertical: 20 }} />
                    ) : (
                        <ButtonEnviar 
                            titulo="Finalizar Cadastro"
                            onPress={handleSaveAddressAndFinalize}
                        />
                    )}

                </View>
            </View>
        </ScrollView>
    )
}
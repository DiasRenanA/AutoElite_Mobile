import { Image, ScrollView } from "react-native"

export const HomeScreen = () => {
    return(
        <ScrollView>
            <Image
                style={{width: 200}}
                source={require('@/src/assets/images/Logo.svg')}
            />
        </ScrollView>
    )
}
import { View , Text, Pressable  } from "react-native";

export default function Page2({navigation}) {
    return (
        <View>
            <Text>Welcome In Page2</Text>
            <Pressable onPress={()=>navigation.navigate('about')}><Text>Navgate To About</Text></Pressable>
        </View>
    ) 
}
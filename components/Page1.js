import { View , Text, Pressable } from "react-native";

export default  function Page1({navigation}) {
    return (
        <View>
            <Text>Welcome In Page1 </Text>
            <Pressable onPress={()=>navigation.navigate("main")}><Text>Navigate to Main</Text></Pressable>
            <Pressable onPress={()=>navigation.navigate("about")}><Text>Navigate to About</Text></Pressable>
        </View>
    )
}
import { View , Image , ImageBackground , Text , StyleSheet } from "react-native"

export function Section1() {
    return (
       <ImageBackground source={require("../assets/images.jpg")} style={{position:"absolute" , top:80 , width:500 , height:500}} >
         <Text>This Is Image Text</Text>
         <Image style={styles.sec1_image} resizeMode="contain" source={require("../assets/favicon.png")}/>
       </ImageBackground>
    )
}

const styles = StyleSheet.create({
    sec1_image:{
       width:200,
       height:200,
       position:"relative",
       top:12,
       left:200
    },
    sec1_text:{
        textAlign:"center"
    }
})
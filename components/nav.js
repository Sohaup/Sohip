import { View , Text , StyleSheet} from "react-native"

export function Header() {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.text1}>Login</Text>
        <Text style={styles.text2}>Register</Text>
      </View>
    )
}

const styles = StyleSheet.create({
    headerContainer:{
        flex:0.0700,
        backgroundColor:"lightgreen"
    },
    text1:{
        textAlign:"start",
        fontSize:22,
        fontWeight:"bold",
        fontFamily:"sans-serif",
        position:"relative",
        left:50,
        top:25
    },
    text2:{
        position:"relative",
        left:70,
        textAlign:"center",
        fontSize:22,
        fontWeight:"bold",
        fontFamily:"sans-serif",
        
    }

})
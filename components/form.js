import { View , Text , TextInput , Pressable, Alert  , StyleSheet } from "react-native";
import { useState } from "react";

export function Form() {
    const [value , setValue] = useState("")
    return (
        <View style={styles.form_container}>
            <Text>Login</Text>
            <Text>{value}</Text>
            <Text>Username</Text>
            <TextInput placeholder="Ahmed" value={value}  style={styles.forms} onChangeText={setValue} maxLength={3} />
            <Text>Password</Text>
            <TextInput placeholder="3#weqL00p" secureTextEntry style={styles.forms} readOnly />
            <Pressable onPress={()=>Alert.alert(value)} style={styles.login_button}><Text>Login</Text></Pressable>
        </View>
    )
} 

const styles = StyleSheet.create({
    form_container:{
        flex:0.25,   
        position:"absolute" ,
        top:400    
    },
    forms:{
        width:300,
        backgroundColor:"crimson"  ,
        color:"black"      ,
        fontSize:22,
        fontWeight:"bold"
    },
    login_button:{
        width:50 , 
        marginTop:5,
        backgroundColor:"purple",
        color:"white",
        fontWeight:"bold",
        borderRadius:16
    }
})

import AsyncStorage from "@react-native-community/async-storage"
import { useEffect, useState } from "react";
import {View , Text , Pressable , Image} from "react-native"
import * as SQLite from "expo-sqlite/legacy"


export default function App() {
  const [data , setData] = useState("")
  
  function pick() {

  }
  
  return (
    <View>     
      <Pressable onPress={()=>pick()} style={{backgroundColor:"crimson"}}><Text>Click To Load</Text></Pressable>
    </View>
  )
}
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View,LogBox } from "react-native";
import { useAssets } from "expo-asset";
import {onAuthStateChanged} from 'firebase/auth'
import { auth } from "./firebase";
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import SignIn from './screens/SignIn'
LogBox.ignoreLogs([
  "Setting a timer",
  "AsyncStorage has been extracted from react-native core and will be removed in a future release.",
]);
const Stack = createStackNavigator()
 function App() {
  const [currentUser,setCurrentUser] = useState(null)
  const [loading,setLoading] = useState(true)
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,user=>{
      setLoading(false)
      if(user){
        setCurrentUser(user)
      }
    })
    return ()=>unsubscribe()
  },[])
  if(loading){
    return <Text>loading...</Text>
  }
  return (
    <NavigationContainer>
      {!currentUser?(<Stack.Navigator>
        <Stack.Screen name='SignIn' component={SignIn}/>
      </Stack.Navigator>):<Text>Hi</Text>}

    </NavigationContainer>
  );
}

export default function Main() {
  const [assets] = useAssets(
    require("./assets/icon-square.png"),
    require("./assets/chatbg.png"),
    require("./assets/user-icon.png"),
    require("./assets/welcome-img.png")
  );
  if(!assets){
    return <Text>Loading</Text>
  }
  return <App/>
}

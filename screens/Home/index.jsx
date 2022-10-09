import React, { useContext } from "react";
import {Text} from 'react-native'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import Photo from './Photo'
import Chats from './Chats'
import {Ionicons} from '@expo/vector-icons'
import Context from '../../context/Context'
export default () => {
const Tab = createMaterialTopTabNavigator()
const {theme:{colors}} = useContext(Context)
  return (
    <Tab.Navigator screenOptions={({route})=>
       ({
        tabBarLabel:()=>{
          if(route.name==='photo'){
            return <Ionicons name="camera" size={20} color={colors.white}/>
          }else{
            return <Text style={{color:colors.white}}>{route.name.toLocaleLowerCase()}</Text>
          }
        },
        tabBarShowIcon:true,
        tabBarLabelStyle:{
          color:colors.white
        },
        tabBarIndicatorStyle:{
          backgroundColor:colors.white
        },
        tabBarStyle:{
          backgroundColor:colors.foreground
        },
      })
    }
    initialRouteName='chats'>
        <Tab.Screen name="photo" component={Photo}/>
        <Tab.Screen name="chats" component={Chats}/>
    </Tab.Navigator>
  );
};

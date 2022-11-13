import React from "react";
import {StyleSheet} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { Entypo } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import Home from "../screens/Home";
import About from "../screens/About";
import Samsung from "../screens/Samsung";
import Apple from "../screens/Apple";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";




const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle:{
    backgroundColor: '#0984e3'
  },
  headerTintColor: 'white',
  headerTintStyle: {
    fontWeight: 'bold'
  }
};

const MainStackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
     <Stack.Screen name="Home" component={Home} options={{
         headerLeft: () => (
          <Entypo name="menu" 
              size={26} 
              color="white" 
              style={styles.ico}
              onPress={() => navigation.openDrawer()}
          />
         )
       }}/>
    </Stack.Navigator>
  );
}

const SamsungStackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Phones" component={Samsung} options={{
         headerLeft: () => (
          <Entypo name="menu" 
              size={26} 
              color="white" 
              style={styles.ico}
              onPress={() => navigation.openDrawer()}
          />
         )
       }}/>
    </Stack.Navigator>
  );
}

const AppleStackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="TV" component={Apple} options={{
         headerLeft: () => (
          <Entypo name="menu" 
              size={26} 
              color="white" 
              style={styles.ico}
              onPress={() => navigation.openDrawer()}
          />
         )
       }}/>
    </Stack.Navigator>
  );
}

const LoginStackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Login" component={Login} options={{
         headerLeft: () => (
          <Entypo name="menu" 
              size={26} 
              color="white" 
              style={styles.ico}
              onPress={() => navigation.openDrawer()}
          />
         )
       }}/>
    </Stack.Navigator>
  );
}

const SignUpStackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="SignUp" component={SignUp} options={{
         headerLeft: () => (
          <Entypo name="menu" 
              size={26} 
              color="white" 
              style={styles.ico}
              onPress={() => navigation.openDrawer()}
          />
         )
       }}/>
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  ico: {
    marginLeft: 20
  }
});


export { MainStackNavigator, SamsungStackNavigator, LoginStackNavigator, SignUpStackNavigator, AppleStackNavigator };
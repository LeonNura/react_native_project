import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainStackNavigator, SamsungStackNavigator, AppleStackNavigator} from "./StackNavigator";
// import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator 
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'lightgray',
        style: {
          backgroundColor: '#0984e3',
        },
      }}
      >
      <Tab.Screen 
        name="Home" 
        component={MainStackNavigator} 
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#0984e3',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen 
        name="Samsung" 
        component={SamsungStackNavigator}
        options={{
          tabBarLabel: 'Phones',
          tabBarColor: '#0984e3',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="mobile-phone" color={color} size={26} />
          ),
        }}
        />
        <Tab.Screen 
        name="Apple" 
        component={AppleStackNavigator}
        options={{
          tabBarLabel: 'TV',
          tabBarColor: '#0984e3',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="tv" color={color} size={26} />
          ),
        }}
        />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { SamsungStackNavigator, LoginStackNavigator, SignUpStackNavigator, AppleStackNavigator} from "./StackNavigator";
import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Phones" component={SamsungStackNavigator} />
      <Drawer.Screen name="TV" component={AppleStackNavigator} />
      {/* <Drawer.Screen name="Login" component={LoginStackNavigator} />
      <Drawer.Screen name="SignUp" component={SignUpStackNavigator} /> */}
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
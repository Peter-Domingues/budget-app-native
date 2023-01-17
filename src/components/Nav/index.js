import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "../../pages/Home";
import Wallet from "../../pages/Wallet";
import Incoming from "../../pages/Incoming";
import Colors from "../../themes/colors";
import Compute from "../../pages/Compute";
import Spending from "../../pages/Spending";

const Tab = createBottomTabNavigator();

const Nav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Calculadora"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.green100,
        tabBarInactiveTintColor: "#666666",
        tabBarItemStyle: { marginBottom: 8, marginTop: 8 },
        tabBarStyle: { height: 60 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Wallet}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="wallet" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Renda"
        component={Incoming}
        options={{
          tabBarLabel: "Renda",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="attach-money" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Spending}
        options={{
          tabBarLabel: "Gastos",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="money-off" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Cofre"
        component={Home}
        options={{
          tabBarLabel: "Cofre",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="piggy-bank" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Historico"
        component={Home}
        options={{
          tabBarLabel: "Historico",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="history" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Calculadora"
        component={Compute}
        options={{
          tabBarLabel: "Calculadora",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="calculator" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Nav;

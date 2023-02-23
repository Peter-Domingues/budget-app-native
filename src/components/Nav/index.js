import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import Wallet from "../../pages/Wallet";
import Incoming from "../../pages/Incoming";
import Colors from "../../themes/colors";
import Bills from "../../pages/Bills/Bills";
import Profit from "../../pages/Profit";
import History from "../../pages/History";
import CalculatorPage from "../../pages/CalculatorPage";

const Tab = createBottomTabNavigator();

const Nav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Wallet"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.white,
        tabBarActiveBackgroundColor: Colors.green25,
        tabBarInactiveTintColor: Colors.white,
        tabBarItemStyle: { paddingBottom: 8, paddingTop: 8 },
        tabBarStyle: { height: 60, backgroundColor: Colors.green100 },
      }}
    >
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          tabBarLabel: "Carteira",
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
        name="Bills"
        component={Bills}
        options={{
          tabBarLabel: "Gastos",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="money-off" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profit"
        component={Profit}
        options={{
          tabBarLabel: "Cofre",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="piggy-bank" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarLabel: "Historico",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="history" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Calculadora"
        component={CalculatorPage}
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

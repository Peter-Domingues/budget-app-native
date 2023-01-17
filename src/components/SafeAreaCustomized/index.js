import React, { useEffect } from "react";
import { View } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import Colors from "../../themes/colors";
import { StatusBar } from "expo-status-bar";

const SafeAreaCustomized = ({ children }) => {
  const safeArea = useSafeAreaInsets();

  return (
    <SafeAreaProvider
      style={{
        backgroundColor: Colors.green50,
      }}
    >
      <View
        style={{
          paddingTop: safeArea.top,
          paddingBottom: safeArea.bottom,
          backgroundColor: Colors.green50,
          marginLeft: 15,
          marginRight: 15,
        }}
      >
        <StatusBar backgroundColor={Colors.green100} />
        {children}
      </View>
    </SafeAreaProvider>
  );
};

export default SafeAreaCustomized;

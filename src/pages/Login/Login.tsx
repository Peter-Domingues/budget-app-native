import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button } from "react-native-paper";

const Login = () => {
  const navigation = useNavigation();
  return (
    <>
      <Button onPress={() => navigation.navigate("BottomTabs" as never)}>
        Login
      </Button>
    </>
  );
};

export default Login;

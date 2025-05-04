import React from "react";
import {View, Text, Button} from "react-native";

export default function LoginScreen({setIsLoggedIn}) {
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text>Login Screen</Text>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

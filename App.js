import "react-native-gesture-handler";
import {StyleSheet} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import StackNavigator from "./src/navigation/StackNavigator";
import {useState} from "react";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <NavigationContainer>
      <StackNavigator isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

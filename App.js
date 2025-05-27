import "react-native-gesture-handler";
import {StyleSheet} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import StackNavigator from "./src/navigation/StackNavigator";
import {useState} from "react";
import {MovieProvider} from "./src/context/MovieContext";
import {View, StatusBar} from "react-native";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: StatusBar.currentHeight,
      }}
    >
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <MovieProvider>
        <NavigationContainer>
          <StackNavigator
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
          />
        </NavigationContainer>
      </MovieProvider>
    </View>
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

import "react-native-gesture-handler";
import {StyleSheet} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import StackNavigator from "./src/navigation/StackNavigator";
import {useState} from "react";
import {GameProvider} from "./src/context/GameContext";
import {View, StatusBar} from "react-native";
import {SafeAreaProvider} from "react-native-safe-area-context";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <SafeAreaProvider>
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          paddingTop: StatusBar.currentHeight,
        }}
      >
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />

        <GameProvider>
          <NavigationContainer>
            <StackNavigator
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          </NavigationContainer>
        </GameProvider>
      </View>
    </SafeAreaProvider>
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

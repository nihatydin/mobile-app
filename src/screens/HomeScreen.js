import React, {useContext} from "react";
import {StyleSheet} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import GameList from "../components/GameList";

export default function HomeScreen({navigation}) {
  return (
    <SafeAreaView edges={["top"]} style={styles.safeArea}>
      {/* navigation props geçtim componente */}
      <GameList navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

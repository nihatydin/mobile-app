import {View, Text, StyleSheet, Button} from "react-native";
import React from "react";

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>SettingsScreen</Text>
      <Button title="Çıkış Yap" onPress={() => navigation.navigate("Login")} />
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: "center", justifyContent: "center"},
});

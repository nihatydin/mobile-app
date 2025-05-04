import React from "react";
import {View, Text, Button, StyleSheet} from "react-native";

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Welcome to my app called Incir</Text>

      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate("Settings")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: "center", justifyContent: "center", gap: 10},
});

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

export default function LoginScreen({setIsLoggedIn}) {
  const handleContinue = () => {
    setIsLoggedIn(true);
  };

  return (
    <ImageBackground
      source={{
        uri: "https://m.media-amazon.com/images/M/MV5BNDMyNGJiMzgtMzY0Ny00MDc1LWEzMDYtNzM4ZTIxZWNkNTgwXkEyXkFqcGc@._V1_.jpg",
      }}
      resizeMode="cover"
      style={styles.background}
    >
      <View style={styles.overlay} />
      <View style={styles.content}>
        <Text style={styles.appName}>GameX</Text>
        <Text style={styles.subtitle}>
          Discovery and recommendation app for gamers. Find the best games and
          start playing right away!
        </Text>

        <TouchableOpacity style={styles.button} onPress={handleContinue}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
  },
  overlay: {
    // bu kullanımı yeni ogrendim
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  content: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  appName: {
    fontSize: 48,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: "#eee",
    textAlign: "center",
    marginBottom: 40,
    lineHeight: 26,
  },
  button: {
    backgroundColor: "#ff4d4d",
    backgroundColor: "#008000",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "600",
  },
});

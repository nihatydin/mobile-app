// import React, {useState} from "react";
// import {View, Text, Button, StyleSheet} from "react-native";

// export default function LoginScreen({setIsLoggedIn}) {
//   const handleLogin = () => {
//     setIsLoggedIn(true);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.name}>Login Screen</Text>

//       <Button title="Login" onPress={handleLogin} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {flex: 1, justifyContent: "center", alignItems: "center"},
//   name: {fontSize: 24, marginBottom: 20},
// });

// src/screens/LoginScreen.js
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
        // uri: "https://img.freepik.com/free-photo/movie-background-collage_23-2149876030.jpg?semt=ais_items_boosted&w=740",
        // uri: "https://img.freepik.com/free-photo/movie-background-collage_23-2149876004.jpg",
        uri: "https://lh5.googleusercontent.com/proxy/cMppx08IuO-Rg2x_2KMFpywTqRRZjtnD6UHw7bv1TwpNNMN5cZgCmgy0RbgnosHOL_nsA333unv3HzXCQm5GrCOo3ffnAwbFvDloz4KaC11yKKoiAc09xLCkOoMc4dRwjbIZLJmjrm2a",
      }}
      resizeMode="cover"
      style={styles.background}
    >
      <View style={styles.overlay} />
      <View style={styles.content}>
        <Text style={styles.appName}>İncir</Text>
        <Text style={styles.subtitle}>
          Film tutkunları için keşif, öneri ve arşiv uygulaması. En iyi filmleri
          bul, sıradaki favorini seç!
        </Text>

        <TouchableOpacity style={styles.button} onPress={handleContinue}>
          <Text style={styles.buttonText}>Devam Et</Text>
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
    backgroundColor: "#FF6B00",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "600",
  },
});

import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {Ionicons} from "@expo/vector-icons";

export default function SettingsScreen({setIsLoggedIn}) {
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <SafeAreaView edges={["top"]} style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Settings</Text>

        <View style={styles.section}>
          <Ionicons name="person-circle-outline" size={64} color="#888" />
          <Text style={styles.username}>Welcome Player!</Text>
          <Text style={styles.appname}>GameX</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.card}>
          <Text style={styles.label}>Source Codes / Github</Text>
          <Text style={styles.description}>
            https://github.com/nihatydin/mobile-app
          </Text>
        </View>

        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={20} color="#fff" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "flex-start",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 50,
    color: "#222",
  },
  section: {
    alignItems: "center",
    marginBottom: 20,
  },
  username: {
    fontSize: 18,
    marginTop: 8,
    color: "#444",
  },
  appname: {
    fontSize: 20,
    marginTop: 8,
    color: "#008000",
    fontWeight: "900",
  },
  divider: {
    height: 1,
    backgroundColor: "#eee",
    marginVertical: 20,
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 2,
  },
  label: {
    fontSize: 18,
    fontWeight: "600",
    color: "#222",
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: "#666",
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ff4d4d",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: "center",
    gap: 8,
  },
  logoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

// import {View, Text, StyleSheet, Button} from "react-native";

// const SettingsScreen = ({setIsLoggedIn}) => {
//   const handleLogout = () => {
//     setIsLoggedIn(false); // kullanıcıyı çıkış yaptır
//   };
//   return (
//     <View style={styles.container}>
//       <Text>SettingsScreen</Text>
//       <Button title="Logout" onPress={handleLogout} />
//     </View>
//   );
// };

// export default SettingsScreen;

// const styles = StyleSheet.create({
//   container: {flex: 1, alignItems: "center", justifyContent: "center"},
// });
import React from "react";
import {View, Text, StyleSheet, Button, TouchableOpacity} from "react-native";

const SettingsScreen = ({setIsLoggedIn}) => {
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ayarlar</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Hesap</Text>
        <Text style={styles.description}>
          Kullanıcı ayarları burada listelenebilir.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Bildirimler</Text>
        <Text style={styles.description}>
          Bildirim tercihlerinizi buradan ayarlayabilirsiniz.
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Çıkış Yap</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 24,
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
  button: {
    marginTop: "auto",
    backgroundColor: "#FF6B00",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 32,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

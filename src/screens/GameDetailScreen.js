import React, {useEffect, useState} from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import {SafeAreaView} from "react-native-safe-area-context";
import {Ionicons} from "@expo/vector-icons";

export default function GameDetailScreen({route, navigation}) {
  const {gameId} = route.params;
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGameDetail = async () => {
      try {
        const res = await axios.get(
          `https://api.rawg.io/api/games/${gameId}?key=bf9f72163c4644989fdc67aaa1b09597`
        );
        setGame(res.data);
      } catch (err) {
        console.error("Detay alınamadı:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchGameDetail();
  }, []);

  if (loading) {
    return (
      <SafeAreaView edges={["top", "bottom"]} style={styles.safeArea}>
        <ActivityIndicator
          size="large"
          style={{
            margin: "auto",
          }}
        />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView edges={["top", "bottom"]} style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-back" size={20} color="#000" />
          </TouchableOpacity>
          {game.name}
        </Text>

        {game.background_image && (
          <Image source={{uri: game.background_image}} style={styles.image} />
        )}

        <Text style={styles.info}>
          Metacritic: {game.metacritic || "Not found"} | Released:{" "}
          {game.released}
        </Text>

        <Text style={styles.description}>
          {game.description_raw || "Not found."}
        </Text>
      </ScrollView>
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
    padding: 16,
    backgroundColor: "#fff",
  },
  backButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // width: "50",
    // height: "50",
    // backgroundColor: "#eee",
    // padding: 8,
    borderRadius: 20,
    paddingRight: 20,
  },
  title: {
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 24,
    fontWeight: "bold",
    // marginTop: 60,
    marginBottom: 12,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 12,
  },
  info: {
    fontSize: 14,
    marginBottom: 8,
    fontWeight: "bold",
    color: "#000",
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
  },
});

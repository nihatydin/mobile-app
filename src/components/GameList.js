import React, {useContext} from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import {GameContext} from "../context/GameContext";

const GameList = ({navigation}) => {
  const {games, loading, searchTerm, setSearchTerm} = useContext(GameContext);

  // burada apiyi detaylı görüntülüyorum konsoldan
  console.log(games);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Populer Games</Text>

      <TextInput
        style={styles.input}
        placeholder="Search a game..."
        placeholderTextColor="#aaa"
        value={searchTerm}
        onChangeText={setSearchTerm}
      />

      {loading ? (
        <ActivityIndicator size="large" color="#000" style={{marginTop: 20}} />
      ) : games.length === 0 ? (
        <Text style={styles.noResult}>Not found.</Text>
      ) : (
        <FlatList
          data={games}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.card}
              activeOpacity={0.8}
              onPress={() => {
                navigation.navigate("GameDetail", {gameId: item.id});
                setSearchTerm("");
              }}
            >
              {item.background_image && (
                <Image
                  source={{uri: item.background_image}}
                  style={styles.image}
                />
              )}
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.genreText}>
                <Text style={{fontWeight: "bold", color: "#333"}}>Genres:</Text>{" "}
                {item.genres.map((gen) => gen.name).join(", ")}
              </Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default GameList;

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
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#333",
  },
  input: {
    height: 45,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 14,
    marginBottom: 16,
    fontSize: 16,
    color: "#333",
    backgroundColor: "#fafafa",
  },
  noResult: {
    marginTop: 30,
    fontSize: 16,
    color: "#888",
    textAlign: "center",
  },
  card: {
    backgroundColor: "#f2f2f2",
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: {width: 0, height: 2},
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 4,
  },
  desc: {
    fontSize: 14,
    color: "#555",
  },
});

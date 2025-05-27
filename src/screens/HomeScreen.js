// import React, {useEffect, useState} from "react";
// import {
//   View,
//   Text,
//   Image,
//   ScrollView,
//   StyleSheet,
//   ActivityIndicator,
//   Dimensions,
// } from "react-native";

// const API_KEY = "388dd1fd809db544d475955300c0aa74";
// const BASE_URL = "https://api.themoviedb.org/3";
// const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

// export default function HomeScreen() {
//   const [movies, setMovies] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchPopularMovies = async () => {
//     try {
//       const response = await fetch(
//         `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
//       );
//       const data = await response.json();
//       setMovies(data.results);
//     } catch (error) {
//       console.error("Hata:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchPopularMovies();
//   }, []);

//   if (loading) {
//     return (
//       <View style={styles.loaderContainer}>
//         <ActivityIndicator size="large" color="#999" />
//       </View>
//     );
//   }

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.title}>Popüler Filmler</Text>
//       {movies.map((movie) => (
//         <View key={movie.id} style={styles.card}>
//           <Image
//             source={{uri: `${IMAGE_BASE_URL}${movie.poster_path}`}}
//             style={styles.poster}
//           />
//           <View style={styles.cardContent}>
//             <Text style={styles.movieTitle}>{movie.title}</Text>
//             <Text style={styles.overview} numberOfLines={4}>
//               {movie.overview || "Açıklama bulunamadı."}
//             </Text>
//           </View>
//         </View>
//       ))}
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   loaderContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   container: {
//     padding: 16,
//     backgroundColor: "#f4f4f4",
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 16,
//     textAlign: "center",
//   },
//   card: {
//     backgroundColor: "#fff",
//     borderRadius: 12,
//     marginBottom: 20,
//     overflow: "hidden",
//     elevation: 4, // Android gölge
//     shadowColor: "#000", // iOS gölge
//     shadowOffset: {width: 0, height: 2},
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//   },
//   poster: {
//     width: "100%",
//     height: Dimensions.get("window").width * 1.2 * 0.5625, // Yaklaşık 16:9 oranı
//     resizeMode: "cover",
//   },
//   cardContent: {
//     padding: 12,
//   },
//   movieTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 6,
//   },
//   overview: {
//     fontSize: 14,
//     color: "#555",
//   },
// });

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
  ActivityIndicator,
} from "react-native";
import {useMovies} from "../context/MovieContext";

export default function HomeScreen() {
  const {movies, loading, searchQuery, setSearchQuery} = useMovies();

  console.log(movies);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Incir Film App</Text>
      <TextInput
        style={styles.input}
        placeholder="Film ara..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      {loading ? (
        <ActivityIndicator size="large" color="#999" />
      ) : (
        <FlatList
          data={movies}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => (
            <View style={styles.card}>
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                }}
                style={styles.poster}
              />
              <View style={styles.info}>
                <Text style={styles.movieTitle}>{item.title}</Text>
                <Text numberOfLines={3} style={styles.description}>
                  {item.overview}
                  {/* {item.vote_average} */}
                  {/* {item.release_date} */}
                </Text>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {fontSize: 22, fontWeight: "bold", marginBottom: 10},
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 8,
    marginBottom: 10,
  },
  card: {
    flexDirection: "row",
    marginBottom: 12,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    overflow: "hidden",
    elevation: 2,
  },
  poster: {width: 100, height: 150},
  info: {flex: 1, padding: 10},
  movieTitle: {fontWeight: "bold", fontSize: 16},
  description: {
    fontSize: 13,
    color: "#555",
  },
});

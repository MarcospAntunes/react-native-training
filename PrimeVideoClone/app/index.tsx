import CardMovie from '@/src/components/CardMovie';
import { MOVIESCRIME } from '@/src/utils/moviesCrimes';
import { MOVIESWATCH } from '@/src/utils/moviesWatch';
import { MOVIESWATCHING } from '@/src/utils/moviesWatching';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { 
  FlatList, 
  Image, 
  ScrollView, 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View 
} from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../assets/images/prime_video.png")}/>
        <Image style={styles.amazonLogoImg} source={require("../assets/images/amazon_logo.png")} />
      </View>

      <View style={styles.category}>
        <TouchableOpacity>
          <Text style={styles.categoryText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.categoryText}>TV Shows</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.categoryText}>Movies</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.categoryText}>Kids</Text>
        </TouchableOpacity>
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false} 
        style={styles.contentMovies}
      >
        <TouchableOpacity style={styles.movieImageThumbnail}>
          <Image
            style={styles.movieImage}
            source={require('../assets/movies/the_wheel_of_time.png')}
          />
        </TouchableOpacity>
        <Text style={styles.movieText}>Continue Watching</Text>
        <FlatList
          data={MOVIESWATCHING}
          keyExtractor={({ id }) => id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentList}
          renderItem={({item}) => {
            return (
              <CardMovie movieURL={item.moviesURL}  />
            )
          }}
        />
          <Text style={styles.movieText}>Criminal Movies</Text>
        
        <FlatList
          data={MOVIESCRIME}
          keyExtractor={({ id }) => id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentList}
          renderItem={({item}) => {
            return (
              <CardMovie movieURL={item.moviesURL}  />
            )
          }}
        />
        <Text style={styles.movieText}>Whatch in your Language</Text>
        
        <FlatList
          data={MOVIESWATCH}
          keyExtractor={({ id }) => id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentList}
          renderItem={({item}) => {
            return (
              <CardMovie movieURL={item.moviesURL}  />
            )
          }}
        />
      </ScrollView>

      <StatusBar backgroundColor='#000000' style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#232f3e',
    alignItems: 'flex-start',
  },

  header: {
    width: "100%",
    paddingTop: 80,
    alignItems: "center",
    justifyContent: "center",
  },

  amazonLogoImg: {
    marginTop: -32,
    marginLeft: 30,
  },

  category: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 30,
    marginBottom: 15,
  },

  categoryText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#fff"
  },

  movieImageThumbnail: {
    width: "100%",
    alignItems: "center",
  },

  movieImage: {},

  contentMovies: {},

  movieText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
    padding: 15
  },

  contentList: {
    paddingLeft: 18,
    paddingRight: 30,
  },
});
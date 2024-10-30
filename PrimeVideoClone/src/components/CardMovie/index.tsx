import { Image, ImageSourcePropType, StyleSheet, TouchableOpacity } from "react-native";


type CardMovieProps = {
  movieURL: ImageSourcePropType | undefined,
}

export default function CardMovie({ movieURL }: CardMovieProps) {
  return (
    <TouchableOpacity>
      <Image 
        style={styles.img} 
        source={movieURL}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  img: {
    marginRight: 20,
  },
})
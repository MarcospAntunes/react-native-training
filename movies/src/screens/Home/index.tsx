import { Text, TextInput, View } from "react-native";
import styles from "./Home.style";

export default function Home(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        O que você quer assistir hoje?
      </Text>
      <View style={styles.containerInput}>
        <TextInput placeholder="Buscar" />
      </View>
    </View>
  )
}
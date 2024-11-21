import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { MapPin, CaretDown, BellRinging } from "phosphor-react-native";
import Sun from "../../assets/01d.svg";
import Sun02d from "../../assets/02d.svg";

export function Home() {
  return (
    <LinearGradient colors={["#292a4e", "#715c77", "#c75c2e"]} style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <MapPin color="#fff" size={25} />
            <Text style={styles.headerLeftText}>Rio de Janeiro</Text>
            <CaretDown color="#fff" size={25} />
          </View>
          <BellRinging color="#fff" size={25} />
        </View>

        <View style={styles.info}>
          <Text style={styles.infoTextUser}>Bom dia, Marcos!</Text>
          <Sun width={200} height={200} />
          <Text style={styles.infoTextClima}>21° C</Text>
          <Text style={styles.maxMin}>Max.: 31° Min.: 25°</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Previsão para os próximos 7 dias</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.card}>
            <Text style={styles.dia}>Seg</Text>
            <Sun02d width={40} height={40} />
            <Text style={styles.temp}>19°</Text>
          </View>
        </ScrollView>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    paddingHorizontal: 35,
    paddingTop: 40,
    alignItems: "center",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  headerLeftText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600"
  },

  info: {
    paddingVertical: 70,
    alignItems: "center",
    gap: 10,
  },

  infoTextUser: {
    fontSize: 32,
    fontWeight: "300",
    color: "#fff"
  },

  infoTextClima: {
    fontSize: 100,
    fontWeight: "300",
    color: "#fff"
  },

  maxMin: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },

  footer: {
    paddingLeft: 40,
    width: "100%",
    gap: 10,
  },

  footerText: {
    fontSize: 20,
    fontWeight: "300",
    color: "#fff",
  },

  card: {
    width: 100,
    height: 130,
    backgroundColor: "rgba(255, 255, 255, 0.23)",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginRight: 15,
  },

  dia: {
    fontSize: 16,
    fontWeight: "600",
  },

  temp: {
    fontSize: 24,
    fontWeight: "300",
  },
});

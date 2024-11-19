
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import logo from "../../../assets/logo.png";
import settings from "../../../assets/setting.png";
import mastercard from "../../../assets/mastercard.png";
import wallet from "../../../assets/Wallet.png";
import pix from "../../../assets/pix.png";
import boleto from "../../../assets/boleto.png";
import dinheiro from "../../../assets/dinheiro.png";

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Image source={logo} />
          <Image source={settings} />
        </View>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <View />
            <Image source={mastercard} />
          </View>
          <Text style={styles.cardFooterText}>Marcos</Text>
        </View>
        <View style={styles.cardDetails}>
          <View style={styles.headerDetails}>
            <Text style={styles.headerDetailsText}>Saldo disponível</Text>
            <Image source={wallet} />
          </View>
          <Text style={styles.cardDetailsText}>R$6.700,00</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Do que precisa?</Text>

        <ScrollView style={styles.footerContentScrollView} showsHorizontalScrollIndicator={false} horizontal={true}>
          <View style={styles.footerCard}>
            <Image source={pix} />
            <Text style={styles.footerCardText}>Fazer um Pix</Text>
          </View>
          <View style={styles.footerCard}>
            <Image source={boleto} />
            <Text style={styles.footerCardText}>Pagar Boleto</Text>
          </View>
          <View style={styles.footerCard}>
            <Image source={dinheiro} />
            <Text style={styles.footerCardText}>Pagar no dinheiro</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#820AD1',
    paddingHorizontal: 30,
  },

  content: { paddingHorizontal: 30 },

  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 40
  },

  card: {
    justifyContent: "space-between",
    width: "100%",
    height: 190,
    backgroundColor: "#9500f6",
    borderRadius: 20,
    elevation: 5,
    marginBottom: 20,
    padding: 20,
  },

  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },

  cardFooterText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "600",
    lineHeight: 36,
  },

  cardDetails: {
    width: "100%",
    height: 120,
    backgroundColor: "#9500f6",
    borderRadius: 20,
    elevation: 5,
    padding: 20,
    justifyContent: "space-between"
  },

  headerDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  headerDetailsText: {
    color: "#fff",
  },

  cardDetailsText: {
    color: "#fff",
    fontSize: 34,
    fontWeight: "600",
    lineHeight: 36,
  },

  footerContentScrollView: {
    height: 400,
  },

  footer: {
    paddingTop: 30,
    paddingLeft: 20,
  },

  footerText: {
    marginHorizontal: 20,
    paddingBottom: 30,
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },

  footerCard: {
    width: 100,
    height: 127,
    backgroundColor: "#9500f6",
    elevation: 5,
    borderRadius: 20,
    padding: 20,
    justifyContent: "space-between",
    marginLeft: 10,
  },

  footerCardText: {
    color: "#fff",
    fontSize: 12,
    lineHeight: 18,
    fontWeight: "600",
  },
});

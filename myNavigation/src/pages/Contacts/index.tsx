import { StyleSheet, Text, View } from "react-native";

export default function Contacts({navigation}: any) {
  return (
    <View style={styles.container}>
      <View>
        <Text>Nome: Marcos Antunes</Text>
        <Text>Telefone: (21) 95343-1111</Text>
        <Text 
          onPress={() => navigation.navigate("information", {
            nome: 'Marcos Antunes',
            telefone: '(21) 95343-1111',
            endereco: 'Rua deidecosta',
            numero: '24',
            profissao: 'desenvolvedor',
            email: 'naoteinteressa@aperta.com'
          })}
        >
          Information...
        </Text>
      </View>

      <View>
        <Text>Nome: Marquito</Text>
        <Text>Telefone: (21) 95343-1112</Text>
        <Text 
          onPress={() => navigation.navigate("information", {
            nome: 'Marquito',
            telefone: '(21) 95343-1112',
            endereco: 'Avenida deidefrente',
            numero: '69',
            profissao: 'front-enzo',
            email: 'teinteressa@solto.com'
          })}
        >
          Information...
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20
  },
});
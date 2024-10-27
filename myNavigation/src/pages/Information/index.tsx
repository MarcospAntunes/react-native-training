import { StyleSheet, Text, View } from "react-native";

export default function Information({ route }: any) {
  const { 
    nome, 
    telefone, 
    email, 
    endereco, 
    numero, 
    profissao
   } = route?.params

  return (
    <View style={styles.container}>
      <Text>Nome: {nome}</Text>
      <Text>Telefone: {telefone}</Text>
      <Text>E-mail: {email}</Text>
      <Text>Endereço: {endereco}</Text>
      <Text>N°: {numero}</Text>
      <Text>Profissão: {profissao}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
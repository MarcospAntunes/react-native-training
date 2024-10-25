import React, { useState } from "react";
import { 
  Text, 
  TextInput, 
  View, 
  TouchableOpacity,
  Vibration,
  Pressable,
  Keyboard, 
  FlatList
} from "react-native";
import ResultImc from "./ResultImc";
import styles from "./Form.style";

export default function Form() {
  const [height, setHeight] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [messageImc, setMessageImc] = useState<string>("Preencha o peso e altura");
  const [imc, setImc] = useState<string>("");
  const [textButton, setTextButton] = useState<string>("Calcular");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [imcList, setImcList] = useState<any>([]);
  
  const imcCalculator = () => {
    let hightFormat = height?.replace(",", ".");
    let weightFormat = weight?.replace(",", ".");
    
    const result = (Number(weightFormat!) / (Number(hightFormat!) * Number(hightFormat!))).toFixed(2);
    setImcList((prev: any) => [
      { id: new Date().getTime().toString(), imc: result },
      ...prev,
    ]);

    return setImc(result);
  }

  const verificationImc = () => {
    if (!height || !weight) {
      Vibration.vibrate();
      setErrorMessage("campo obrigatório *");
    } else {
      setErrorMessage("");
    }
  }

  const validationImc = () => {
    if (height && weight) {
      setErrorMessage("");
      imcCalculator();
      setHeight("");
      setWeight("");
      setMessageImc("Seu imc é igual: ");
      setTextButton("Calcular Novamente");
    } else {
      verificationImc();
      setImc("");
      setTextButton("Calcular");
      setMessageImc("Preencha o peso e altura");
    }
  }

  return (
    <View style={ styles.formContext }>
      {imc === "" ? (
        <Pressable onPress={Keyboard.dismiss} style={ styles.form }>
          <Text style={ styles.formLabel }>Altura</Text>
          <Text style={ styles.errorMessage }>{errorMessage}</Text>
          <TextInput 
            style={ styles.input }
            onChangeText={(e) => setHeight(e)}
            value={height}
            placeholder="Ex.: 1.75"
            keyboardType="numeric" 
          />
          
          <Text style={ styles.formLabel }>Peso</Text>
          <Text style={ styles.errorMessage }>{errorMessage}</Text>
          <TextInput 
            style={ styles.input }
            onChangeText={(e) => setWeight(e)}
            value={weight}
            placeholder="Ex.: 70.00"
            keyboardType="numeric" 
          />

          <TouchableOpacity 
            style={ styles.buttonCalculator }
            onPress={() => validationImc()}
          >
            <Text style={ styles.textButtonCalculator }>
              {textButton}
            </Text>
          </TouchableOpacity>
        </Pressable>
      ) : (
        <View style={styles.showResultImc}>
          <ResultImc 
            messageResultImc={messageImc} 
            resultImc={imc} 
          />
          <TouchableOpacity 
            style={ styles.buttonCalculator }
            onPress={() => validationImc()}
          >
            <Text style={ styles.textButtonCalculator }>
              {textButton}
            </Text>
          </TouchableOpacity>
        </View>
      )}
      <FlatList 
        style={ styles.listImcs } 
        data={imcList}
        showsVerticalScrollIndicator={false} 
        renderItem={({ item }) => (
          <Text style={ styles.resultImcItem }>
            Resultado IMC = <Text style={ styles.textResultImcItem }>{item.imc}</Text>
          </Text>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

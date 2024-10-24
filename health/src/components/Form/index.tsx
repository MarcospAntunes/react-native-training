import React, { useState } from "react";
import { 
  Text, 
  TextInput, 
  View, 
  TouchableOpacity,
  Vibration,
  Pressable,
  Keyboard, 
} from "react-native";
import ResultImc from "./ResultImc";
import styles from "./Form.style";

export default function Form() {
  const [height, setHeight] = useState<string>();
  const [weight, setWeight] = useState<string>();
  const [messageImc, setMessageImc] = useState<string>("Preencha o peso e altura");
  const [imc, setImc] = useState<string>("");
  const [textButton, setTextButton] = useState<string>("Calcular");
  const [errorMessage, setErrorMessage] = useState<string>("");
  
  const imcCalculator = () => {
    let hightFormat = height?.replace(",", ".");
    let weightFormat = height?.replace(",", ".");
    
    const result = ( Number(weightFormat!) / (Number(hightFormat!) * Number(height!) )).toFixed(2)

    return setImc(result)
  }

  const verificationImc = () => {
    if(imc === "") {
      Vibration.vibrate();
      setErrorMessage("campo obrigatório *")
    }
  }

  const validationImc = () => {
    if(height && weight) {
      setErrorMessage("");
      imcCalculator();
      setHeight("")
      setWeight("")
      setMessageImc("Seu imc é igual: ")
      setTextButton("Calcular Novamente")

      return
    }
    verificationImc();
    setImc("");
    setTextButton("Calcular");
    setMessageImc("Preencha o peso e altura")
  }

  return (
    <Pressable onPress={Keyboard.dismiss} style={ styles.formContext }>
      <View style={ styles.form }>
        <Text style={ styles.formLabel }>Altura</Text>
        <Text style ={ styles.errorMessage }>{errorMessage}</Text>
        <TextInput 
          style={ styles.input }
          onChangeText={(e) => setHeight(e)}
          value={height}
          placeholder="Ex.: 1.75"
          keyboardType="numeric" 
        />
        
        <Text style={ styles.formLabel }>Peso</Text>
        <Text style ={ styles.errorMessage }>{errorMessage}</Text>
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
      </View>
      <ResultImc 
        messageResultImc={messageImc} 
        resultImc={imc} 
      />
    </Pressable>
  )
}
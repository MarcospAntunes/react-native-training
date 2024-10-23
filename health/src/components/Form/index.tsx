import React, { useState } from "react";
import { Text, TextInput, View, Button } from "react-native";
import ResultImc from "./ResultImc";

export default function Form() {
  const [height, setHeight] = useState<string>();
  const [weight, setWeight] = useState<string>();
  const [messageImc, setMessageImc] = useState<string>("Preencha o peso e altura");
  const [imc, setImc] = useState<string>();
  const [textButton, setTextButton] = useState<string>("Calcular");
  
  const imcCalculator = () => {
    const result = ( Number(weight!) / (Number(height!) * Number(height!) )).toFixed(2)

    return setImc(result)
  }

  const validationImc = () => {
    if(height && weight) {
      imcCalculator();
      setHeight("")
      setWeight("")
      setMessageImc("Seu imc é igual: ")
      setTextButton("Calcular Novamente")

      return
    }
    setImc("");
    setTextButton("Calcular");
    setMessageImc("Preencha o peso e altura")
  }

  return (
    <View>
      <View>
        <Text>Altura</Text>
        <TextInput 
          onChangeText={(e) => setHeight(e)}
          value={height}
          placeholder="Ex.: 1.75"
          keyboardType="numeric" 
        />
        
        <Text>Peso</Text>
        <TextInput 
          onChangeText={(e) => setWeight(e)}
          value={weight}
          placeholder="Ex.: 70.00"
          keyboardType="numeric" 
        />

        <Button title={textButton} onPress={validationImc} />
      </View>
      <ResultImc 
        messageResultImc={messageImc} 
        resultImc={imc} 
      />
    </View>
  )
}
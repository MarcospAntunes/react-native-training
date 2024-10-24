import React from "react";
import { View, Text } from "react-native";
import styles from "./ResultImc.style";

type ResultImcProps = {
  messageResultImc: string
  resultImc: string | undefined
}

export default function ResultImc({messageResultImc, resultImc}: ResultImcProps) {
  return (
    <View style={ styles.resultImc }>
      <Text style={ styles.information }>{messageResultImc}</Text>
      <Text style={ styles.numberImc }>{resultImc}</Text>
    </View>
  )
}
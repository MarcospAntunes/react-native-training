import React from "react";
import { View, Text } from "react-native";

type ResultImcProps = {
  messageResultImc: string
  resultImc: string | undefined
}

export default function ResultImc({messageResultImc, resultImc}: ResultImcProps) {
  return (
    <View>
      <Text>{messageResultImc}</Text>
      <Text>{resultImc}</Text>
    </View>
  )
}
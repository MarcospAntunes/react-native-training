import React from "react";
import { View, Text, TouchableOpacity, Share } from "react-native";
import styles from "./ResultImc.style";

type ResultImcProps = {
  messageResultImc: string
  resultImc: string | undefined
}

export default function ResultImc({messageResultImc, resultImc}: ResultImcProps) {
  const onShare = async () => {
    const result = await Share.share({
      message: `Meu imc hoje é: ${resultImc}`
    })
  }

  return (
    <View style={ styles.resultImc }>
      <View style={ styles.boxShareButton }>
        <TouchableOpacity style={ styles.shareButton } onPress={onShare}>
          <Text style={ styles.shareButtonText }>Share</Text>
        </TouchableOpacity>
      </View>
      <Text style={ styles.information }>{messageResultImc}</Text>
      <Text style={ styles.numberImc }>{resultImc}</Text>
    </View>
  )
}
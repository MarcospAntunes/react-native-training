import React from 'react';
import { View, Text } from 'react-native';
import styles from './CurrentPrice.style';

type CurrentPriceProps = {
  lastQuotation: number | undefined
}

export default function CurrentPrice({lastQuotation}: CurrentPriceProps) {
  return (
    <View style={styles.headerPrice}>
      <Text style={styles.CurrentPrice}>$ {lastQuotation}</Text>
      <Text style={styles.textPrice}>Ultima cotação</Text>
    </View>
  )
};

import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './QuotationsItems.style';

type QuotationsItemsProps = {
  valor: string,
  data: string
}

export default function QuotationsItems({valor, data}: QuotationsItemsProps) {
  return (
    <View style={styles.mainContent}>
      <View style={styles.contextLeft}>
        <View style={styles.boxLogo}>
          <Image 
            source={require("@/src/imgs/bitcoin-icon.png")}
            style={styles.logoBitcoin} 
          />
          <Text style={styles.dayQuotation}>{valor}</Text>
        </View>
      </View>
      <View style={styles.contextRight}>
        <Text style={styles.price}>{data}</Text>
      </View>
    </View>
  )
};

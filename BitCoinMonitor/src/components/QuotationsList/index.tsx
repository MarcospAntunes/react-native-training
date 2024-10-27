import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import styles from './QuotationsList.style';
import QuotationsItems from './QuotationsItems';

type QuotationsListProps = {
  filterDay: (number: number) => void,
  listTransactions: Object[]
}

export default function QuotationsList({filterDay, listTransactions}: QuotationsListProps) {
  const daysQuery = filterDay;

  return (
    <>
      <View style={styles.filters}>
        <TouchableOpacity 
          style={styles.buttonQuery} 
          onPress={() => daysQuery(7)}
        >
          <Text style={styles.textButtonQuery}>7D</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.buttonQuery} 
          onPress={() => daysQuery(15)}
        >
          <Text style={styles.textButtonQuery}>15D</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.buttonQuery} 
          onPress={() => daysQuery(30)}
        >
          <Text style={styles.textButtonQuery}>1M</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.buttonQuery} 
          onPress={() => daysQuery(90)}
        >
          <Text style={styles.textButtonQuery}>3M</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.buttonQuery}
          onPress={() => daysQuery(180)}
        >
          <Text style={styles.textButtonQuery}>6M</Text>
        </TouchableOpacity>

      </View>
      <ScrollView>
        <FlatList 
        data={listTransactions}
        renderItem={({data, valor}: any) => {
          return (
            <QuotationsItems 
              valor={valor} 
              data={data}
            />
          )
        }} 
        />
      </ScrollView>
    </>
  )
};

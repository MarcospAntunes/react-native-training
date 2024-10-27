import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import styles from './HistoryGraphic.style';
import { LineChart } from "react-native-chart-kit"

type HistoryGraphicProps  = {
  infoDataGraphic: number[]
}

export default function HistoryGraphic({infoDataGraphic}: HistoryGraphicProps) {
  return (
    <View style={styles.contentGraphic}>
      <LineChart
        data={{
          datasets: [
            {data: infoDataGraphic}
          ],
        labels: [""]
        }}
        width={Dimensions.get("window").width}
        height={220}
        yAxisLabel='$'
        yAxisSuffix='k'
        withVerticalLines={false}
        yLabelsOffset={1}
        withVerticalLabels={false}
        chartConfig={{
          backgroundColor: "#00000",
          backgroundGradientFrom: "#232323",
          backgroundGradientTo: "#3f3f3f",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(255,255,255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255,255,255, ${opacity})`,
          propsForDots: {
            r: "1",
            strokeWidth: "1",
            stroke: "#8A2BE2",
          },
        }}
        bezier
      />
    </View>
  )
};

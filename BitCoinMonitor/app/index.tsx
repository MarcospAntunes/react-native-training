import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import CurrentPrice from '@/src/components/CurrentPrice';
import HistoryGraphic from '@/src/components/HistoryGraphic';
import QuotationsList from '@/src/components/QuotationsList';

function  addZero(number: number) {
  if(number <= 9) {
    return `0${number}`
  }

  return number
}

function url(qtdDays: number) {
  const date = new Date();
  const listLastDays = qtdDays;
  const endDate = `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(date.getDay())}`;

  date.setDate(date.getDate() - listLastDays);

  const startDate = `${date.getFullYear()}-${addZero(date.getMonth() + 1)}-${addZero(date.getDay())}`;
  
  return `https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}`
}

async function getListCoins(url: string) {
  let response = await fetch(url);
  let returnApi = await response.json();
  let selectListQuotations = returnApi.bpi;

  const queryCoinsList = Object.keys(selectListQuotations).map((key) => {
    return {
      data: key.split("-").reverse().join("/"),
      valor: selectListQuotations[key]
    }
  });

  let data = queryCoinsList.reverse();

  return data
}

async function getPriceCoinsGraphic(url: string) {
  let responseG = await fetch(url);
  let returnApiG = await responseG.json();
  let selectListQuotationsG = returnApiG.bpi;

  const queryCoinsList = Object.keys(selectListQuotationsG).map((key) => {
    return selectListQuotationsG[key]
  });

  let dataG = queryCoinsList;
  return dataG
}

export default function App() {
  const [coinsList, setCoinsList] = useState<Object[]>([]);
  const [coinsGraphicList, setCoinsGraphicList] = useState([0]);
  const [days, setDays] = useState(30);
  const [updateData, setUpdateData] = useState(true);
  const [price, setPrice] = useState<number | undefined>(0);

  const updateDay = (number: number) => {
    setDays(number);
    setUpdateData(true);
  }

  const priceQuotation = () => {
    setPrice(coinsGraphicList.pop())
  }

  useEffect(() => {
    getListCoins(url(days)).then((data) => {
      setCoinsList(data);
    });

    getPriceCoinsGraphic(url(days)).then((dataG) => {
      setCoinsGraphicList(dataG);
    });

    priceQuotation();

    if(updateData) {
      setUpdateData(false);
    }
    

  }, [updateData]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor='#8A2BE2'
        barStyle="dark-content"
      />
      <CurrentPrice lastQuotation={price} />
      <HistoryGraphic infoDataGraphic={coinsGraphicList} />
      <QuotationsList 
        filterDay={updateDay} 
        listTransactions={coinsList} 
      />
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    paddingTop: Platform.OS === "android" ? 40 : 0
  },
});
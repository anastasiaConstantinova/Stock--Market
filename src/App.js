import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import MyTable from './components/Table';

import './App.scss';
import Chart from './components/Chart';



const socialMedias = ['Facebook', 'Twitter', 'LinkedIn'];
//formating date
const dateToString = date => new Date(Number(date)).toLocaleDateString('en-CA');

const socialMediaCountGenerator = () => {
  let result = {};
  socialMedias.forEach(elem => result[elem] = Math.ceil(Math.random() * 10));
  
  return result;
 
}

const stockPriceGenerator = (date) => {
  const targetDate = new Date(Date.parse(date));
  const prevDate = new Date(targetDate);
  const result = {};
  let prevPrice = 50;
  let nextPrice;
  
  for (let i = 1; i <= 10; i++) {
    prevDate.setDate(prevDate.getDate() - i);
    nextPrice = prevPrice + Math.floor(10 * (Math.random() - 0.5));

    result[prevDate.getTime()] = {
      price: nextPrice,
      ...socialMediaCountGenerator()
    };

    prevPrice = nextPrice;
  }
 
  return result;
}

const getChartData = (allData) => {
  
  if(Object.keys(allData).length === 0) return []; 
  const result =  Object.entries(allData['NY']).map(([date, { price, Facebook, Twitter, LinkedIn }]) => ({ name: dateToString(date), price, fb: Facebook, tw: Twitter, li: LinkedIn }));
 

  return result;

}

function App() {

  const [stocks, setStocks] = useState({});

//hook useEffect 
  useEffect(() => {
    setStocks({ 'NY': stockPriceGenerator('2020-09-15') });

  }, []);


  const handleNewStockSymbol = ({stockSymbol}) => {
    setStocks({ ...stocks, [stockSymbol]: stockPriceGenerator('2020-09-15') });
  }


  return (
    <div className="App">
      <Header>Stock Market </Header>
      <br />
      <Form onData={handleNewStockSymbol}/>
      <br />
      <MyTable stocks={stocks} />
      <br />
      <Chart data={getChartData(stocks)} />
    </div>

  );
}

export default App;
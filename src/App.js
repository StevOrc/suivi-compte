import React from "react";
import "./App.css";
import {
  Header,
  Balance,
  IncomeExpenses,
  AddTransaction,
  TransactionList,
} from "../src/app/";
import { GlobalContext } from '../src/context/GlobalState';

function App() {
  return (
    <GlobalContext>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalContext>
  );
}

export default App;

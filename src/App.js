import React from "react";
import "./App.css";
import {
  Header,
  Balance,
  IncomeExpenses,
  AddTransaction,
  TransactionList,
} from "../src/app/";
import { GlobalProvider } from "../src/context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;

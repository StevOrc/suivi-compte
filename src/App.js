import React from "react";
import "./App.css";
import {
  Header,
  Balance,
  IncomeExpenses,
  AddTransaction,
  TransactionList,
} from "../src/app/";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;

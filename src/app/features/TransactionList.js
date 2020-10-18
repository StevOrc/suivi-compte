import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);
  useEffect(() => {
    getTransactions();
  }, []);
  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((el) => (
          <Transaction key={el._id} transaction={el} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;

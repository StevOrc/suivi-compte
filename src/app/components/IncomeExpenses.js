import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const operations = transactions.reduce(
    (acc, el) => {
      if (el.amount < 0) acc.expense += el.amount;
      else acc.income += el.amount;
      return acc;
    },
    { income: 0, expense: 0 }
  );
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+${operations.income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-${operations.expense}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;

import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

// Initial State
const initialState = {
  transactions: [],
  loading: null,
  loaded: null,
  error: null,
};

const URI_ENDPOINT = "/api/transactions";

// Create context
export const GlobalContext = createContext(initialState);

// Provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  async function getTransactions() {
    try {
      const { data } = await axios.get(`${URI_ENDPOINT}`);

      dispatch({
        type: "GET_TRANSACTIONS",
        payload: data.transactions,
      });
    } catch (err) {
      dispatch({
        type: "ERROR_TRANSACTION",
        payload: err.response.data.error,
      });
    }
  }

  const deleteTransaction = async (id) => {
    try {
      const res = await axios.delete(`${URI_ENDPOINT}/${id}`);
      console.log("delete", res);
      dispatch({
        type: "DELETE_TRANSACTION",
        payload: id,
      });
    } catch (err) {
      console.log("Deelete trans errror", err.response);
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.response.data.errors,
      });
    }
  };

  const addTransaction = async (transaction) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(`${URI_ENDPOINT}`, transaction, config);

      console.log("response add => ", data);

      dispatch({
        type: "ADD_TRANSACTION",
        payload: data.transaction,
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.response.data.errors,
      });
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        loading: state.loading,
        loaded: state.loaded,
        error: state.error,
        deleteTransaction,
        addTransaction,
        getTransactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";


// Initial State
const initialState = {
  transactions: [
    { id: 1, text: "Cafe", amount: -1.3 },
    { id: 2, text: "Betclic", amount: -50 },
    { id: 3, text: "Betclic", amount: 248.64 },
    { id: 4, text: "Restaurant", amount: -27.8 },
    { id: 5, text: "Essence", amount: -68.87 },
  ],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider
export const GlobalProvider = ({ children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (<GlobalContext.Povider value={{
        transatcions: state.transactions
    }} >
        {children}
    </GlobalContext.Povider>);
}
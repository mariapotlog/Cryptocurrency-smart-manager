import { createContext, useState, useEffect } from "react";

export const CurrencyContext = createContext();

export const CurrencyContextProvider = (props) => {
  const [currency, setCurrency] = useState(() => {
    const exValue = window.localStorage.getItem('currency');
    if (exValue) return exValue;
    if (!exValue) return "usd";
    return null
  }
  );

  useEffect(() => {
    window.localStorage.setItem("currency", currency);
  }, [currency]);

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      {props.children}
    </CurrencyContext.Provider>
  );
};
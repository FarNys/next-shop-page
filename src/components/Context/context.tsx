//@ts-nocheck
import { CartType, ProductsType } from "@/types";
import React, { useState, useContext } from "react";

interface IGlobalContextProps {
  cart: CartType[];
  setCart: (cart: CartType[]) => void;
}

export const GlobalContext = React.createContext<IGlobalContextProps>({
  cart: [],
  setCart: () => {},
});

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cartValues, setcartValues] = useState([]);

  return (
    <GlobalContext.Provider
      value={{
        cart: cartValues,
        setCart: setcartValues,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);

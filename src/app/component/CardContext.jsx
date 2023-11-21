// components/CardContext.js

"use client";
import React, { createContext, useContext, useState } from "react";

const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const clearCart = () => {
    setCartItems([]);
  };
  return (
    <CardContext.Provider
      value={{ cartItems, addToCart, getTotalPrice, clearCart }}
    >
      {children}
    </CardContext.Provider>
  );
};

export const useCardContext = () => {
  const context = useContext(CardContext);

  if (!context) {
    throw new Error(
      "useCardContext debe ser utilizado dentro de un proveedor CardProvider"
    );
  }

  return context;
};

"use client";

import React, { createContext, useContext, useState } from "react";

const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);

    if (existingProduct) {
      // Si el producto ya está en el carrito, actualiza la cantidad
      setCartItems((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // Si el producto no está en el carrito, agrégalo con cantidad 1
      setCartItems((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    }
  };

  const getTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };

  return (
    <CardContext.Provider
      value={{
        cartItems,
        addToCart,
        getTotalQuantity,
        getTotalPrice,
        clearCart,
        removeFromCart,
      }}
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

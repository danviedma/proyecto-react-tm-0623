// components/CartIcon.js
"use client";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useCardContext } from "./CardContext";

const CartIcon = () => {
  const { getTotalQuantity } = useCardContext();

  const totalItems = getTotalQuantity();

  return (
    <div className="relative">
      <span className="absolute text-white top-20 right-20">
        <FaShoppingCart size={40} />
      </span>
      {totalItems > 0 && (
        <span className="absolute px-2 py-1 text-xs text-white bg-red-500 rounded-full top-24 right-20">
          {totalItems}
        </span>
      )}
    </div>
  );
};

export default CartIcon;

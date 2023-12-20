// components/CartIcon.js
"use client";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useCardContext } from "./CardContext";

const CartIcon = () => {
  const { getTotalQuantity } = useCardContext();

  const totalItems = getTotalQuantity();

  return (
    <div className=" text-white">
      <div className=" text-white flex -ml-5">
        <div className=" px-2 py-1 text-xs text-white bg-red-500 relative -top-1 -right-12 rounded-full ml-3 mb-7">
          {totalItems}
        </div>
        <FaShoppingCart size={40} />
      </div>
    </div>
  );
};

export default CartIcon;

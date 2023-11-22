// components/CartIcon.js
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useCardContext } from "./CardContext";

const CartIcon = () => {
  const { cartItems } = useCardContext();

  const totalItems = cartItems.length;

  return (
    <div className="relative">
      <span className="absolute top-0 right-4">
        <FaShoppingCart size={40} />
      </span>
      {totalItems > 0 && (
        <span className="absolute top-0 right-0 px-2 py-1 text-xs text-white bg-red-500 rounded-full">
          {totalItems}
        </span>
      )}
    </div>
  );
};

export default CartIcon;

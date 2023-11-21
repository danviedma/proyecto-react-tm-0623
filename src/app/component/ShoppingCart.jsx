import React from "react";
import { useCardContext } from "./CardContext";

const ShoppingCart = () => {
  const { cartItems, getTotalPrice, clearCart } = useCardContext();

  return (
    <div className="w-[80vw] m-auto py-10 border-3">
      <h2 className="border-3 text-yellow-500 font-bold">Mi Carrito</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id} className="flex">
            <img
              src={item.image}
              alt={item.title}
              className="w-[5%] h-[10%] object-contain mt-2"
            />
            <p className="self-end mt-10 text-lg text-yellow-700">
              {item.title} - ${item.price}
            </p>
          </li>
        ))}
      </ul>

      {cartItems.length > 0 && (
        <>
          <p>Total: ${getTotalPrice()}</p>
          <button onClick={clearCart}>Vaciar Carrito</button>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;

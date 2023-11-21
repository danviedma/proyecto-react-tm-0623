import React from "react";
import { useCardContext } from "./CardContext";
import CartTable from "./CartTable";

const ShoppingCart = () => {
  const { cartItems, getTotalPrice, clearCart, removeFromCart } =
    useCardContext();

  const handleRemoveProduct = (productId) => {
    removeFromCart(productId);
  };

  return (
    <div className="w-[80vw] m-auto py-10 border-1">
      <h2 className="text-4xl font-bold text-yellow-500">Mi Carrito</h2>

      {cartItems.length > 0 ? (
        <CartTable products={cartItems} onRemoveProduct={handleRemoveProduct} />
      ) : (
        <p>No hay productos en el carrito.</p>
      )}

      {cartItems.length > 0 && (
        <>
          {" "}
          <p className="pt-20 font-bold">Total: ${getTotalPrice()}</p>
          <button
            onClick={clearCart}
            className="flex justify-center w-40 p-3 mt-10 text-center text-white bg-yellow-500 border-2 rounded-xl h-30 hover:bg-yellow-700"
          >
            Vaciar Carrito
          </button>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;

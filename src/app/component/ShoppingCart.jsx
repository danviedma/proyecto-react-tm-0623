import React from "react";
import { useCardContext } from "./CardContext";
import CartTable from "./CartTable";
import Footer from "./footer";
import Swal from "sweetalert2";

const ShoppingCart = () => {
  const { cartItems, getTotalPrice, clearCart, removeFromCart } =
    useCardContext();

  const handleRemoveProduct = (productId) => {
    removeFromCart(productId);
  };
  const handleConfirmPurchase = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Gracias por tu compra",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="w-[80vw] m-auto py-10">
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
          <div className="flex space-x-4">
            <button
              onClick={clearCart}
              className="flex justify-center w-40 p-3 mt-10 text-center text-white bg-red-500 border-2 rounded-xl h-30 hover:scale-110"
            >
              Vaciar Carrito
            </button>
            <button
              onClick={handleConfirmPurchase}
              className="flex justify-center w-40 p-3 mt-10 text-center text-white bg-green-500 border-2  rounded-xl h-30 hover:scale-110"
            >
              Confirmar Compra
            </button>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
};

export default ShoppingCart;

"use client";

import { CardProvider, useCardContext } from "../component/CardContext";
import ShoppingCart from "../component/ShoppingCart";

const OtraPagina = () => {
  // const cartItems = useCardContext();

  return (
    <div>
      {/* <CardProvider>
        <div>
          <h2>Carrito</h2>
          <ShoppingCart />
        </div>
      </CardProvider> */}
      <ShoppingCart />
    </div>
  );
};

export default OtraPagina;

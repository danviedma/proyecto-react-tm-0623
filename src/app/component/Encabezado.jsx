import React from "react";

import Link from "next/link";
import CartIcon from "./CartIcon";

function Encabezado() {
  return (
    <h1 className="p-6 mt-6 text-4xl font-bold text-yellow-500 border-t-4">
      Nuestros Libros
      <Link href="./carrito" className="font-bold text-yellow-700">
        <CartIcon />
      </Link>
    </h1>
  );
}

export default Encabezado;

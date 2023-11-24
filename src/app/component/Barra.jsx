import React from "react";
import CartIcon from "./CartIcon";

function Barra() {
  return (
    <section>
      <div className="flex items-center justify-between w-full h-16 bg-green-300">
        <div></div>
        <p className="pt-3 text-black ">
          Entrega gratuita a partir de $10.000. Recibes un regalo con una compra
          superior a $15.000.-
        </p>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 mr-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
    </section>
  );
}

export default Barra;

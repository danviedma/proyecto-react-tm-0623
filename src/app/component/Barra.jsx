import React from "react";
import EliminarBarra from "./EliminarBarra";
import ocultarBarraSuperior from "./EliminarBarra";

function Barra() {
  return (
    <section style= {{display: ocultarBarraSuperior ? 'none' : 'null'}}>
      <div className="w-full h-16 bg-green-300 flex justify-between items-center">
       <div></div>
        <p className="text-black pt-3 ">
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

      <EliminarBarra />

      
    </section>
  );
}

      export default Barra;


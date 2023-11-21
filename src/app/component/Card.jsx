import React from "react";
import BotonPago from "./BotonPago";
import { CardProvider } from "./CardContext";

function Card({ list, addToCart }) {
  return (
    <div className="grid content-end justify-end lg:grid-cols-3">
      {list.map((tarjeta, index) => (
        <div
          key={index}
          className="m-10 w-[350] h-[400] rounded-xl flex flex-col items-center border-2"
        >
          <img
            src={tarjeta.image}
            alt={tarjeta.title}
            className="w-[80%] h-[60%] object-contain mt-2"
          />
          <p className="mt-3 font-bold text-yellow-700">{tarjeta.title}</p>
          <p>{tarjeta.author}</p>
          <p className="text-lg font-bold text-yellow-700">${tarjeta.price}</p>
          <button
            onClick={() => addToCart(tarjeta)}
            className="flex justify-center w-40 p-3 mb-2 text-center text-white bg-yellow-500 border-2 rounded-xl h-30 hover:bg-yellow-700"
          >
            Comprar
          </button>
        </div>
      ))}
    </div>
  );
}

export default Card;

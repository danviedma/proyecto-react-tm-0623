import React from "react";
import BotonPago from "./BotonPago";

function Card({ list }) {
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
          <p className="text-lg font-bold text-yellow-700">{tarjeta.price}</p>
          <BotonPago />
        </div>
      ))}
    </div>
  );
}

export default Card;

import React from "react";
import BotonPago from "./BotonPago";
import { CardProvider } from "./CardContext";
import { useState } from "react";
import BookCard from "./BookCard";

function Card({ list, addToCart }) {
  return (
    <div className="grid content-end justify-end lg:grid-cols-3">
      {list.map((tarjeta, index) => (
        <BookCard key={index} tarjeta={tarjeta} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default Card;

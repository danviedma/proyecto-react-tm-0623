"use client";

import { useCardContext } from "../CardContext";

const OtraPagina = () => {
  const cartItems = useCardContext();

  return (
    <div>
      <h1>Detalles de la Tarjeta</h1>
      <ul>
        {cartItems.map((card) => (
          <li key={card.id}>
            <p>ID de la Tarjeta: {card.id}</p>
            <p>Título: {card.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OtraPagina;

import React from "react";
import { useCardContext } from "./CardContext";

const CartTable = ({ products }) => {
  const { removeFromCart } = useCardContext();

  return (
    <table className="min-w-full border border-collapse border-gray-300">
      <thead>
        <tr>
          <th className="py-2 pl-0 text-left border-b"></th>
          <th className="py-2 pl-0 text-left border-b">Título</th>
          <th className="py-2 pr-4 text-left border-b">Precio</th>
          <th className="py-2 pr-4 text-left border-b">Cantidad</th>
          <th className="py-2 border-b"></th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td className="py-2 pl-0 text-left border-b">
              <img
                src={product.image}
                className="w-[15%] h-[20%] mt-2"
                alt=""
              />
            </td>
            <td className="py-2 font-bold text-left text-yellow-700 border-b">
              {product.title}
            </td>
            <td className="py-2 font-bold text-left border-b">
              ${product.price}
            </td>
            <td className="py-2 font-bold text-left border-b">
              {product.quantity}
            </td>
            <td className="py-2 border-b">
              <button
                className="px-2 py-1 text-white bg-red-500 rounded"
                onClick={() => removeFromCart(product.id)}
              >
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CartTable;

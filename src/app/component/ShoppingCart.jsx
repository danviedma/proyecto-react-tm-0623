import React from "react";

const ShoppingCart = ({ cartItems }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id} className="flex ">
            <img
              src={item.image}
              alt={item.title}
              className="w-[5%] h-[10%] object-contain mt-2"
            />
            <p className="self-end">
              {item.title} - ${item.price}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;

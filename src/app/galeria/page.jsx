"use client";

import Encabezado from "../component/Encabezado";
import Image from "next/image";
import Footer from "../component/footer";
import { galeryList } from "../data";
import { useState } from "react";

import Link from "next/link";
import { CardProvider, useCardContext } from "../component/CardContext";
import Card from "../component/Card";
import ShoppingCart from "../component/ShoppingCart";

export default function GaleryPage() {
  // const [cartItems, setCartItems] = useState([]);

  // const addToCart = (product) => {
  //   setCartItems([...cartItems, product]);
  // };
  const { cartItems, addToCart } = useCardContext();
  return (
    <div className="w-4/5 mx-auto">
      <Encabezado />
      <Link href="./carrito" className="font-bold text-yellow-700">
        Carrito
      </Link>
      <CardProvider>
        <Card list={galeryList} addToCart={addToCart} />
      </CardProvider>

      <Footer />
    </div>
  );
}

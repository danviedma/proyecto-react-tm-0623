"use client";

import Encabezado from "../component/Encabezado";
import Image from "next/image";
import Footer from "../component/footer";
import { galeryList } from "../data";
import { useState } from "react";
import { CardProvider } from "../component/CardContext";
import Link from "next/link";
import OtraPagina from "../component/carrito/page";
import { useCardContext } from "../component/CardContext";
import Card from "../component/Card";
import ShoppingCart from "../component/ShoppingCart";

export default function GaleryPage() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="w-4/5 mx-auto">
      <Encabezado />
      <Card list={galeryList} addToCart={addToCart} />
      <Footer />
      <ShoppingCart cartItems={cartItems} />
    </div>
  );
}

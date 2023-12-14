"use client";

import Encabezado from "../component/Encabezado";
import Image from "next/image";
import Footer from "../component/footer";
import { galeryList } from "../data";
import { useState } from "react";

import Link from "next/link";
import { CardProvider, useCardContext } from "../component/CardContext";
import Card from "../component/Card";
import CartIcon from "../component/CartIcon";
import Navbar from "../component/navbar";

export default function GaleryPage() {
  // const [cartItems, setCartItems] = useState([]);

  // const addToCart = (product) => {
  //   setCartItems([...cartItems, product]);
  // };
  const { cartItems, addToCart } = useCardContext();
  return (
    <div className="w-[100%] mx-auto">
      <Navbar />
      <div className="w-[80%] mx-auto">
        <CardProvider>
          <Card list={galeryList} addToCart={addToCart} />
        </CardProvider>
        <Footer />
      </div>
    </div>
  );
}

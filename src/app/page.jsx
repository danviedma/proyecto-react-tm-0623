"use client";

import Image from "next/image";
import "./globals.css";
import Barra from "./component/Barra";

import Cards from "./component/Cards";
import Carrusel from "./component/carrusel";
import Footer from "./component/footer";
import "bootstrap/dist/css/bootstrap.min.css";

import Banner from "./component/banner";
import Surprise from "./component/surprise";
import Whychoose from "./component/whychoose";
import Ourpartner from "./component/ourpartner";
import Whomakes from "./component/whomakes";
import Encabezado from "./component/Encabezado";
import CartIcon from "./component/CartIcon";
import Navbar from "./component/navbar";

export default function Home() {
  return (
    <div>
      
      <Banner />
      <Whychoose />
      <Whomakes />
      <Ourpartner />
      <Surprise />
      <Cards />
      <Carrusel />
      <Footer />
    </div>
  );
}

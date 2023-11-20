"use client";

import Image from "next/image";
import "./globals.css";
import Barra from "./component/barra"; 
import Carrusel from "./component/carrusel";
import Footer from "./component/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./component/navbar";
import Banner from "./component/Banner";
import Cards from "./component/Cards";
import Surprise from "./component/Surprise";
import Whychoose from "./component/Whychoose";

export default function Home() {
  return (
    <div>
      <Barra />
      <NavBar />
      <Banner />
      <Whychoose />
      <Surprise />
      <Cards />
      <Carrusel />
      <Footer />
    </div>
  );
}

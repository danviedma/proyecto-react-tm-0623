"use client";

import Image from "next/image";
import "./globals.css";
import Carrusel from "./component/carrusel";
import Footer from "./component/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./component/navbar";
import Banner from "./component/banner";
import Surprise from "./component/surprise";
import Whychoose from "./component/whychoose";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Surprise />
      <Carrusel />
      <Whychoose />
      <Footer />
    </div>
  );
}

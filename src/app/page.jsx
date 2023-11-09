"use client";

import Image from "next/image";
import "./globals.css";
import Carrusel from "./component/carrusel";
import Footer from "./component/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./component/navbar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Carrusel />

      <Footer />
    </div>
  );
}

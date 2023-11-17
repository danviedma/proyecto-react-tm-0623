"use client";

import Image from "next/image";
import "./globals.css";
import Carrusel from "./component/carrusel";
import Footer from "./component/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./component/navbar";
import Banner from "./component/Banner";
import Surprise from "./component/Surprise";
import Whychoose from "./component/Whychoose";
import Ourpartner from "./component/ourpartner";
import Whomakes from "./component/whomakes";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Whychoose />
      <Whomakes />
      <Ourpartner />
      <Surprise />
      <br />
      <Carrusel />
      <Footer />
    </div>
  );
}

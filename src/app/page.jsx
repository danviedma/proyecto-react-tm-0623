"use client";


import "./globals.css";
 
import Carrusel from "./component/carrusel";
import Footer from "./component/footer";
import "bootstrap/dist/css/bootstrap.min.css";

import Banner from "./component/Banner";
import Cards from "./component/Cards";
import Surprise from "./component/Surprise";
import Whychoose from "./component/Whychoose";

export default function Home() {
  return (
    <div>
      
      <Banner />
      <Whychoose />
      <Surprise />
      <Cards />
      <Carrusel />
      <Footer />
    </div>
  );
}

"use client";

import Image from "next/image";
import "./globals.css";

import "bootstrap/dist/css/bootstrap.min.css";

import Banner from "./component/banner";
import Whychoose from "./component/whychoose";
import Surprise from "./component/surprise";

export default function Home() {
  return (
    <div>
      <Banner />
      <Whychoose />

      <Surprise />
    </div>
  );
}

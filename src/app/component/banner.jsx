import React from "react";

import Image from "next/image";

import imgbanner from "@/app/asset/img/banner.jpg";

import Link from "next/link";

function Banner() {
  return (
    <div className="w-[100%] h-[85vh] m-auto relative lg:h-[78vh]">
      <Image src={imgbanner} className="h-[100%] w-[100%] opacity-50"></Image>
      <div className="absolute pl-20 top-40">
        <h2 className="text-5xl text-black">Apoye las librerías nacionales</h2>
        <p className="text-xl text-black">
          Descubra nuestros textos y sus historias
        </p>
        <button className="p-2 text-white bg-yellow-500 rounded-md w-[10rem] border-1">
          <Link href="/galeria" className="text-white no-underline">
            Nuestra tienda
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Banner;

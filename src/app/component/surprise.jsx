import React from "react";

import Image from "next/image";

import libro from "@/app/asset/img/libro.jpg";

function Surprise() {
  return (
    <div className="w-[100%] m-auto lg:flex lg:w-[85vw]">
      <Image src={libro} width={600} className="lg:w-[40vw]"></Image>
      <div className="w-[100%] mt-10 pl-6 lg:w-[50vw]">
        <h3 className="text-yellow-500">Sorprender a alguien</h3>
        <h3>Regala un libro</h3>
        <p className="mt-5">
          Recibir un regalo siempre es placentero; recibir un libro es una
          experiencia que no se olvidará fácilmente. Regala nuestros libros,
          regala una experiencia y sé parte de nuestra comunidad.
        </p>
        <p>
          Navega por nuestro Portal, y busca ese libro especial, para la persona
          que quieres sorprender y celebrar.
        </p>
      </div>
    </div>
  );
}

export default Surprise;

import React from "react";

import Image from "next/image";

import imgsaramago from "@/app/asset/img/saramago.jpg";
import imgFollet from "@/app/asset/img/Follet.jpg";
import imgZaragoza from "@/app/asset/img/Zaragoza.jpg";
import imgZafon from "@/app/asset/img/Zafon.jpg";
import CartIcon from "./CartIcon";

function Cards() {
  return (
    <section className="flex items-center justify-around py-20">
      <div className="flex flex-col items-center max-w-sm overflow-hidden rounded-lg">
        <Image
          src={imgsaramago}
          className="px-3 py-4 border-2 rounded-lg w-300 objet-cover"
        ></Image>

        <div class="px-6 py-4">
          <h2 class="font-bold text-xl mb-2">Ensayo sobre la ceguera</h2>
          <p class="text-orange-700 font-bold text-2xl text-center">
            $599,99{" "}
            <span className="text-lg font-normal line-through text-zinc-600">
              $1.100
            </span>
          </p>
        </div>
        <div class="px-6 pb-2">
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-1 px-4 rounded-md w-[13rem] border-1">
            Comprar
          </button>
        </div>
      </div>

      {/* libro 2  */}

      <div className="flex flex-col items-center max-w-sm overflow-hidden rounded-lg">
        <Image
          src={imgFollet}
          className="px-3 py-4 border-2 rounded-lg w-300 objet-cover"
        ></Image>

        <div class="px-6 py-4">
          <h2 class="font-bold text-xl mb-2">La armadura de la luz</h2>
          <p class="text-orange-700 font-bold text-2xl text-center">
            $799,99{" "}
            <span className="text-lg font-normal line-through text-zinc-600">
              $1.300
            </span>
          </p>
        </div>
        <div class="px-6 pb-2">
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-1 px-4 rounded-md w-[13rem] border-1">
            Comprar
          </button>
        </div>
      </div>
      {/* Libro 3 */}

      <div className="flex flex-col items-center max-w-sm overflow-hidden rounded-lg">
        <Image
          src={imgZaragoza}
          className="px-3 py-4 border-2 rounded-lg w-300 objet-cover"
        ></Image>
        <div class="px-6 py-4">
          <h2 class="font-bold text-xl mb-2">La biblioteca de fuego</h2>
          <p class="text-orange-700 font-bold text-2xl text-center">
            $899,99{" "}
            <span className="text-lg font-normal line-through text-zinc-600">
              $1.400
            </span>
          </p>
        </div>
        <div class="px-6 pb-2">
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-1 px-4 rounded-md w-[13rem] border-1">
            Comprar
          </button>
        </div>
      </div>

      {/* libro 4 */}

      <div className="flex flex-col items-center max-w-sm overflow-hidden rounded-lg">
        <Image
          src={imgZafon}
          className="px-3 py-4 border-2 rounded-lg w-300 objet-cover"
        ></Image>

        <div class="px-6 py-4">
          <h2 class="font-bold text-xl mb-2">La sombra del viento</h2>
          <p class="text-orange-700 font-bold text-2xl text-center">
            $1099,99{" "}
            <span className="text-lg font-normal line-through text-zinc-600">
              $1.500
            </span>
          </p>
        </div>
        <div class="px-6 pb-2">
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-1 px-4 rounded-md w-[13rem] border-1">
            Comprar
          </button>
        </div>
      </div>
    </section>
  );
}

export default Cards;

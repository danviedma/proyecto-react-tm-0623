import React from "react";

import Image from "next/image";

import imgsaramago from "@/app/asset/img/saramago.jpg";
import imgFollet from "@/app/asset/img/Follet.jpg";
import imgZaragoza from "@/app/asset/img/Zaragoza.jpg";
import imgZafon from "@/app/asset/img/Zafon.jpg";

function Cards() {
  return (
    // <div className="w-full h-90 bg-white-300 flex ">
    //  <div className="mt-15 text-center">
    //<h2 className="text-3x1">Ultimas <span className="text-orange-500">Ofertas</span></h2>
    // <div/>
    //<section className="flex flex-col items-center  md:flex-row justify-center">
    //  <div className="max-w-md py-4 px-8 bg-white my-20">

    //<Image src={imgsaramago} className="w-20 h-20 objet-cover border-2 rounded-lg"></Image>
    //  </div>

    //</section>

    //  </div>
    <section className="flex justify-around items-center py-20">
      <div className="max-w-sm rounded-lg overflow-hidden flex flex-col items-center">
        <Image
          src={imgsaramago}
          className="w-300  px-3 py-4 objet-cover border-2 rounded-lg"
        ></Image>

        <div class="px-6 py-4">
          <h2 class="font-bold text-xl mb-2">Ensayo sobre la ceguera</h2>
          <p class="text-orange-700 font-bold text-2xl text-center">
            $599,99{" "}
            <span className="line-through text-lg font-normal text-zinc-600">$1.100</span>
          </p>
        </div>
        <div class="px-6 pb-2">
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-1 px-4 rounded-md w-[13rem] border-1">
            Comprar
          </button>
        </div>
      </div>

      {/* libro 2  */}

      <div className="max-w-sm rounded-lg overflow-hidden flex flex-col items-center">
        <Image
          src={imgFollet}
          className="w-300  px-3 py-4 objet-cover border-2 rounded-lg"
        ></Image>

        <div class="px-6 py-4">
          <h2 class="font-bold text-xl mb-2">La armadura de la luz</h2>
          <p class="text-orange-700 font-bold text-2xl text-center">
            $799,99{" "}
            <span className="line-through text-lg font-normal text-zinc-600">$1.300</span>
          </p>
        </div>
        <div class="px-6 pb-2">
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-1 px-4 rounded-md w-[13rem] border-1">
            Comprar
          </button>
        </div>
      </div>
      {/* Libro 3 */}

      <div className="max-w-sm rounded-lg overflow-hidden flex flex-col items-center">
        <Image
          src={imgZaragoza}
          className="w-300  px-3 py-4 objet-cover border-2 rounded-lg"
        ></Image>
        <div class="px-6 py-4">
          <h2 class="font-bold text-xl mb-2">La biblioteca de fuego</h2>
          <p class="text-orange-700 font-bold text-2xl text-center">
            $899,99{" "}
            <span className="line-through text-lg font-normal text-zinc-600">$1.400</span>
          </p>
        </div>
        <div class="px-6 pb-2">
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-1 px-4 rounded-md w-[13rem] border-1">
            Comprar
          </button>
        </div>
      </div>

      {/* libro 4 */}

      <div className="max-w-sm rounded-lg overflow-hidden flex flex-col items-center">
        <Image
          src={imgZafon}
          className="w-300  px-3 py-4 objet-cover border-2 rounded-lg"
        ></Image>

        <div class="px-6 py-4">
          <h2 class="font-bold text-xl mb-2">La sombra del viento</h2>
          <p class="text-orange-700 font-bold text-2xl text-center">
            $1099,99 {" "}
            <span className="line-through text-lg font-normal text-zinc-600">$1.500</span>
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

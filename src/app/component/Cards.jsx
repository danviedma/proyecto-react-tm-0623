import React from "react";

import Image from "next/image";

import { Button } from "react-scroll";
import Link from "next/link";

import imgsaramago from "@/app/asset/img/saramago.jpg";
import imgFollet from "@/app/asset/img/Follet.jpg";
import imgZaragoza from "@/app/asset/img/Zaragoza.jpg";
import imgZafon from "@/app/asset/img/Zafon.jpg";
import CartIcon from "./CartIcon";

function Cards() {
  return (
    <div>
      <Link
        href="/galeria"
        style={{ textDecoration: "none", borderBottom: "none" }}
      >
        <section className="flex justify-around items-center py-20 pb-2">
          <div className="max-w-sm rounded-lg overflow-hidden flex flex-col items-center">
            <Image
              src={imgsaramago}
              className="w-300  px-3 py-4 objet-cover border-2 rounded-lg"
            ></Image>

            <div className="px-6 py-4">
              <h2 className="font-bold text-xl mb-2">
                Ensayo sobre la ceguera
              </h2>
              {/*  <p className="text-orange-700 font-bold text-2xl text-center">
              $3999,99{" "}
              <span className="line-through text-lg font-normal text-zinc-600">
                $5.100
              </span>
  </p>  */}
            </div>
            {/*  <div class="px-6 pb-2">
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-1 px-4 rounded-md w-[13rem] border-1">
            Comprar
          </button>
  </div>  */}
          </div>

          {/* libro 2  */}

          <div className="max-w-sm rounded-lg overflow-hidden flex flex-col items-center">
            <Image
              src={imgFollet}
              className="w-300  px-3 py-4 objet-cover border-2 rounded-lg"
            ></Image>

            <div className="px-6 py-4">
              <h2 className="font-bold text-xl mb-2 ">La armadura de la luz</h2>
              {/*  <p className="text-orange-700 font-bold text-2xl text-center">
              $4799,99{" "}
              <span className="line-through text-lg font-normal text-zinc-600">
                $6.300
              </span>
</p>  */}
            </div>
            {/* <div class="px-6 pb-2">
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-1 px-4 rounded-md w-[13rem] border-1">
            Comprar
          </button>
        </div>  */}
          </div>
          {/* Libro 3 */}

          <div className="max-w-sm rounded-lg overflow-hidden flex flex-col items-center">
            <Image
              src={imgZaragoza}
              className="w-300  px-3 py-4 objet-cover border-2 rounded-lg"
            ></Image>
            <div className="px-6 py-4">
              <h2 className="font-bold text-xl mb-2">La biblioteca de fuego</h2>
              {/*  <p className="text-orange-700 font-bold text-2xl text-center">
              $4899,99{" "}
              <span className="line-through text-lg font-normal text-zinc-600">
                $6.400
              </span>
            </p>  */}
            </div>
            {/* <div class="px-6 pb-2">
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-1 px-4 rounded-md w-[13rem] border-1">
            Comprar
          </button>
        </div>  */}
          </div>

          {/* libro 4 */}

          <div className="max-w-sm rounded-lg overflow-hidden flex flex-col items-center">
            <Image
              src={imgZafon}
              className="w-300  px-3 py-4 objet-cover border-2 rounded-lg"
            ></Image>

            <div className="px-6 py-4">
              <h2 className="font-bold text-xl mb-2">La sombra del viento</h2>
              {/*   <p className="text-orange-700 font-bold text-2xl text-center">
              $5099,99{" "}
              <span className="line-through text-lg font-normal text-zinc-600">
                $7.500
              </span>
      </p> */}
            </div>
            {/* <div class="px-6 pb-2">
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-1 px-4 rounded-md w-[13rem] border-1">
            Comprar
          </button> 
        </div> */}
          </div>
        </section>
      </Link>

      <div className="px-6 pb-6 flex justify-center items-center">
        <Link href="/galeria">
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold  text-lg rounded-md w-[17rem]">
            Galería
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Cards;

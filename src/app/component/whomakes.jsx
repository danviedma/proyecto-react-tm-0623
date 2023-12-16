import React from "react";

function Whomakes() {
  return (
    <div className="w-full m-auto lg:flex lg:w-85vw">
      <div className="w-full mt-10 pl-6 lg:w-1/2 lg:flex lg:flex-col ">
        <h3 >
          Comprando también estás
          <span className="text-yellow-500 flex justify-center">
            {" "}
            AYUDANDO{" "}
          </span>
        </h3>

        <p className="mt-2 lg:w-70">
          Para lograr que los niños puedan ejercer sus derechos y desarrollarse
          integralmente en un entorno familiar protector, donamos un %3 de todas
          las ventas.
        </p>
        <div>
          <a
            href="https://www.aldeasinfantiles.org.ar/"
            target="_blank"
            rel="Aldeas infantiles"
          >
            <button className="text-white bg-yellow-600 py-2 px-4 rounded hover:bg-blue-500 animate-pulse ">
              Conoce a quien ayudas
            </button>
          </a>
        </div>
      </div>
      <div
        className=" w-full h-64 bg-cover bg-center mb-5 lg:w-1/2 rounded   "
        style={{
          backgroundImage:
            "url('https://tribunadelpueblo.com.ar/wp-content/uploads/2018/06/AISOS-Aniversario8-678x381.jpg')",
        }}
      ></div>
    </div>
  );
}

export default Whomakes;

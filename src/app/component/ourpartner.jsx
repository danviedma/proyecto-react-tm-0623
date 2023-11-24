import React from "react";
import CartIcon from "./CartIcon";

function Ourpartner() {
  return (
    <div
      className="mb-5 bg-center bg-cover "
      style={{
        backgroundImage:
          "url('https://alberdisa.vteximg.com.br/arquivos/ids/167873/Fiambres%20y%20Embutidos.png?v=637654937046300000')",
      }}
    >
      <h3
        className="mb-2 font-extrabold text-center text-yellow-600 shadow-black"
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}
      >
        Nuestras recomendaciones regionales.
      </h3>
      <p
        className="mt-2 font-bold text-center text-white "
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}
      >
        Salames caseros regionales, de la ciudad. Calidad y tradición.
      </p>
      <div className="text-center">
        <a
          href="https://www.instagram.com/ellmandamas/"
          target="_blank"
          rel="el mandamas"
        >
          <button className="px-4 py-2 text-white bg-yellow-600 rounded animate-shake hover:bg-blue-500 animate-bounce ">
            Obtenga más información
          </button>
        </a>
      </div>
    </div>
  );
}

export default Ourpartner;

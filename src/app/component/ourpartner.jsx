import React from "react";

function Ourpartner() {
  return (
    <div
      className="bg-cover bg-center mb-5  "
      style={{
        backgroundImage:
          "url('https://alberdisa.vteximg.com.br/arquivos/ids/167873/Fiambres%20y%20Embutidos.png?v=637654937046300000')",
      }}
    >
      <h3
        className="text-yellow-600 shadow-black mb-2    text-center font-extrabold"
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}
      >
        Nuestras recomendaciones regionales.
      </h3>
      <p
        className="mt-2  text-center text-white font-bold  "
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
          <button className="text-white bg-yellow-600 py-2 px-4 rounded animate-shake hover:bg-blue-500  animate-bounce ">
            Obtenga más información
          </button>
        </a>
      </div>
    </div>
  );
}

export default Ourpartner;

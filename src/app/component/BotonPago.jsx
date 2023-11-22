"use client";

import React from "react";
import { useState } from "react";

function BotonPago() {
  const [isopen, setIsopen] = useState(false);
  return (
    <div>
      <div>
        <button
          className="flex p-3 mb-2 text-white bg-yellow-500 border-2 rounded-xl w-100 h-30 hover:bg-yellow-700"
          onClick={() => setIsopen(true)}
        >
          Comprar
        </button>
        {isopen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm">
            <div className="p-4 bg-white border-4 rounded-md">
              <label className="p-4 mt-3 font-bold margin-auto">
                Agregar al carro??
              </label>
              <div>
                <button
                  className="px-6 py-2 m-5 font-bold text-white bg-yellow-700 rounded-sm"
                  onClick={() => setIsopen(false)}
                >
                  Confirmar
                </button>
                <button
                  className="px-6 py-2 m-5 font-bold text-white bg-yellow-700 rounded-sm"
                  onClick={() => setIsopen(false)}
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BotonPago;

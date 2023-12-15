import { useState } from "react";

function BookCard({ tarjeta, addToCart }) {
  const [isopen, setIsopen] = useState(false);

  return (
    <div className="m-10 w-[350] h-[400] rounded-xl flex flex-col items-center border-2">
      <img
        src={tarjeta.image}
        alt={tarjeta.title}
        className="w-[80%] h-[60%] object-contain mt-2"
      />
      <p className="mt-3 font-bold text-yellow-700">{tarjeta.title}</p>
      <p>{tarjeta.author}</p>
      <p className="text-lg font-bold text-yellow-700">${tarjeta.price}</p>
      <button
        onClick={() => setIsopen(true)}
        className="flex justify-center w-40 p-3 mb-2 text-center text-white bg-yellow-500 border-2 rounded-xl h-30 hover:bg-yellow-700"
      >
        Agregar al Carro
      </button>
      {isopen && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 backdrop-blur-sm">
          <div className="p-4 bg-white border-4 rounded-md">
            <label className="p-4 mt-3 font-bold margin-auto">
              ¿Desea agregar al carro?
            </label>
            <div>
              <button
                className="px-6 py-2 m-5 font-bold text-white bg-yellow-500 rounded-sm"
                onClick={() => {
                  setIsopen(false);
                  addToCart(tarjeta);
                }}
              >
                Confirmar
              </button>
              <button
                className="px-6 py-2 m-5 font-bold text-white bg-yellow-500 rounded-sm"
                onClick={() => setIsopen(false)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default BookCard;

import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

function Carrusel() {
  const slides = [
    {
      url: "https://images-na.ssl-images-amazon.com/images/I/91jbHTNpy6L._AC_UL381_SR381,381_.jpg",
    },
    {
      url: "https://images-na.ssl-images-amazon.com/images/I/917Bc9C1MlL._AC_UL254_SR254,254_.jpg",
    },
    {
      url: "https://images-na.ssl-images-amazon.com/images/I/81KuLAC1XdL._AC_UL254_SR254,254_.jpg",
    },
    {
      url: "https://images-na.ssl-images-amazon.com/images/I/71TRUbzcvaL._AC_UL381_SR381,381_.jpg",
    },
    {
      url: "https://images-na.ssl-images-amazon.com/images/I/91n7p-j5aqL._AC_UL127_SR127,127_.jpg",
    },
    {
      url: "https://images-na.ssl-images-amazon.com/images/I/81AHTyq2wVL._AC_UL254_SR254,254_.jpg",
    },
    {
      url: "https://images-na.ssl-images-amazon.com/images/I/71yNgTMEcpL._AC_UL254_SR254,254_.jpg",
    },
    {
      url: "https://images-na.ssl-images-amazon.com/images/I/81Xy1ugiWeL._AC_UL381_SR381,381_.jpg",
    },
    {
      url: "https://images-na.ssl-images-amazon.com/images/I/91Ldk5Qz9sL._AC_UL381_SR381,381_.jpg",
    },
    {
      url: "https://images-na.ssl-images-amazon.com/images/I/8180Uhc4BuL._AC_UL381_SR381,381_.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    // Configura un intervalo para cambiar la imagen cada cierto tiempo (por ejemplo, cada 5 segundos)
    const interval = setInterval(() => {
      const newIndex = (currentIndex + 1) % slides.length;
      setCurrentIndex(newIndex);
    }, 5000); // Cambia de imagen cada 5 segundos (ajusta esto según tus necesidades)

    return () => {
      // Limpia el intervalo cuando el componente se desmonta
      clearInterval(interval);
    };
  }, [currentIndex, slides]);

  return (
    <div className="max-w-[400px] h-[350px] w-full m-auto  px-4 relative group ">
      <p className="text-center text-lg font-bold mb-4 text-yellow-500">
        Proximamente en la tienda
      </p>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-[350px] rounded-2xl bg-center bg-cover duration-500"
      ></div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[65%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 hover:bg-yellow-600">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[65%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 hover:bg-yellow-600">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled
              className={currentIndex === slideIndex ? "text-yellow-600" : ""}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carrusel;

import React from "react";
import Image from "next/image";
import img1 from "@/app/asset/img/img1.PNG";
import img2 from "@/app/asset/img/img2.PNG";
import img3 from "@/app/asset/img/img3.PNG";
import img4 from "@/app/asset/img/img4.PNG";
import img5 from "@/app/asset/img/img5.PNG";

function Whychoose() {
  return (
    <div className="w-[100%] m-auto pb-20 lg:w-[85vw] ">
      <h2 className="p-10 text-center">
        ¿Por qué elegir{" "}
        <span className="text-yellow-500">nuestro servicio Premium?</span>
      </h2>
      <div className="flex flex-col lg:flex-row">
        <div className="p-6">
          <Image src={img1} className="mx-auto"></Image>
          <p className="py-2 text-xl font-bold flex justify-center ">
            Nuevos <br />
            autores
          </p>
          <p>
            Descubra nuevos autores en nuestra tienda. Estamos constantemente
            trayendo nuevos libros.
          </p>
        </div>
        <div className="p-6">
          <Image src={img2} className="mx-auto"></Image>
          <p className="py-2 text-xl font-bold flex justify-center">
            Sin salir <br /> de casa
          </p>
          <p>
            Compre desde la comodidad de su casa, a través de nuestro Portal.
          </p>
        </div>
        <div className="p-6">
          <Image src={img3} className="mx-auto"></Image>
          <p className="py-2 text-xl font-bold flex justify-center">
            Nuestras <br /> editoriales
          </p>
          <p>Trabajamos con las mejores editoriales del país.</p>
        </div>
        <div className="p-6">
          <Image src={img4} className="mx-auto"></Image>
          <p className="py-2 text-xl font-bold flex justify-center">
            Disfrute<br></br> la calidad
          </p>
          <p>
            La calidad de nuestros libros es incomparable, no te arrepentirás.
          </p>
        </div>
        <div className="p-6">
          <Image src={img5} className="mx-auto"></Image>
          <p className="py-2 text-xl font-bold flex justify-center">
            Unase a<br></br>nuestro Club
          </p>
          <p>
            Forma parte de nuestro club y conoce personas con intereses
            parecidos a los tuyos.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Whychoose;

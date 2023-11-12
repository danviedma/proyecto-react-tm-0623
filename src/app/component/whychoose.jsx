import React from "react";
import Image from "next/image";
import img1 from "@/app/asset/img/img1.PNG";
import img2 from "@/app/asset/img/img2.PNG";
import img3 from "@/app/asset/img/img3.PNG";
import img4 from "@/app/asset/img/img4.PNG";
import img5 from "@/app/asset/img/img5.PNG";

function Whychoose() {
  return (
    <div className="w-[100%] m-auto pb-20 lg:w-[85vw]">
      <h2 className="p-10 text-center">
        Why Choose{" "}
        <span className="text-yellow-500">the Premium Bakery Quality</span>
      </h2>
      <div className="flex flex-col lg:flex-row">
        <div className="p-6">
          <Image src={img1}></Image>
          <p className="py-2 text-xl font-bold">
            Discover new flavours & people
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            non aliquam unde nemo autem ullam illum repellendus facilis? Non
            quaerat corrupti nihil? Consectetur numquam harum cumque ipsa ipsum
            saepe libero.
          </p>
        </div>
        <div className="p-6">
          <Image src={img2}></Image>
          <p className="py-2 text-xl font-bold">
            Buy <br></br> wholesale
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            non aliquam unde nemo autem ullam illum repellendus facilis? Non
            quaerat corrupti nihil? Consectetur numquam harum cumque ipsa ipsum
            saepe libero.
          </p>
        </div>
        <div className="p-6">
          <Image src={img3}></Image>
          <p className="py-2 text-xl font-bold">Support your community</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            non aliquam unde nemo autem ullam illum repellendus facilis? Non
            quaerat corrupti nihil? Consectetur numquam harum cumque ipsa ipsum
            saepe libero.
          </p>
        </div>
        <div className="p-6">
          <Image src={img4}></Image>
          <p className="py-2 text-xl font-bold">Enjoy the best quality</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            non aliquam unde nemo autem ullam illum repellendus facilis? Non
            quaerat corrupti nihil? Consectetur numquam harum cumque ipsa ipsum
            saepe libero.
          </p>
        </div>
        <div className="p-6">
          <Image src={img5}></Image>
          <p className="py-2 text-xl font-bold">Enjoy Club Level Service</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            non aliquam unde nemo autem ullam illum repellendus facilis? Non
            quaerat corrupti nihil? Consectetur numquam harum cumque ipsa ipsum
            saepe libero.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Whychoose;

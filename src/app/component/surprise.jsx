import React from "react";

import Image from "next/image";

import libro from "@/app/asset/img/libro.jpg";

function Surprise() {
  return (
    <div className="w-[100%] m-auto lg:flex lg:w-[85vw]">
      <Image src={libro} width={600} className="lg:w-[40vw]"></Image>
      <div className="w-[100%] mt-10 pl-6 lg:w-[50vw]">
        <h3 className="text-yellow-500">Surprise Someone</h3>
        <h3>Working from Home</h3>
        <p className="mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat at
          magnam dolores voluptatibus deleniti, saepe voluptates incidunt! Id
          ipsum rerum rem est numquam nemo. Provident laudantium velit
          aspernatur iure tempore.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          molestias suscipit blanditiis. Facilis dolores totam, aspernatur
          accusamus, molestias modi deserunt eaque dignissimos delectus
          molestiae non eligendi. Ullam libero corrupti similique!
        </p>
      </div>
    </div>
  );
}

export default Surprise;

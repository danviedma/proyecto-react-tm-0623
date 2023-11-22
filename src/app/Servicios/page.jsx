import React from "react";

import Image from "next/image";

import imgservicios from "@/app/asset/img/servicios.jpg";



function PaginadeServicios () {

    return (
        
        <div className="flex justify-center items-center">
            <Image src={imgservicios} className="w-[50%]"></Image>
        </div>

    )


}

export default PaginadeServicios
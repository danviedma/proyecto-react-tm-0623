import React from "react";

import Image from "next/image";

import imgcontacto from  "@/app/asset/img/contacto.jpg";

function PaginadeContacto  () {

return (

    <div className="flex justify-center items-center">
    <Image src={imgcontacto} className="w-[50%]"></Image>

    </div>
)

}

export default PaginadeContacto

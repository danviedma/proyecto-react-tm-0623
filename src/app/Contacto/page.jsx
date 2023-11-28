import React from "react";

import Image from "next/image";

import Swal from 'sweetalert2'

import imgcontacto from  "@/app/asset/img/contacto.jpg";

function PaginadeContacto  () {

return (

   //  <div className="flex justify-center items-center">
    Swal.fire({
  title: "Recibimos tu solicitud!",
  text: "Nos comunicaremos en breve!",
  icon: "success"
})

    
)

}

export default PaginadeContacto


// Swal.fire({
 //   title: "Good job!",
 //   text: "You clicked the button!",
 //   icon: "success"
 //  });   
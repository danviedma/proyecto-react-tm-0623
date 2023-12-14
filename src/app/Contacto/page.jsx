"use client";

import React from "react";

import { useEffect } from "react";

import Swal from "sweetalert2";

import { useRouter } from "next/navigation";

function PaginadeContacto() {
  const router = useRouter();

  useEffect(() => {
    mostrarAlerta();
  }, []);

  const mostrarAlerta = () => {
    Swal.fire({
      title: "Recibimos tu solicitud!",
      text: "Nos comunicaremos en breve!",
      icon: "success",
    }).then((resultado) => {
      if (resultado.isConfirmed) {
        router.push("/");
      }
    });
  };

  return <div></div>;
}

export default PaginadeContacto;

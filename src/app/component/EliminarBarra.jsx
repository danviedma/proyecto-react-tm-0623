"use client"

import React, { useState } from 'react'


function EliminarBarra() {

    const [ocultarBarraSuperior, setocultarBarraSuperior] = useState(false);
  
    return (
      <>
       {/* } <Section> {ocultarBarraSuperior} </Section> */}
       
        <div onClick={
          () => setEstado(true)
        }>
        
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-3"
  
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>  
  
        </div>
        
      </>
    )
  
      }
  
  export default EliminarBarra
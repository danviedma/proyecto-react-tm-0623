"use client";

import React from "react";

import Link from "next/link";

import { useState } from "react";

const NavbarRespo = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between bg-red-800 p-4 lg:bg-blue-600 w-full">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <img
              src="data:image/png;base64,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"
              alt="logonlibreria"
              className="h-40 w-40 rounded-s-full"
            />
          </div>

          <div className="menu-container flex justify-around gap-x-20">
            <ul className="menu">
              <div className="list-none hidden md:flex justify-around">
                <li className="ml-4">
                  <Link
                    href="/"
                    className="text-white hover:text-gray-400 text-2xl border-b-1"
                  >
                    Inicio{" "}
                  </Link>
                </li>

                <li className="ml-4">
                  <Link
                    href="/galeria"
                    className="text-white hover:text-gray-400 text-2xl border-b-1"
                  >
                    Galería{" "}
                  </Link>
                </li>

                <li className="ml-4">
                  <Link
                    href="/Contacto"
                    className="text-white hover:text-gray-400 text-2xl border-b-1"
                  >
                    Contacto{" "}
                  </Link>
                </li>
              </div>
            </ul>
          </div>
          {/* </div> */}
          <div className="flex items-center ">
            <div className="mr-4">
              <a href="#" className="text-white hover:text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </a>
            </div>

            <div className="mr-4">
              <a href="#" className="text-white hover:text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </a>
            </div>

            <div className="mr-4">
              <a href="#" className="text-white hover:text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </a>
            </div>
          </div>

          <button className="md:hidden" onClick={() => setToggle(!toggle)}>
            {toggle ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mr-3 cursor-pointer bg-white"
                onClick={() => hiddenBarra}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="md:flex w-6 h-6 bg-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {toggle && (
        <ul className="sidebar p-0 ">
          <div className="bg: bg-blue-800 text-white p-4  rounded-md w-full flex flex-col items-center">
            <li>
              <Link
                href="/"
                className="text-white hover:text-gray-400 text-2xl border-b-1 "
              >
                Inicio{" "}
              </Link>
            </li>

            <li>
              <Link
                href="/galeria"
                className="text-white hover:text-gray-400 text-2xl border-b-1"
              >
                Galería{" "}
              </Link>
            </li>

            <li>
              <Link
                href="/Contacto"
                className="text-white hover:text-gray-400 text-2xl border-b-1"
              >
                Contacto{" "}
              </Link>
            </li>
          </div>
        </ul>
      )}
    </>
  );
};
export default NavbarRespo;

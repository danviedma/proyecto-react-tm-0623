import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const sections = [
  {
    title: "Equipo",
    items: [
      {
        name: "Leandro Romero",
        role: "Programador",
        links: [
          {
            name: "GitHub",
            icon: FaGithub,
            link: "https://github.com/Enomao86",
          },
          {
            name: "LinkedIn",
            icon: FaLinkedin,
            link: "https://www.linkedin.com/in/leandro-javier-romero-57b67127b/",
          },
        ],
      },
      {
        name: "Alejandro Egaña",
        role: "Programador",
        links: [
          {
            name: "GitHub",
            icon: FaGithub,
            link: "https://github.com/danviedma",
          },
          {
            name: "LinkedIn",
            icon: FaLinkedin,
            link: "https://www.linkedin.com/in/alejandro-ega%C3%B1a-viedma-26456ab5/",
          },
        ],
      },

      {
        name: "Pablo Vaserman",
        role: "Programador",
        links: [
          {
            name: "GitHub",
            icon: FaGithub,
            link: "https://github.com/pablovaserman",
          },
          {
            name: "LinkedIn",
            icon: FaLinkedin,
            link: "https://www.linkedin.com/in/PabloVaserman/",
          },
        ],
      },
      {
        name: "Edgar Scaltritti",
        role: "Programador",
        links: [
          {
            name: "GitHub",
            icon: FaGithub,
            link: "https://github.com/TuUsuarioDeGitHub",
          },
          {
            name: "LinkedIn",
            icon: FaLinkedin,
            link: "https://www.linkedin.com/in/tu-usuario-linkedin/",
          },
        ],
      },
    ],
  },
];

const Footer = () => {
  return (
    <div
      className="w-full mt-20 text-yellow-500  px-2 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://t4.ftcdn.net/jpg/03/78/60/17/360_F_378601778_juFD8HF4e0r0og5GCZWQBJwYJZLj5z8e.jpg')",
      }}
    >
      <div className="w-full  mx-auto grid grid-cols-1 md:grid-cols-3 border-b-2 border-gray-600 py-4">
        <div>
          <h6 className="font-bold uppercase pt-2 ml-10">Programadores</h6>
          <ul className="flex">
            {sections[0].items.map((programador, i) => (
              <li key={i} className={`py-1 text-black  text-center ml-4`}>
                {programador.name}
                <ul>
                  {programador.links.map((link, j) => (
                    <li key={j}>
                      <a
                        href={link.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <link.icon className="hover:text-yellow-500 mt-2 " />
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col max-w-[1240px] px-2 py-2 ml-10 justify-between sm:flex-row text-center text-gray-500 ">
        <p
          className=" text-center text-black"
          style={{ textShadow: "2px 2px 4px rgba(255, 255, 0, 0.7)" }}
        >
          2023 Nuestro proyecto React
        </p>
      </div>
    </div>
  );
};

export default Footer;

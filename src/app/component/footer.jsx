import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const sections = [
  {
    title: "Programadores",
    items: [
      "Leandro Romero",
      "Edgar Scaltritti",
      "Pablo Vaserman",
      "Alejandro Egaña",
    ],
  },
  {
    title: "Nuestro  Git Hub",
    items: [
      {
        name: "GitHub",
        icon: FaGithub,
        link: "https://github.com/Enomao86",
      },
      {
        name: "GitHub",
        icon: FaGithub,
        link: "https://github.com/TuUsuarioDeGitHub",
      },
      {
        name: "GitHub",
        icon: FaGithub,
        link: "https://github.com/TuUsuarioDeGitHub",
      },
      {
        name: "GitHub",
        icon: FaGithub,
        link: "https://github.com/TuUsuarioDeGitHub",
      },
    ],
  },
  {
    title: "Linkedin",
    items: [
      {
        name: "GitHub",
        icon: FaLinkedin,
        link: "https://www.linkedin.com/in/leandro-javier-romero-57b67127b/",
      },

      {
        name: "GitHub",
        icon: FaLinkedin,
        link: "https://github.com/TuUsuarioDeGitHub",
      },
      {
        name: "GitHub",
        icon: FaLinkedin,
        link: "https://github.com/TuUsuarioDeGitHub",
      },
      {
        name: "GitHub",
        icon: FaLinkedin,
        link: "https://github.com/TuUsuarioDeGitHub",
      },
    ],
  },
];

const Footer = () => {
  
    return (
        <div className="w-full mt-24 bg-slate-900 text-gray-300 py-4 px-2">
          <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-3 border-b-2 border-gray-600 py-4">
            <div>
              <h6 className="font-bold uppercase pt-2">Programadores</h6>
              <ul>
                {sections[0].items.map((item, i) => (
                  <li key={i} className={`py-1 text-gray-500 hover:text-white`}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
    
            <div>
              <h6 className="font-bold uppercase pt-2 text-center">Nuestro Git Hub</h6>
              <ul className="align-item-center" >
                {sections[1].items.map((item, i) => (
                  <li key={i} className={`mt-3 text-gray-500 hover:text-white pl-40 `}>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      <item.icon className="hover:text-white" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
    
            <div>
              <h6 className="font-bold uppercase pt-2 text-center">LinkedIn</h6>
              <ul>
                {sections[2].items.map((item, i) => (
                  <li key={i} className={`mt-3 text-gray-500 hover:text-white pl-40`}>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      <item.icon className="hover:text-white" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
    
          <div className="flex flex-col max-w-[1240px] px-2 py-2 mx-auto justify-between sm:flex-row text-center text-gray-500 ">
            <p className="py-2 text-center">2023 Nuestro proyecto React</p>
          </div>
        </div>
      );
    };
    
    export default Footer;

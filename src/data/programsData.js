import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FiFigma } from "react-icons/fi";

export const programsData = [
  {
    image: (
      <svg
        width="16"
        height="15"
        viewBox="0 0 16 15"
      >
        <AiFillHtml5 />

      </svg>
    ),
    heading: "HTML",
    details:
      "Possuo domínio é experiências solidas em HTML",
  },
  {
    image: <svg width="16" height="17" viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg">
      <IoLogoCss3 />
    </svg>,
    heading: "CSS",
    details:
      "Possuo domínio é experiências solidas em CSS ",
  },

  {
    image: <svg width="12" height="16" viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg">
      <SiJavascript />
    </svg>
    ,
    heading: "JAVASCRIPT",
    details:
      "Possuo domínio é experiências solidas na linguagem Javascript",
  },

  {
    image: <svg width="20" height="16" viewBox="0 0 20 16" xmlns="http://www.w3.org/2000/svg">
      <FaReact />
    </svg>
    ,
    heading: "REACTJS",
    details:
      "Possuo domínio é experiências solidas com a biblioteca ReactJs",
  },


  {
    image: <svg width="20" height="16" viewBox="0 0 20 16" xmlns="http://www.w3.org/2000/svg">
      <FiFigma />
    </svg>
    ,
    heading: "FIGMA",
    details:
      "Possuo domínio é experiências solidas com o Figma",
  },

  {
    image: <svg width="20" height="16" viewBox="0 0 20 16" xmlns="http://www.w3.org/2000/svg">
      <FaNodeJs />
    </svg>
    ,
    heading: "NODEJS",
    details:
      "Possuo domínio é experiências solidas com o NodeJs",
  },

  {
    image: <svg width="20" height="16" viewBox="0 0 20 16" xmlns="http://www.w3.org/2000/svg">
      <SiMysql />
    </svg>
    ,
    heading: "SQL",
    details:
      "Possuo conhecimentos com banco de dados MySQL",
  },

];
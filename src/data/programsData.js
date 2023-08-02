import { SiJavascript, SiMysql, SiPostgresql } from "react-icons/si";
import { FaReact, FaNodeJs, FaDocker } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { DiMongodb } from "react-icons/di";

const programsData = [
  {
    image: (
      <svg width="12" height="16" viewBox="0 0 12 16">
        <SiJavascript />
      </svg>
    ),
    id: 1,
    heading: "JAVASCRIPT",
    details: "Possuo domínio é experiências solidas na linguagem Javascript",
  },

  {
    image: (
      <svg width="20" height="16" viewBox="0 0 20 16">
        <FaReact />
      </svg>
    ),
    id: 2,
    heading: "REACTJS",
    details: "Possuo domínio é experiências solidas com a biblioteca ReactJs",
  },

  {
    image: (
      <svg width="20" height="16" viewBox="0 0 20 16">
        <FiFigma />
      </svg>
    ),
    id: 3,
    heading: "FIGMA",
    details: "Possuo domínio é experiências solidas com o Figma",
  },

  {
    image: (
      <svg width="20" height="16" viewBox="0 0 20 16">
        <FaNodeJs />
      </svg>
    ),
    id: 4,
    heading: "NODEJS",
    details: "Possuo domínio é experiências solidas com o NodeJs",
  },

  {
    image: (
      <svg width="20" height="16" viewBox="0 0 20 16">
        <SiMysql />
      </svg>
    ),
    id: 5,
    heading: "SQL",
    details: "Possuo conhecimentos com banco de dados MySQL",
  },
  {
    image: (
      <svg width="20" height="16" viewBox="0 0 20 16">
        <SiPostgresql />
      </svg>
    ),
    id: 6,
    heading: "POSTGRES",
    details: "Possuo conhecimentos com banco de dados Postgres",
  },

  {
    image: (
      <svg width="20" height="16" viewBox="0 0 20 16">
        <DiMongodb />
      </svg>
    ),
    id: 7,
    heading: "MONGODB",
    details: "Possuo conhecimentos com banco de dados MongoDB",
  },

  {
    image: (
      <svg width="20" height="16" viewBox="0 0 20 16">
        <FaDocker />
      </svg>
    ),
    id: 8,
    heading: "DOCKER",
    details: "Possuo conhecimentos com container Docker",
  },
];

export default programsData;

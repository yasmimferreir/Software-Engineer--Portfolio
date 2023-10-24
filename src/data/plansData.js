import projeto1 from "../assets/hvex-fronend.png";
import Projeto2 from "../assets/devclub-fullstack.png";
import Projeto3 from "../assets/devclub-back-end.svg";
import Projeto4 from "../assets/eccomerc-mercadoLivre.png";
import Projeto5 from "../assets/quiz.png";

export const plansData = [
  {
    Image: <img alt="img-projeto" src={projeto1} width="250" height="150" />,
    icon: <svg width="15" height="13" viewBox="0 0 15 13" xmlns=""></svg>,
    id: 1,
    url: "https://hvex-home.netlify.app/",
    features: [
      "Projeto focado na habilidade Front-end",
      "Desenvolvimento Fron-end",
      "Biblioteca ReactJs",
      "Web Responsive",
      "Utilização de React-router-dom",
      "Projeto concluído",
    ],
  },

  {
    Image: <img alt="img-projeto" src={Projeto2} width="250" height="150" />,
    icon: <svg width="28" height="24" viewBox="0 0 28 24"></svg>,
    id: 2,
    url: "https://github.com/yasmimferreir/Devclub-FrontEnd-CodeBurguer",
    features: [
      "Projeto focado nas habilidades Full Stack",
      "Desenvolvimento Full Stack",
      "Front-end com ReactJs",
      "Loja virtual de Fast-Food",
      "Sistema web completo e funcional",
      "Em andamento",
    ],
  },

  {
    Image: <img alt="img-projeto" src={Projeto3} width="250" height="150" />,
    icon: <svg width="16" height="15" viewBox="0 0 16 15"></svg>,
    id: 3,
    url: "https://github.com/yasmimferreir/Devclub-Backend-CodeBurguer",
    features: [
      "Projeto focado nas habilidades Back-end ",
      "Desenvolvimento Full Stack",
      "Back-end NodeJs",
      "Arquitetura de Software ⇒ MVC",
      "Container Docker",
      "Banco de Dados Postgres, MongoDB - concluído",
    ],
  },
  {
    Image: <img alt="img-projeto" src={Projeto4} width="250" height="150" />,
    icon: <svg width="16" height="15" viewBox="0 0 16 15"></svg>,
    id: 4,
    url: "https://ecommerc-mercadolivreapi.netlify.app/",
    features: [
      "Desenvolvimento Fron-end",
      "Biblioteca ReactJs",
      "Web Responsive",
      "Utilização de API",
      "API mercado Livre",
      "Projeto concluído",
    ],
  },
  {
    Image: <img alt="img-projeto" src={Projeto5} width="250" height="150" />,
    icon: <svg width="16" height="15" viewBox="0 0 16 15"></svg>,
    id: 5,
    url: "https://processoseletivo-quiz.netlify.app/",
    features: [
      "Projeto focado em JavaScript Puro",
      "Trabalho em Equipe",
      "Web Responsive",
      "Quiz com perguntas e respostas",
      "Jogo Quiz",
      "Projeto concluído",
    ],
  },
];

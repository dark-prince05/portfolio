import shoppingCart from "../../src/assets/shoppoing-cart.png";
import cvGen from "../../src/assets/cv-gen.png";
import memoryGame from "../../src/assets/memory-game.png";
import adminDashboard from "../../src/assets/admin-dashboard.png";
import ticTacToe from "../../src/assets/tic-tac-toe.png";

export default () => {
  return [
    {
      id: 1,
      title: "Shopping Cart",
      image: shoppingCart,
      desc: "Developed a fully responsive e-commerce application using ReactJS and React Router, featuring seamless client-side routing and dynamic page navigation. Styled the UI with custom CSS and media queries to ensure optimal performance across devices. Deployed the application on Netlify, delivering a fast and accessible user experience.",
      tech: "HTML, CSS, Javascript, ReactJs",
      demo: "https://dark-prince-shoppingcart.netlify.app/",
      github: "https://github.com/dark-prince05/shopping-cart",
    },
    {
      id: 2,
      title: "CV Generator",
      image: cvGen,
      desc: "Built a responsive CV generator using React.js, allowing users to input personal and professional details dynamically. Created reusable components to efficiently handle form inputs and maintain a structured layout. Implemented a real-time preview feature that instantly reflects user changes in the generated CV.",
      tech: "HTML, CSS, Javascript, ReactJs",
      demo: "https://dark-prince-cvgen.netlify.app/",
      github: "https://github.com/dark-prince05/cv-application",
    },
    {
      id: 3,
      title: "Memory Game",
      image: memoryGame,
      desc: "Developed an interactive memory game using React.js, where users must test their memory by avoiding repeated selections of the same Pokémon. Integrated the Pokémon API to dynamically fetch character data and images for each round. Built a responsive and engaging UI that updates game state in real-time, enhancing replayability and challenge.",
      tech: "HTML, CSS, Javascript, ReactJs",
      demo: "https://dark-prince-memorygame.netlify.app/",
      github: "https://github.com/dark-prince05/memory-game",
    },
    {
      id: 4,
      title: "Tic Tac Toe",
      image: ticTacToe,
      desc: "Developed a classic Tic Tac Toe game using HTML, CSS, and JavaScript, enabling two players to compete with real-time game logic and visual updates. Implemented win/draw detection and turn-based logic, with a clean and minimalistic user interface. Enhanced the UI with responsive design for smooth gameplay across devices.",
      tech: "HTML, CSS, Javascript",
      demo: "https://dark-prince05.github.io/tic-tac-toe/",
      github: "https://github.com/dark-prince05/tic-tac-toe",
    },
    {
      id: 5,
      title: "Admin Dashboard",
      image: adminDashboard,
      desc: "Crafted a admin dashboard using pure HTML, CSS, and JavaScript, showcasing a clean and modern UI design without relying on external frameworks. Designed with a focus on user experience, featuring intuitive layout sections like sidebar navigation, stat cards, and charts.",
      tech: "HTML, CSS, Javascript",
      demo: "https://dark-prince05.github.io/admin-dashboard/",
      github: "https://github.com/dark-prince05/admin-dashboard",
    },
  ];
};

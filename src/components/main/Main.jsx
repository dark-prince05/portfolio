import Hero from "../hero/Hero.jsx";
import About from "../about/About.jsx";
import Skills from "../skills/Skills.jsx";
import Projects from "../projects/Projects.jsx";
import Contact from "../contact/Contact.jsx";

export default function Main() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      {/* <Projects /> */}
      <Contact />
    </main>
  );
}

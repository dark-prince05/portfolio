import styles from "./about.module.css";
import reactLogo from "../../../src/assets/react.svg";

export default function About() {
  return (
    <section className={styles.aboutSection}>
      <h2 id="about" className={styles.title}>
        About <span>Me</span>
      </h2>
      <div className={styles.contentSection}>
        <div className={styles.logoContainer}>
          <img src={reactLogo} className={styles.logo} alt="react logo" />
        </div>
        <p className={styles.content}>
          As an enthusiastic and motivated frontend developer, I specialize in
          crafting clean, responsive, and user-focused web interfaces. With
          strong skills in <span>HTML, CSS, JavaScript</span>, and{" "}
          <span>React.js</span>, and a solid foundation in <span>Java</span>,
          I’m always exploring new ways to bring designs to life through code. I
          thrive in collaborative environments where I can combine creativity,
          problem-solving, and communication to create impactful digital
          experiences. As a final-year Computer Science student, I’m constantly
          learning and excited to apply my knowledge to real-world projects.
          Let’s connect and build something awesome together! Scroll down to
          check out some of the projects I’ve been working on and get a glimpse
          of the skills I’m developing.
        </p>
      </div>
    </section>
  );
}

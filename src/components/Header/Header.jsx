import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <a href="https://www.linkedin.com/in/barathraj-b-00542130a">
        Barath<span>raj</span>
      </a>
      <nav>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

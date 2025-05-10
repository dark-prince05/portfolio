import styles from "./header.module.css";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <a
        href="https://www.linkedin.com/in/barathraj-b-00542130a"
        target="_blank"
        rel="noopener norefferer"
      >
        Barath<span>raj.</span>
      </a>
      {!isMenuOpen && (
        <RxHamburgerMenu
          className={styles.hamburgerMenuIcon}
          onClick={handleClick}
        />
      )}
      <nav className={isMenuOpen ? styles.clicked : ""} onClick={handleClick}>
        {isMenuOpen && <RxCross2 className={styles.hamburgerMenuClose} />}
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

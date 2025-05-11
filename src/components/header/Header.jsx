import styles from "./header.module.css";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { Link } from "react-scroll";

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
        <Link to="about" smooth={true} duration={500}>
          About
        </Link>
        <Link to="skills" smooth={true} duration={500}>
          Skills
        </Link>
        <Link to="projects" smooth={true} duration={700}>
          Projects
        </Link>
        <Link to="contact" smooth={true} duration={700}>
          Contact
        </Link>
      </nav>
    </header>
  );
}

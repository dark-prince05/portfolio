import profilePic from "../../assets/profile.png";
import styles from "./hero.module.css";
export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.details}>
        <h1 className={`${styles.name} ${styles.typing}`}>
          Hi, <span>I'm Barathraj</span>
        </h1>
        <p className={styles.role}>Aspiring Frontend Developer</p>
        <div className={styles.info}>
          <a href="#contact">Contact Info</a>
          <a
            href="/assests/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </div>
      </div>

      <div className={styles.pictureContainer}>
        <svg viewBox="0 0 200 200" className={styles.circleBorder}>
          <circle
            cx="100"
            cy="100"
            r="99"
            strokeWidth="2"
            stroke="#00afff"
            strokeDasharray="25 10 10 25"
            fill="none"
            strokeLinecap="round"
          ></circle>
        </svg>
        <img
          className={styles.profilePic}
          src={profilePic}
          alt="profile picture"
        />
      </div>
    </section>
  );
}

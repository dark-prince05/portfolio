import styles from "./skill.module.css";
import images from "../images.js";

export default function Skills() {
  const imageList = images();

  return (
    <section id="skills" className={styles.skillSection}>
      <h2 className={styles.title}>
        Skills <span>& Tools</span>
      </h2>
      <div className={styles.skillContainer}>
        {imageList.map((item) => (
          <div key={item.id} className={styles.skills}>
            <img src={item.logo} alt={item.name} className={styles.skill} />
            <div className={styles.skillBackground}></div>
            <p className={styles.skillName}>{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

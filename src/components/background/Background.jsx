import styles from "./background.module.css";
export default function Background() {
  return (
    <body className={styles.bodyColor}>
      <div className={styles.bgAnimation}>
        <div id={styles.stars}></div>
        <div id={styles.stars2}></div>
        <div id={styles.stars3}></div>
        <div id={styles.stars4}></div>
      </div>
    </body>
  );
}

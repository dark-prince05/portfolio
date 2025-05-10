import styles from "./footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footerSection}>
      <div>
        © {year} Barath<span>raj</span>. All rights <span>reserved.</span>
      </div>
    </footer>
  );
}

import styles from "./footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div>
        © {year} Barath<span>raj</span>. All rights <span>reserved.</span>
      </div>
    </footer>
  );
}

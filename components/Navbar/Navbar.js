import styles from "./Navbar.module.scss";

export const Navbar = () => {
  return (
    <ul className={styles.navbar}>
      <li className={styles.navbar__item}>asparagus</li>
      <li className={styles.navbar__item}>ginger</li>
      <li className={styles.navbar__item}>mango</li>
    </ul>
  );
};

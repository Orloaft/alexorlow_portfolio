import styles from "../styles/Home.module.css";
import Dashboard from "./Dashboard.js";

export default function Home() {
  return (
    <div className={styles.container}>
      <Dashboard />
    </div>
  );
}

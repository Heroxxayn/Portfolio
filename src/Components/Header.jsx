import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <h1>AYAN SHARMA</h1>
      </div>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Project</a>
        <a href="">Contact</a>
        <div className={styles.enable}>
            <div className={styles.ball}></div>
        </div>
    </div>
  );
}

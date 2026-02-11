"use client";

import styles from "./Footer.module.css";
import { Twitter, Github, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <h3>Chronos Picker</h3>
            <p>A modern, accessible date & time picker for React applications.</p>
          </div>

          <div className={styles.social}>
            <a href="#" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="https://github.com/AnTIdoTe003/chronos-picker" aria-label="GitHub">
              <Github size={20} />
            </a>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>© {new Date().getFullYear()} The Engineer Guy. Released under MIT License.</p>
          <p className={styles.madeWith}>
            Made with <Heart size={14} fill="#ef4444" color="#ef4444" /> by developers, for developers
          </p>
        </div>
      </div>
    </footer>
  );
}

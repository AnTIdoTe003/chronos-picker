"use client";

import Link from "next/link";
import { Github, PlayCircle, BookOpen } from "lucide-react";
import styles from "./Navbar.module.css";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>🕐</span>
          <span className={styles.logoText}>Chronos Picker</span>
        </Link>

        <div className={styles.links}>
          <Link
            href="/docs/introduction"
            className={`${styles.link} ${pathname?.startsWith('/docs') ? styles.active : ''}`}
          >
            <BookOpen size={18} />
            <span>Docs</span>
          </Link>
          <Link
            href="/#demo"
            className={styles.link}
          >
            <PlayCircle size={18} />
            <span>Demo</span>
          </Link>
          <a
            href="https://github.com/AnTIdoTe003/chronos-picker"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubLink}
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

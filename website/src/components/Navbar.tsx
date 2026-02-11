"use client";

import Link from "next/link";
import { Github, PlayCircle, BookOpen, Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>🕐</span>
          <span className={styles.logoText}>Chronos Picker</span>
        </Link>

        <button
          type="button"
          className={styles.menuButton}
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`${styles.links} ${mobileOpen ? styles.linksOpen : ""}`}>
          <Link
            href="/docs/introduction"
            className={`${styles.link} ${pathname?.startsWith("/docs") ? styles.active : ""}`}
          >
            <BookOpen size={18} />
            <span>Docs</span>
          </Link>
          <Link href="/#demo" className={styles.link}>
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
      {mobileOpen && (
        <div
          className={styles.backdrop}
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}
    </nav>
  );
}

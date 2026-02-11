"use client";

import Link from "next/link";
import styles from "./Footer.module.css";
import { Twitter, Github, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <h3>Chronos Picker</h3>
            <p>A modern, accessible, timezone-aware date & time picker component for React applications.</p>
            <div className={styles.social}>
              <a href="https://github.com/AnTIdoTe003/chronos-picker" target="_blank" rel="noopener noreferrer" aria-label="GitHub - Chronos Picker">
                <Github size={20} />
              </a>
              <a href="https://www.npmjs.com/package/@theengineerguy/chronos-picker" target="_blank" rel="noopener noreferrer" aria-label="NPM Package">
                <span style={{ fontSize: '1.25rem' }}>📦</span>
              </a>
            </div>
          </div>

          <div className={styles.links}>
            <div className={styles.linkColumn}>
              <h4>Documentation</h4>
              <ul>
                <li><Link href="/docs/introduction">Getting Started</Link></li>
                <li><Link href="/docs/installation">Installation</Link></li>
                <li><Link href="/docs/usage">Usage Guide</Link></li>
                <li><Link href="/docs/api">API Reference</Link></li>
              </ul>
            </div>
            <div className={styles.linkColumn}>
              <h4>Resources</h4>
              <ul>
                <li><a href="https://github.com/AnTIdoTe003/chronos-picker" target="_blank" rel="noopener noreferrer">GitHub Repository</a></li>
                <li><a href="https://www.npmjs.com/package/@theengineerguy/chronos-picker" target="_blank" rel="noopener noreferrer">NPM Package</a></li>
                <li><a href="https://github.com/AnTIdoTe003/chronos-picker/issues" target="_blank" rel="noopener noreferrer">Report Issue</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>© {new Date().getFullYear()} Chronos Picker. Released under <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer">MIT License</a>.</p>
          <p className={styles.madeWith}>
            Made with <Heart size={14} fill="#ef4444" color="#ef4444" /> by Debmalya Mukherjee, for developers worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}

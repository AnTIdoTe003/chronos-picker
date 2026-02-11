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
            <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
              <a href="https://github.com/AnTIdoTe003/chronos-picker" target="_blank" rel="noopener noreferrer" aria-label="GitHub - Chronos Picker">
                <Github size={20} />
              </a>
              <a href="https://www.npmjs.com/package/@theengineerguy/chronos-picker" target="_blank" rel="noopener noreferrer" aria-label="NPM Package">
                <span style={{ fontSize: '1.25rem' }}>📦</span>
              </a>
            </div>
          </div>

          <div className={styles.links} style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
            <div>
              <h4 style={{ marginBottom: '0.5rem', fontWeight: 600 }}>Documentation</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li><Link href="/docs/introduction" style={{ textDecoration: 'none' }}>Getting Started</Link></li>
                <li><Link href="/docs/installation" style={{ textDecoration: 'none' }}>Installation</Link></li>
                <li><Link href="/docs/usage" style={{ textDecoration: 'none' }}>Usage Guide</Link></li>
                <li><Link href="/docs/api" style={{ textDecoration: 'none' }}>API Reference</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={{ marginBottom: '0.5rem', fontWeight: 600 }}>Resources</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li><a href="https://github.com/AnTIdoTe003/chronos-picker" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>GitHub Repository</a></li>
                <li><a href="https://www.npmjs.com/package/@theengineerguy/chronos-picker" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>NPM Package</a></li>
                <li><a href="https://github.com/AnTIdoTe003/chronos-picker/issues" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>Report Issue</a></li>
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

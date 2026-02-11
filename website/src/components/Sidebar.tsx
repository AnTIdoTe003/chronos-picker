"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Sidebar.module.css";

const sidebarLinks = [
  {
    category: "Getting Started",
    items: [
      { label: "Introduction", href: "/docs/introduction" },
      { label: "Installation", href: "/docs/installation" },
    ]
  },
  {
    category: "Guides",
    items: [
      { label: "Basic Usage", href: "/docs/usage" },
      { label: "Theming", href: "/docs/theming" },
    ]
  },
  {
    category: "API Reference",
    items: [
      { label: "DateTimePicker", href: "/docs/api" },
    ]
  }
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      {sidebarLinks.map((section, i) => (
        <div key={i} className={styles.section}>
          <h4 className={styles.category}>{section.category}</h4>
          <ul className={styles.list}>
            {section.items.map((item, j) => (
              <li key={j}>
                <Link
                  href={item.href}
                  className={`${styles.link} ${pathname === item.href ? styles.active : ''}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
}

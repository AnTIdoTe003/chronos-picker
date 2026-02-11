"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import styles from "./layout.module.css";
import sidebarStyles from "@/components/Sidebar.module.css";

const sidebarLinks = [
  {
    category: "Getting Started",
    items: [
      { label: "Introduction", href: "/docs/introduction" },
      { label: "Installation", href: "/docs/installation" },
    ],
  },
  {
    category: "Guides",
    items: [
      { label: "Basic Usage", href: "/docs/usage" },
      { label: "Theming", href: "/docs/theming" },
    ],
  },
  {
    category: "API Reference",
    items: [{ label: "DateTimePicker", href: "/docs/api" }],
  },
];

function SidebarContent() {
  const pathname = usePathname();
  return (
    <>
      {sidebarLinks.map((section, i) => (
        <div key={i} className={sidebarStyles.section}>
          <h4 className={sidebarStyles.category}>{section.category}</h4>
          <ul className={sidebarStyles.list}>
            {section.items.map((item, j) => (
              <li key={j}>
                <Link
                  href={item.href}
                  className={`${sidebarStyles.link} ${pathname === item.href ? sidebarStyles.active : ""}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

export default function DocsLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (typeof window !== "undefined" && window.innerWidth >= 769) {
        setSidebarOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  return (
    <div className={`${styles.container} ${sidebarOpen ? styles.sidebarOpen : ""}`}>
      <aside className={styles.sidebarDesktop}>
        <div className={sidebarStyles.sidebar}>
          <SidebarContent />
        </div>
      </aside>

      <div className={styles.mobileSidebar} aria-hidden={!sidebarOpen}>
        <div className={styles.mobileSidebarHeader}>
          <span>Docs</span>
          <button
            type="button"
            className={styles.closeButton}
            onClick={() => setSidebarOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <nav className={styles.mobileSidebarNav}>
          <SidebarContent />
        </nav>
      </div>

      {sidebarOpen && (
        <div
          className={styles.backdrop}
          onClick={() => setSidebarOpen(false)}
          onKeyDown={(e) => e.key === "Escape" && setSidebarOpen(false)}
          role="button"
          tabIndex={-1}
          aria-label="Close menu"
        />
      )}

      <div className={styles.content}>
        <button
          type="button"
          className={styles.mobileMenuButton}
          onClick={() => setSidebarOpen(true)}
          aria-label="Open docs menu"
        >
          <Menu size={20} />
          <span>Docs menu</span>
        </button>
        {children}
      </div>
    </div>
  );
}

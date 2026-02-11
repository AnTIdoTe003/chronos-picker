import Sidebar from "@/components/Sidebar";
import styles from "./layout.module.css";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
}

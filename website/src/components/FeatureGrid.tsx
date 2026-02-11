import { Globe, Moon, Keyboard, Zap } from "lucide-react";
import styles from "./FeatureGrid.module.css";

const features = [
  {
    icon: <Globe className={styles.icon} />,
    title: "Timezone Aware",
    description: "Built-in support for IANA timezone database with automatic DST handling using Luxon."
  },
  {
    icon: <Keyboard className={styles.icon} />,
    title: "Accessible",
    description: "Fully WCAG 2.1 compliant with keyboard navigation, ARIA labels, and focus management."
  },
  {
    icon: <Moon className={styles.icon} />,
    title: "Themeable",
    description: "Comes with dark mode support out of the box and easy CSS customization."
  },
  {
    icon: <Zap className={styles.icon} />,
    title: "Lightweight",
    description: "Minimal dependencies and optimized for performance with zero bloat."
  }
];

export default function FeatureGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Why Chronos Picker?</h2>
          <p>Everything you need for date and time selection in modern applications.</p>
        </div>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

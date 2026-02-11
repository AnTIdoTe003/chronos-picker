import { Globe, Moon, Keyboard, Zap, Lock, Smartphone } from "lucide-react";
import styles from "./FeatureGrid.module.css";

const features = [
  {
    icon: <Globe className={styles.icon} />,
    title: "Full Timezone Support",
    description: "Comprehensive IANA timezone database integration with automatic DST handling using Luxon. Handle dates across 400+ timezones effortlessly."
  },
  {
    icon: <Keyboard className={styles.icon} />,
    title: "WCAG 2.1 Accessible",
    description: "Fully compliant with web accessibility standards. Full keyboard navigation, ARIA labels, focus management, and screen reader support."
  },
  {
    icon: <Moon className={styles.icon} />,
    title: "Themeable & Dark Mode",
    description: "Built-in dark mode support with automatic detection. Easy CSS customization to match your brand colors and design system."
  },
  {
    icon: <Zap className={styles.icon} />,
    title: "Lightweight & Fast",
    description: "Minimal dependencies optimized for performance. Only requires React and Luxon - zero bloat, fast load times, and efficient rendering."
  },
  {
    icon: <Lock className={styles.icon} />,
    title: "Type-Safe",
    description: "Built with TypeScript for complete type safety. Full IntelliSense support and compile-time error checking for better development experience."
  },
  {
    icon: <Smartphone className={styles.icon} />,
    title: "Mobile Responsive",
    description: "Works perfectly on all devices and screen sizes. Touch-friendly interface optimized for mobile, tablet, and desktop experiences."
  }
];

export default function FeatureGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Why Choose Chronos Picker?</h2>
          <p>Everything you need for professional date and time selection in modern applications. Built for developers, by developers.</p>
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

        <div style={{ marginTop: '4rem', textAlign: 'center', color: '#666' }}>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
            Chronos Picker combines the power of a professional date and time picker with modern React best practices.
            Perfect for applications that need reliable timezone-aware datetime selection with accessibility as a priority.
          </p>
        </div>
      </div>
    </section>
  );
}

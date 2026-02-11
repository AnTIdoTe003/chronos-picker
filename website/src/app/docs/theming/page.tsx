import CodeBlock from "@/components/CodeBlock";
import styles from "../docs.module.css";

export default function Theming() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Theming</h1>
      <p className={styles.description}>
        Customize the look and feel to match your brand.
      </p>

      <section className={styles.section}>
        <h2>CSS Variables</h2>
        <p>
          Chronos Picker uses CSS variables for easy customization.
          You can override these in your global CSS.
        </p>

        <CodeBlock
          language="css"
          code={`:root {
  /* Brand Colors */
  --chronos-primary: #2563eb;
  --chronos-primary-foreground: #ffffff;

  /* Backgrounds */
  --chronos-bg: #ffffff;
  --chronos-bg-secondary: #f8fafc;

  /* Text */
  --chronos-text: #0f172a;
  --chronos-text-secondary: #64748b;

  /* Borders */
  --chronos-border: #e2e8f0;

  /* Layout */
  --chronos-radius: 0.5rem;
}`}
        />
      </section>

      <section className={styles.section}>
        <h2>Dark Mode</h2>
        <p>
          The picker supports dark mode automatically when using the variable approach.
          Simply update the variables inside a dark theme media query or class.
        </p>

        <CodeBlock
          language="css"
          code={`@media (prefers-color-scheme: dark) {
  :root {
    --chronos-bg: #1e293b;
    --chronos-text: #f8fafc;
    --chronos-border: #334155;
    /* ... other overrides */
  }
}`}
        />
      </section>

      <section className={styles.section}>
        <h2>Tailwind Integration</h2>
        <p>
          You can also pass custom class names to the picker components to style
          them using Tailwind utility classes.
        </p>

        <CodeBlock
          code={`<DateTimePicker
  className="shadow-lg border-2 border-indigo-500 rounded-xl"
/>`}
        />
      </section>
    </div>
  );
}

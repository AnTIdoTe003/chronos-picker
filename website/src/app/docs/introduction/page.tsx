import CodeBlock from "@/components/CodeBlock";
import styles from "../docs.module.css";
import Link from "next/link";

export default function Introduction() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Introduction</h1>
      <p className={styles.description}>
        A modern, accessible, and timezone-aware date & time picker for React applications.
      </p>

      <section className={styles.section}>
        <h2>Why Chronos Picker?</h2>
        <p>
          Building a date picker is hard. Building one that handles timezones correctly is even harder.
          Chronos Picker was built to solve the complex challenges of scheduling across different
          timezones while providing a beautiful, accessible user experience.
        </p>

        <div className={styles.note}>
          <strong>Key Benefit</strong>
          Unlike standard date pickers that operate in the user&apos;s local time, Chronos Picker
          allows you to specify exactly which timezone the selection should be made in.
        </div>

        <h3>Features</h3>
        <ul>
          <li><strong>Timezone Aware:</strong> Built on top of Luxon for robust timezone handling.</li>
          <li><strong>Accessible:</strong> Fully WCAG 2.1 compliant with keyboard navigation.</li>
          <li><strong>Modern UI:</strong> Clean aesthetics with smooth animations.</li>
          <li><strong>Responsive:</strong> optimized for mobile and desktop devices.</li>
          <li><strong>Type-Safe:</strong> Written in TypeScript with comprehensive type definitions.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Quick Start</h2>
        <p>Get up and running in seconds.</p>

        <CodeBlock
          language="bash"
          code="npm install @theengineerguy/chronos-picker luxon"
          title="Install via npm"
        />

        <p>Then import and use the component:</p>

        <CodeBlock
          code={`import { DateTimePicker } from "@theengineerguy/chronos-picker";
import "@theengineerguy/chronos-picker/dist/style.css";

function App() {
  return (
    <DateTimePicker
      onChange={(value) => console.log(value)}
      placeholder="Pick a date..."
    />
  );
}`}
        />

        <p>
          Check out the <Link href="/docs/installation" style={{ color: '#2563eb', textDecoration: 'underline' }}>Installation guide</Link> for more details.
        </p>
      </section>
    </div>
  );
}

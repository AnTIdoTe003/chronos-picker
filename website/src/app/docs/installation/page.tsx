import CodeBlock from "@/components/CodeBlock";
import styles from "../docs.module.css";

export default function Installation() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Installation</h1>
      <p className={styles.description}>
        Step-by-step guide to adding Chronos Picker to your project.
      </p>

      <section className={styles.section}>
        <h2>Prerequisites</h2>
        <p>
          Chronos Picker requires <strong>React 18</strong> or higher. It relies on
          <strong>Luxon</strong> for date manipulation, which will be installed ensuring minimal bundle size overhead.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Install Package</h2>
        <p>Run the following command in your terminal:</p>

        <CodeBlock
          language="bash"
          code="npm install @theengineerguy/chronos-picker luxon"
        />

        <p>Or if you are using Yarn:</p>

        <CodeBlock
          language="bash"
          code="yarn add @theengineerguy/chronos-picker luxon"
        />
      </section>

      <section className={styles.section}>
        <h2>Import Styles</h2>
        <p>
          Don&apos;t forget to import the CSS file. You usually want to do this at the top level
          of your application (e.g., <code>App.tsx</code>, <code>layout.tsx</code>, or <code>main.tsx</code>).
        </p>

        <CodeBlock
          code={`// In your main entry file
import "@theengineerguy/chronos-picker/dist/style.css";`}
        />
      </section>

      <section className={styles.section}>
        <h2>Next.js Setup</h2>
        <p>
          Chronos Picker is fully compatible with Next.js App Router. Since it involves
          user interaction, make sure to use it within a Client Component.
        </p>

        <CodeBlock
          code={`"use client";

import { DateTimePicker } from "@theengineerguy/chronos-picker";

export default function Page() {
  return <DateTimePicker />;
}`}
        />
      </section>
    </div>
  );
}

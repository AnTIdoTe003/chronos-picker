"use client";

import Link from "next/link";
import { ArrowRight, Github } from "lucide-react";
import styles from "./Hero.module.css";
import { DateTimePicker, DateTimeValue } from "@theengineerguy/chronos-picker";
import "@theengineerguy/chronos-picker/dist/style.css";
import { useState } from "react";

export default function Hero() {
  const [date, setDate] = useState<DateTimeValue | null>(null);

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>v1.0.2 Now Available</div>
          <h1 className={styles.title}>
            Timezone-Aware <br />
            <span className={styles.gradientText}>Date & Time Picker</span>
          </h1>
          <p className={styles.description}>
            A modern, accessible, and highly customizable React component for
            handling dates and times across different timezones with ease.
          </p>

          <div className={styles.actions}>
            <Link href="/docs/introduction" className={styles.primaryButton}>
              Get Started
              <ArrowRight size={18} />
            </Link>
            <a
              href="https://github.com/AnTIdoTe003/chronos-picker"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryButton}
            >
              <Github size={18} />
              GitHub
            </a>
          </div>

          <div className={styles.installCommand}>
            <code>npm install @theengineerguy/chronos-picker luxon</code>
          </div>
        </div>

        <div className={styles.demo}>
          <div className={styles.pickerWrapper}>
            <div className={styles.pickerHeader}>
              <div className={styles.dot} style={{ backgroundColor: '#ff5f56' }}></div>
              <div className={styles.dot} style={{ backgroundColor: '#ffbd2e' }}></div>
              <div className={styles.dot} style={{ backgroundColor: '#27c93f' }}></div>
            </div>
            <div className={styles.pickerBody}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: 500 }}>
                  Select Date & Time
                </label>
                <DateTimePicker
                  className={styles.dateTimePicker}
                  onChange={(val) => setDate(val)}
                  value={date?.dateTime}
                  timezone="Asia/Kolkata"
                />
              </div>

              {date && (
                <div className={styles.result}>
                  <div className={styles.resultItem}>
                    <span>ISO:</span>
                    <code>{date.iso}</code>
                  </div>
                  <div className={styles.resultItem}>
                    <span>Zone:</span>
                    <code>{date.dateTime.zoneName}</code>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Highlight, themes } from "prism-react-renderer";
import styles from "./CodeBlock.module.css";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

export default function CodeBlock({ code, language = "tsx", title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={styles.wrapper}>
      {title && <div className={styles.title}>{title}</div>}
      <div className={styles.container}>
        <button
          onClick={copyToClipboard}
          className={styles.copyButton}
          aria-label="Copy code"
        >
          {copied ? <Check size={16} color="#10b981" /> : <Copy size={16} />}
        </button>
        <Highlight
          theme={themes.vsDark}
          code={code.trim()}
          language={language}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={`${styles.pre} ${className}`} style={style}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  <span className={styles.lineNumber}>{i + 1}</span>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  );
}

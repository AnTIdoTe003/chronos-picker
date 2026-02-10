import React, { useState } from 'react';
import './CodeBlock.css';

interface CodeBlockProps {
  code: string;
  language: string;
  showLineNumbers?: boolean;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ 
  code, 
  language, 
  showLineNumbers = false 
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const lines = code.split('\n');

  return (
    <div className="code-block">
      <div className="code-block-header">
        <span className="code-block-language">{language}</span>
        <button 
          className="code-block-copy"
          onClick={handleCopy}
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>Copied!</span>
            </>
          ) : (
            <>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <div className="code-block-content">
        {showLineNumbers ? (
          <table className="code-table">
            <tbody>
              {lines.map((line, index) => (
                <tr key={index}>
                  <td className="line-number">{index + 1}</td>
                  <td className="line-content">
                    <code>{line}</code>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <pre><code>{code}</code></pre>
        )}
      </div>
    </div>
  );
};

export default CodeBlock;

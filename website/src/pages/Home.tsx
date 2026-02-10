import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DateTimePicker } from '@chronos/picker';
import type { DateTimeValue } from '@chronos/picker';
import CodeBlock from '../components/CodeBlock';
import './Home.css';

const Home: React.FC = () => {
  const [heroValue, setHeroValue] = useState<DateTimeValue | null>(null);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-gradient"></div>
          <div className="hero-pattern"></div>
        </div>
        
        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-icon">✨</span>
              <span>Production Ready v1.0.0</span>
            </div>
            
            <h1 className="hero-title animate-fade-in">
              Modern DateTime Picker
              <span className="gradient-text"> with Timezones</span>
            </h1>
            
            <p className="hero-subtitle animate-fade-in" style={{ animationDelay: '0.1s' }}>
              A beautiful, accessible, and fully-featured date & time picker for React.
              Built with TypeScript, powered by Luxon, designed for the modern web.
            </p>
            
            <div className="hero-actions animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Link to="/docs" className="btn btn-primary btn-lg">
                <span>Get Started</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
              
              <Link to="/playground" className="btn btn-secondary btn-lg">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
                <span>Try Live Demo</span>
              </Link>
            </div>
            
            <div className="hero-stats animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="hero-stat">
                <div className="hero-stat-value">400+</div>
                <div className="hero-stat-label">Timezones</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-value">~35 KB</div>
                <div className="hero-stat-label">Bundle Size</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-value">A11y</div>
                <div className="hero-stat-label">WCAG 2.1</div>
              </div>
            </div>
          </div>
          
          <div className="hero-demo animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="hero-demo-card">
              <div className="hero-demo-header">
                <div className="hero-demo-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span className="hero-demo-title">Live Demo</span>
              </div>
              
              <div className="hero-demo-content">
                <DateTimePicker
                  value={heroValue?.dateTime}
                  onChange={setHeroValue}
                  timezone="Asia/Kolkata"
                  showTimezoneSelector
                  placeholder="Try me! Select a date and time"
                />
                
                {heroValue && (
                  <div className="hero-demo-output">
                    <div className="output-item">
                      <span className="output-label">ISO:</span>
                      <code className="output-value">{heroValue.iso}</code>
                    </div>
                    <div className="output-item">
                      <span className="output-label">Formatted:</span>
                      <code className="output-value">{heroValue.formatted}</code>
                    </div>
                    <div className="output-item">
                      <span className="output-label">Timestamp:</span>
                      <code className="output-value">{heroValue.timestamp}</code>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Chronos Picker?</h2>
            <p className="section-subtitle">
              Everything you need in a modern date & time picker component
            </p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>
              <h3>Full Timezone Support</h3>
              <p>Complete IANA timezone database with automatic DST handling. Default to Asia/Kolkata or choose from 400+ timezones.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon" style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3>Accessible</h3>
              <p>WCAG 2.1 AA compliant with full keyboard navigation, ARIA labels, and screen reader support.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon" style={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <line x1="9" y1="9" x2="15" y2="15" />
                  <line x1="15" y1="9" x2="9" y2="15" />
                </svg>
              </div>
              <h3>Beautiful UI</h3>
              <p>Modern design with smooth animations, dark mode support, and responsive layout for all devices.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon" style={{ background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <h3>Developer Friendly</h3>
              <p>TypeScript support, comprehensive docs, minimal dependencies, and easy integration with your favorite forms library.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon" style={{ background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <h3>Lightweight</h3>
              <p>Only ~35 KB gzipped with Luxon. Tree-shakeable ESM bundle for optimal performance.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon" style={{ background: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3>Production Ready</h3>
              <p>Battle-tested, MIT licensed, and ready for production use in your React applications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="section quick-start-section">
        <div className="container container-narrow">
          <div className="section-header">
            <h2 className="section-title">Get Started in Seconds</h2>
            <p className="section-subtitle">
              Install and start using Chronos Picker in under a minute
            </p>
          </div>
          
          <div className="quick-start-steps">
            <div className="quick-start-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Install the package</h3>
                <CodeBlock language="bash" code="npm install @chronos/picker luxon" />
              </div>
            </div>
            
            <div className="quick-start-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Import and use</h3>
                <CodeBlock 
                  language="tsx" 
                  code={`import { DateTimePicker } from '@chronos/picker';

function App() {
  return (
    <DateTimePicker
      onChange={(value) => console.log(value.iso)}
      timezone="Asia/Kolkata"
    />
  );
}`}
                />
              </div>
            </div>
            
            <div className="quick-start-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>That's it! 🎉</h3>
                <p>You now have a fully functional date & time picker with timezone support.</p>
                <Link to="/docs" className="btn btn-primary">
                  View Full Documentation
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-card">
            <div className="cta-content">
              <h2>Ready to build something amazing?</h2>
              <p>Start using Chronos Picker in your React project today.</p>
            </div>
            <div className="cta-actions">
              <Link to="/docs" className="btn btn-white btn-lg">
                Get Started
              </Link>
              <a 
                href="https://github.com/yourusername/chronos-picker" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline btn-lg"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

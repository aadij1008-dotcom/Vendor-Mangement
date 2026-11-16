import { Component, type ErrorInfo, type ReactNode } from 'react';
import { MotionConfig } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Languages } from './components/Languages';
import { ValueProposition } from './components/ValueProposition';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

interface ErrorBoundaryState {
  hasError: boolean;
}

class PortfolioErrorBoundary extends Component<
  { children: ReactNode },
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Portfolio render error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-[#060B16] px-6 text-center text-slate-100">
          <h1 className="font-display text-2xl font-bold text-white">
            Aaditya Kashyap — Operations &amp; Vendor Management
          </h1>
          <p className="mt-3 max-w-md text-sm text-slate-400">
            Something went wrong while rendering the page. Please reload to view the portfolio.
          </p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="mt-6 rounded-lg bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-cyan-400 cursor-pointer"
          >
            Reload Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  return (
    <PortfolioErrorBoundary>
      <MotionConfig reducedMotion="user">
        <div className="min-h-screen bg-[#060B16] text-slate-100">
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-cyan-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-950"
          >
            Skip to main content
          </a>

          <Navbar />

          <main id="main-content">
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Education />
            <Languages />
            <ValueProposition />
            <Contact />
          </main>

          <Footer />
          <ScrollToTop />
        </div>
      </MotionConfig>
    </PortfolioErrorBoundary>
  );
}

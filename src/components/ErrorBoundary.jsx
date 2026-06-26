import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full min-h-screen bg-[#E9E2D4] text-[#0D0D0C] flex flex-col items-center justify-center p-6 selection:bg-[#C58B52]/30">
          <div
            aria-hidden="true"
            className="fixed inset-0 pointer-events-none z-[9998] noise-fine"
            style={{ mixBlendMode: 'multiply', opacity: 0.15 }}
          />
          <div
            aria-hidden="true"
            className="fixed inset-0 pointer-events-none z-[9999] noise-coarse"
            style={{ mixBlendMode: 'color-burn', opacity: 0.1 }}
          />

          <span className="font-general text-[10px] uppercase tracking-[0.4em] text-[#C58B52] mb-8 relative z-10">
            SYSTEM PAUSE
          </span>
          <h1 className="font-instrument text-5xl md:text-7xl text-[#0D0D0C] tracking-tight mb-8 text-center relative z-10 max-w-2xl">
            Something went wrong.
          </h1>
          <p className="font-cormorant text-xl md:text-2xl font-light text-[#0D0D0C]/80 text-center mb-16 relative z-10 max-w-xl leading-relaxed">
            Even the most perfect systems sometimes lose their balance. The page encountered an unexpected interruption.
          </p>

          <button
            onClick={() => {
              this.setState({ hasError: false, error: null });
              window.location.href = '/';
            }}
            className="relative z-10 group flex items-center gap-4 bg-[#0D0D0C] text-[#E9E2D4] px-8 py-4 hover:bg-[#C58B52] transition-colors duration-500"
          >
            <span className="font-general text-[10px] uppercase tracking-widest">
              Return to TATTVA
            </span>
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

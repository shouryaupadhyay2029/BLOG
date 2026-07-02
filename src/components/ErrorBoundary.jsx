import React from 'react';

/**
 * ErrorBoundary intercepts application runtime exceptions and dynamic lazy load chunk failures.
 * Rather than a generic error, it renders a premium, book-like editorial system pause screen
 * matching the TATTVA aesthetic with a dynamic recovery retry mechanism.
 */
export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log exception telemetry cleanly
    console.error("── TATTVA System Exception Caught ──");
    console.error("Message:", error.message);
    console.error("Component Stack:", errorInfo.componentStack);
    console.error("────────────────────────────────────");
  }

  render() {
    if (this.state.hasError) {
      // Check if the error is a dynamic code-splitting chunk load failure
      const isChunkLoadError = 
        this.state.error && 
        (this.state.error.name === 'ChunkLoadError' ||
         /dynamically imported module|loading chunk|Failed to fetch/i.test(this.state.error.message || ''));

      return (
        <div className="w-full min-h-screen bg-[#0A0A0A] text-[#EAE4D9] flex flex-col items-center justify-center p-6 selection:bg-[#C58B52]/30 relative overflow-hidden font-sans">
          
          {/* Subtle textured paper noise overlays */}
          <div
            aria-hidden="true"
            className="fixed inset-0 pointer-events-none z-[0] noise-fine opacity-20"
            style={{ mixBlendMode: 'overlay' }}
          />
          <div
            aria-hidden="true"
            className="fixed inset-0 pointer-events-none z-[0] noise-coarse opacity-15"
            style={{ mixBlendMode: 'soft-light' }}
          />

          <div className="relative z-10 flex flex-col items-center max-w-2xl text-center">
            
            {/* Archival category code */}
            <span 
              className="font-general text-[10px] uppercase tracking-[0.4em] text-[#C58B52] mb-6 block"
              style={{ letterSpacing: '0.4em' }}
            >
              [ {isChunkLoadError ? 'CONNECTION TIMEOUT' : 'SYSTEM PAUSE'} ]
            </span>
            
            {/* Elegant Cormorant Heading */}
            <h1 
              className="font-instrument italic text-5xl md:text-7xl text-[#EAE4D9] tracking-tight mb-8"
              style={{ fontFamily: '"Instrument Serif", serif' }}
            >
              {isChunkLoadError ? 'A Portal Interrupted.' : 'An Unexpected Dissolution.'}
            </h1>
            
            {/* Philosophical context paragraph */}
            <p className="font-cormorant text-xl md:text-2xl font-light text-[#C4BDB0] mb-12 max-w-lg leading-relaxed">
              {isChunkLoadError 
                ? 'A transmission error occurred while retrieving this segment of the archive. The connection may have faltered.'
                : 'The current query encountered a state of instability. The manifest form could not be rendered.'
              }
            </p>

            {/* Error Message Details Panel */}
            <div className="w-full max-w-lg border border-[#C58B52]/20 bg-[#121212] p-6 mb-12 text-left shadow-xl">
              <span className="font-general text-[9px] uppercase tracking-widest text-[#C58B52] block mb-2 font-semibold">
                Error Reference
              </span>
              <p className="font-mono text-xs text-[#C4BDB0]/80 break-all mb-4 leading-relaxed">
                {this.state.error && this.state.error.message}
              </p>
              
              {/* Expandable Debug Info */}
              <details className="group">
                <summary className="font-general text-[8.5px] uppercase tracking-wider text-[#C58B52]/60 cursor-pointer list-none flex items-center justify-between hover:text-[#C58B52] transition-colors select-none focus:outline-none">
                  <span>Show Diagnostic Stack</span>
                  <span className="transition-transform duration-300 group-open:rotate-180">▼</span>
                </summary>
                <pre className="font-mono text-[9px] text-red-400/70 mt-4 overflow-auto max-h-40 custom-scrollbar border-t border-[#C58B52]/10 pt-4 leading-normal whitespace-pre-wrap break-all">
                  {this.state.error && this.state.error.stack}
                </pre>
              </details>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <button
                onClick={() => {
                  this.setState({ hasError: false, error: null });
                  window.location.reload();
                }}
                className="group flex items-center justify-center gap-4 bg-[#EAE4D9] text-[#0A0A0A] px-8 py-4 hover:bg-white transition-all duration-300 border border-transparent font-medium shadow-md active:scale-95"
              >
                <span className="font-general text-[10px] uppercase tracking-widest">
                  Retry Connection
                </span>
              </button>
              
              <button
                onClick={() => {
                  this.setState({ hasError: false, error: null });
                  window.location.href = '/';
                }}
                className="group flex items-center justify-center gap-4 bg-transparent text-[#EAE4D9] px-8 py-4 hover:bg-[#EAE4D9]/10 transition-all duration-300 border border-[#EAE4D9]/30 active:scale-95"
              >
                <span className="font-general text-[10px] uppercase tracking-widest">
                  Return to Home
                </span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

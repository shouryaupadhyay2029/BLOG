import re
import sys

def migrate_typography(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Nav links
    content = content.replace(
        'font-general text-[9px] md:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] transition-colors duration-500 text-[#C58B52]',
        'tattva-nav-link transition-colors duration-500 text-[#C58B52]'
    )
    content = content.replace(
        'font-general text-[9px] md:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em] transition-colors duration-500 text-[#0D0D0C]/50 group-hover:text-[#C58B52]',
        'tattva-nav-link transition-colors duration-500 text-[#0D0D0C]/50 group-hover:text-[#C58B52]'
    )
    content = content.replace(
        'font-general text-[9px] uppercase tracking-[0.2em] transition-colors duration-700',
        'tattva-nav-link transition-colors duration-700'
    )
    
    # Pre-title
    content = content.replace(
        'font-general text-[9px] md:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.4em]',
        'tattva-nav-link'
    )

    # Hero Title
    content = content.replace(
        'font-instrument text-5xl md:text-7xl lg:text-8xl text-[#0D0D0C] tracking-tight mb-4 text-center leading-none',
        'tattva-hero-title mb-4 text-center'
    )
    
    # Sub title
    content = content.replace(
        'font-instrument text-4xl md:text-5xl text-[#0D0D0C]/80 tracking-tight mb-8 text-center leading-none',
        'tattva-section-title text-[#0D0D0C]/80 mb-8 text-center'
    )

    # Hero desc
    content = content.replace(
        'font-cormorant italic text-2xl text-[#0D0D0C]/70 max-w-2xl mx-auto text-center leading-relaxed',
        'tattva-hero-desc text-center mx-auto'
    )

    # Section titles
    content = content.replace(
        'font-instrument text-4xl md:text-5xl text-[#0D0D0C] tracking-tight mb-12 text-center',
        'tattva-section-title text-center mb-12'
    )
    content = content.replace(
        'font-instrument text-4xl md:text-5xl text-[#0D0D0C] tracking-tight mb-12',
        'tattva-section-title mb-12'
    )

    # Big quote
    content = content.replace(
        'font-instrument text-4xl md:text-6xl text-[#0D0D0C] tracking-tight leading-tight mb-12 italic',
        'tattva-verse text-center mb-12'
    )

    # Body paragraphs
    content = content.replace(
        'font-cormorant text-xl font-light text-[#0D0D0C]/80 leading-relaxed',
        'tattva-body text-[#0D0D0C]/80'
    )
    content = content.replace(
        'font-cormorant text-xl font-light text-[#0D0D0C]/90 leading-relaxed',
        'tattva-body text-[#0D0D0C]/90'
    )
    content = content.replace(
        'font-cormorant text-2xl font-light text-[#0D0D0C]/90 leading-relaxed',
        'tattva-body text-2xl text-[#0D0D0C]/90'
    )

    # Italic highlights
    content = content.replace(
        'font-cormorant text-2xl font-light text-[#C58B52] leading-relaxed',
        'tattva-body text-2xl text-[#C58B52]'
    )
    content = content.replace(
        'font-cormorant text-2xl font-medium text-[#C58B52] leading-relaxed italic',
        'tattva-verse text-2xl text-[#C58B52]'
    )
    
    # Notes & Quotes
    content = content.replace(
        'font-cormorant text-2xl font-light text-[#0D0D0C] italic leading-relaxed',
        'tattva-translation text-[#0D0D0C]'
    )
    content = content.replace(
        'font-cormorant text-xl md:text-2xl font-light text-[#0D0D0C]/80 leading-relaxed',
        'tattva-hero-desc text-[#0D0D0C]/80'
    )
    
    # Sub-bullets
    content = content.replace(
        'font-cormorant text-3xl md:text-4xl text-[#0D0D0C] leading-relaxed text-center font-light',
        'tattva-section-title text-[#0D0D0C] text-center font-light'
    )
    
    # Label elements
    content = content.replace(
        'font-general text-[8px] uppercase tracking-[0.3em]',
        'tattva-nav-link text-[8px]'
    )
    content = content.replace(
        'font-general text-[10px] tracking-widest',
        'tattva-nav-link'
    )

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Migrated typography in {filepath}")

migrate_typography(sys.argv[1])

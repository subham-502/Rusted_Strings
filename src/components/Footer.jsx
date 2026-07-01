import React, { useState, useEffect } from 'react';

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (!document.getElementById('editorial-footer-fonts')) {
      const link = document.createElement('link');
      link.id = 'editorial-footer-fonts';
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,900;1,6..96,900&family=Space+Grotesk:wght@400;500;600&display=swap';
      document.head.appendChild(link);
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const responsiveSection = {
    ...styles.section,
    height: '100vh',
    padding: isMobile ? '90px 5% 40px 5%' : '90px 8% 40px 8%'
  };

  const responsiveMainTitle = {
    ...styles.mainTitle,
    fontSize: isMobile ? '3.5rem' : '7.5rem',
  };

  const responsiveMetaRow = {
    ...styles.metaRow,
    flexDirection: isMobile ? 'column' : 'row',
    gap: isMobile ? '20px' : '0'
  };

  return (
    <section id="footer" style={responsiveSection}>
      <div style={styles.contentWrapper}>
        
        {/* Top/Center: Large Stylized Brand Statement */}
        <div style={styles.brandContainer}>
          <h1 style={responsiveMainTitle}>
            RUSTED STRINGS
          </h1>
          <p style={styles.tagline}>ROCK | METAL | POP | REGAE & more</p>
        </div>

        {/* Bottom: Fine Print, Navigation Links, and Credits */}
        <div style={responsiveMetaRow}>
          <div style={styles.metaGroup}>
            <span style={styles.metaLabel}>NAVIGATION</span>
            <div style={styles.linksGroup}>
              <a href="#about" style={styles.footerLink}>About</a>
              <a href="#gallery" style={styles.footerLink}>Gallery</a>
              <a href="#epk" style={styles.footerLink}>EPK</a>
              <a href="#contact" style={styles.footerLink}>Contact</a>
            </div>
          </div>

          <div style={styles.metaGroup}>
            <span style={styles.metaLabel}>Mailing List</span>
            <span style={styles.metaValue}>updates@rustedstrings.com</span>
          </div>

          <div style={{ ...styles.metaGroup, alignItems: isMobile ? 'flex-start' : 'flex-end' }}>
            <span style={styles.copyright}>© 2026 RUSTED STRINGS.</span>
            <span style={styles.credit}>ALL RIGHTS RESERVED.</span>
          </div>
        </div>

      </div>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: '#050505',
    color: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between', // Pushes brand statement to center-top and metadata to the absolute bottom
    alignItems: 'center',
    width: '100vw',
    boxSizing: 'border-box',
    overflow: 'hidden',
    borderTop: '1px solid #111'
  },
  contentWrapper: {
    width: '100%',
    maxWidth: '1400px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: '20px'
  },
  brandContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1, // Let it gracefully take up the central vertical screen real estate
    textAlign: 'center'
  },
  mainTitle: {
    fontFamily: '"Bodoni Moda", serif',
    fontWeight: '900',
    letterSpacing: '-2px',
    lineHeight: '0.95',
    color: '#ffffff',
    margin: 0,
    textTransform: 'uppercase'
  },
  italicAmp: {
    fontFamily: '"Bodoni Moda", serif',
    fontStyle: 'italic',
    fontWeight: '400',
    color: '#ff3366'
  },
  tagline: {
    fontFamily: '"Space Grotesk", sans-serif',
    fontSize: '0.85rem',
    fontWeight: '600',
    letterSpacing: '4px',
    color: '#666666',
    marginTop: '20px',
    textTransform: 'uppercase'
  },
  metaRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    borderTop: '1px solid #141414',
    paddingTop: '40px',
    width: '100%'
  },
  metaGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  metaLabel: {
    fontFamily: '"Space Grotesk", sans-serif',
    fontSize: '0.75rem',
    fontWeight: '600',
    color: '#ff3366',
    letterSpacing: '2px',
    textTransform: 'uppercase'
  },
  metaValue: {
    fontFamily: '"Space Grotesk", sans-serif',
    fontSize: '0.95rem',
    color: '#888888'
  },
  linksGroup: {
    display: 'flex',
    gap: '20px'
  },
  footerLink: {
    fontFamily: '"Space Grotesk", sans-serif',
    fontSize: '0.95rem',
    color: '#888888',
    textDecoration: 'none',
    transition: 'color 0.2s ease',
    ':hover': {
      color: '#ffffff'
    }
  },
  copyright: {
    fontFamily: '"Space Grotesk", sans-serif',
    fontSize: '0.85rem',
    fontWeight: '500',
    color: '#444444',
    letterSpacing: '1px'
  },
  credit: {
    fontFamily: '"Space Grotesk", sans-serif',
    fontSize: '0.7rem',
    fontWeight: '600',
    color: '#333333',
    letterSpacing: '2px'
  }
};
import React, { useState, useEffect } from 'react';

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  // Dynamic layout injection for the high-contrast editorial font style
  useEffect(() => {
    if (!document.getElementById('editorial-hero-font')) {
      const link = document.createElement('link');
      link.id = 'editorial-hero-font';
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,900;1,6..96,900&family=Playfair+Display:ital,wght@1,400;1,600&display=swap';
      document.head.appendChild(link);
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Compute responsive styling variables targeting the full screen height
  const responsiveHero = {
    ...styles.hero,
    height: '100vh', 
    padding: isMobile ? '90px 5% 40px 5%' : '90px 8% 60px 8%',
    
    /* 🔥 PURE CSS PARALLAX ENGINE
       Pins the canvas asset on desktop layers, but scales back to standard scrolling for mobile performance */
    backgroundAttachment: isMobile ? 'scroll' : 'fixed',
    backgroundPosition: 'center center',
  };

  const responsiveSubtitle = {
    ...styles.heroSubtitle,
    fontSize: isMobile ? '1.4rem' : '2.2rem', 
  };

  const responsiveTitle = {
    ...styles.heroTitle,
    fontSize: isMobile ? '2.4rem' : '4.5rem',
    marginBottom: isMobile ? '20px' : '30px',
  };

  const responsiveBtn = {
    ...styles.listenBtn,
    padding: isMobile ? '12px 30px' : '14px 40px',
    fontSize: isMobile ? '1rem' : '1.1rem',
  };

  return (
    <section style={responsiveHero}>
      <div style={styles.heroContent}>
        <h3 style={responsiveSubtitle}>Let's have some fun</h3>
        <h1 style={responsiveTitle}>
          CONCERTS, SHOWS <span style={styles.ampersand}>&</span> MORE
        </h1>
        <a href="#contact" style={responsiveBtn}>BOOK NOW</a>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    position: 'relative',
    backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.95)), url('https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2000')`,
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center', 
    transition: 'all 0.2s ease',
    width: '100vw',
    boxSizing: 'border-box'
  },
  heroContent: {
    maxWidth: '850px',
  },
  heroSubtitle: {
    margin: '0 0 10px 0',
    letterSpacing: '0.5px',
    fontFamily: '"Playfair Display", serif',
    fontStyle: 'italic',
    fontWeight: '600',
    color: '#ff3366',
    textTransform: 'none', 
    transition: 'font-size 0.2s ease',
  },
  heroTitle: {
    margin: '0 0 25px 0',
    letterSpacing: '-1px',
    textTransform: 'uppercase',
    fontFamily: '"Bodoni Moda", serif',
    fontWeight: '900',
    color: '#ffffff',
    lineHeight: '1.05',
    transition: 'font-size 0.2s ease',
  },
  ampersand: {
    fontFamily: '"Bodoni Moda", serif',
    fontStyle: 'italic',
    color: '#ff3366',
    fontWeight: '400',
  },
  listenBtn: {
    display: 'inline-block',
    backgroundColor: '#b31031',
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
    borderRadius: '4px',
    letterSpacing: '1px',
    fontFamily: '"Arial Black", sans-serif',
    transition: 'all 0.2s ease',
  }
};
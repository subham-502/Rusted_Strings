import React, { useState, useEffect } from 'react';

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  // Dynamic device layout tracking system
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Compute layout structure on the fly
  const responsiveHero = {
    ...styles.hero,
    height: isMobile ? '55vh' : '65vh', // Slightly reduced height container block footprint on mobile
    padding: isMobile ? '0 5% 40px 5%' : '0 8% 60px 8%',
    backgroundPosition: isMobile ? 'center center' : 'center 30%', // Recenter image subject focus area
  };

  const responsiveSubtitle = {
    ...styles.heroSubtitle,
    fontSize: isMobile ? '1.2rem' : '1.8rem',
  };

  const responsiveTitle = {
    ...styles.heroTitle,
    fontSize: isMobile ? '2.2rem' : '3.5rem', // Scales down smoothly so text blocks don't overrun screens
    marginBottom: isMobile ? '20px' : '25px',
  };

  const responsiveBtn = {
    ...styles.listenBtn,
    padding: isMobile ? '10px 28px' : '12px 35px',
    fontSize: isMobile ? '1rem' : '1.1rem',
  };

  return (
    <section style={responsiveHero}>
      <div style={styles.heroContent}>
        <h2 style={responsiveSubtitle}>NEW ALBUM</h2>
        <h1 style={responsiveTitle}>"STORM THE GATES" - OUT NOW</h1>
        <a href="#music" style={responsiveBtn}>LISTEN NOW</a>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    position: 'relative',
    backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.9)), url('https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2000')`,
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    transition: 'all 0.2s ease',
  },
  heroContent: {
    maxWidth: '700px',
  },
  heroSubtitle: {
    margin: '0 0 5px 0',
    letterSpacing: '1px',
    fontFamily: '"Impact", "Arial Black", sans-serif', // Kept brand rock aesthetic layout uniform
    fontWeight: '800',
    color: '#ff3366', // Accent contrast bump 
    transition: 'font-size 0.2s ease',
  },
  heroTitle: {
    margin: '0 0 25px 0',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontFamily: '"Impact", sans-serif',
    color: '#ffffff',
    lineHeight: '1.1', // Tightened text leading aspect spacing for better block styling on mobiles
    transition: 'font-size 0.2s ease',
  },
  listenBtn: {
    display: 'inline-block',
    backgroundColor: '#b31031',
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
    borderRadius: '4px',
    letterSpacing: '1px',
    fontFamily: '"Impact", "Arial Black", sans-serif',
    transition: 'all 0.2s ease',
  }
};
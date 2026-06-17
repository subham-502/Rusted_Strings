import React from 'react';

export default function Hero() {
  return (
    <section style={styles.hero}>
      <div style={styles.heroContent}>
        <h2 style={styles.heroSubtitle}>NEW ALBUM</h2>
        <h1 style={styles.heroTitle}>"STORM THE GATES" - OUT NOW</h1>
        <a href="#music" style={styles.listenBtn}>LISTEN NOW</a>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    height: '65vh',
    position: 'relative',
    backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.85)), url('https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2000')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center 30%',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    padding: '0 8% 60px 8%',
  },
  heroContent: {
    maxWidth: '700px',
  },
  heroSubtitle: {
    fontSize: '1.8rem',
    margin: '0 0 5px 0',
    letterSpacing: '1px',
    fontFamily: 'sans-serif',
    fontWeight: '800',
  },
  heroTitle: {
    fontSize: '3.5rem',
    margin: '0 0 25px 0',
    letterSpacing: '1px',
    textTransform: 'uppercase',
  },
  listenBtn: {
    display: 'inline-block',
    backgroundColor: '#b31031',
    color: '#fff',
    textDecoration: 'none',
    padding: '12px 35px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    borderRadius: '4px',
    letterSpacing: '1px',
  }
};
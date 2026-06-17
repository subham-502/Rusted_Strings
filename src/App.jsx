import React from 'react';
import Header from './components/Header';
import SocialSidebar from './components/SocialSidebar'; // 💡 Imported the floating social panel
import Hero from './components/Hero';
import Bio from './components/Bio';
import Gallery from './components/Gallery';
import EPK from './components/EPK'; 
import Contact from './components/Contact';

export default function App() {
  return (
    <div style={styles.appContainer}>
      {/* Pinned Navigation Bar */}
      <Header />

      {/* Floating Booking Channels Panel */}
      <SocialSidebar />

      {/* Main Sections Stream */}
      <main style={styles.mainContent}>
        
        {/* 1. Music Anchor Zone */}
        <section id="music">
          <Hero />
        </section>

        {/* 2. About Anchor Zone */}
        <section id="about">
          <Bio />
        </section>

        {/* 3. Gallery Anchor Zone */}
        <section id="gallery">
          <Gallery />
        </section>

        {/* 4. EPK Anchor Zone */}
        <section id="epk">
          <EPK />
        </section>

        {/* 5. Contact Anchor Zone */}
        <section id="contact">
          <Contact />
        </section>
        
      </main>

      {/* Footer System */}
      <footer style={styles.footer}>
        <p>© 2026 Rusted Strings. All rights reserved.</p>
      </footer>
    </div>
  );
}

const styles = {
  appContainer: {
    backgroundColor: '#000000',
    color: '#ffffff',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    overflowX: 'hidden', // Keeps the layout stable and cuts out horizontal viewport wiggle
  },
  mainContent: {
    flex: 1,
  },
  footer: {
    textAlign: 'center',
    padding: '40px',
    color: '#555',
    fontSize: '0.9rem',
    borderTop: '1px solid #111',
    backgroundColor: '#050505',
  }
};
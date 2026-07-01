import React from 'react';
import Header from './components/Header';
import SocialSidebar from './components/SocialSidebar'; 
import Hero from './components/Hero';
import Bio from './components/Bio';
import Gallery from './components/Gallery';
import EPK from './components/EPK'; 
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={styles.appContainer}>
      {/* 1. Global Aesthetic Injector (Scrollbars & Micro-Hover States) */}
      <style>{`
        /* Smooth Custom Editorial Scrollbar Track */
        ::-webkit-scrollbar {
          width: 5px;
        }
        ::-webkit-scrollbar-track {
          background: #0a0a0a;
        }
        ::-webkit-scrollbar-thumb {
          background: #222222;
          border-radius: 4px;
          transition: background 0.2s ease;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #ff3366; /* Interactive signature accent pulse */
        }

        /* Pagination Dot Interactions */
        .nav-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.25);
          transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
          text-decoration: none;
        }
        .nav-dot:hover {
          background-color: #ff3366;
          transform: scale(1.6);
          box-shadow: 0 0 10px rgba(255, 51, 102, 0.6);
        }
      `}</style>

      {/* Pinned Navigation Bar */}
      <Header />

      {/* Floating Booking Channels Panel */}
      <SocialSidebar />

      {/* 2. Fixed Pagination Sidebar */}
      <div style={styles.paginationDock}>
        <a href="#music" className="nav-dot" title="Music Anchor" />
        <a href="#about" className="nav-dot" title="About Anchor" />
        <a href="#gallery" className="nav-dot" title="Gallery Anchor" />
        <a href="#epk" className="nav-dot" title="EPK Anchor" />
        <a href="#contact" className="nav-dot" title="Contact Anchor" />
        <a href="#footer" className="nav-dot" title="Conclusion" />
      </div>

      {/* Main Sections Stream */}
      <main style={styles.mainContent}>
        
        {/* Each component sits in its own strict 100vh layout snap-lane */}
        <div style={styles.snapSection} id="music">
          <Hero />
        </div>

        <div style={styles.snapSection} id="about">
          <Bio />
        </div>

        <div style={styles.snapSection} id="gallery">
          <Gallery />
        </div>

        <div style={styles.snapSection} id="epk">
          <EPK />
        </div>

        <div style={styles.snapSection} id="contact">
          <Contact />
        </div>
        
        <div style={styles.snapSection} id="footer">
          <Footer />
        </div>
        
      </main>
    </div>
  );
}

const styles = {
  appContainer: {
    backgroundColor: '#000000',
    color: '#ffffff',
    height: '100vh',                // Imperative to lock viewport framing height
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'scroll',            // Enables continuous vertical scroll tracks
    overflowX: 'hidden',            // Cuts out horizontal viewport wiggle entirely
    scrollSnapType: 'y mandatory',  // Enforces structural slide matching on scroll release
    scrollBehavior: 'smooth',       // Silky gliding transitions on header links click
    // Ambient low-contrast texture shift backdrop
    background: 'linear-gradient(180deg, #000000 0%, #050505 50%, #000000 100%)',
  },
  mainContent: {
    flex: 1,
    width: '100%',
  },
  snapSection: {
    scrollSnapAlign: 'start',       // Instructs browser where to catch snap bounds
    height: '100vh',
    width: '100vw',
    position: 'relative'
  },
  paginationDock: {
    position: 'fixed',
    right: '35px',
    top: '50%',
    transform: 'translateY(-50%)',
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
    zIndex: 99,                     // Floats beautifully underneath navigation but over view content panels
  }
};
import React, { useState, useEffect } from 'react';
import logoImg from './logo.jpeg'; 

export default function Header() {
  const [activeSection, setActiveSection] = useState('music');
  // State to track which link index is currently being hovered over
  const [hoveredLink, setHoveredLink] = useState(null);

  useEffect(() => {
    const sections = ['music', 'about', 'gallery', 'epk', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Menu navigation data array for cleaner rendering
  const navItems = [
    { id: 'music', label: 'MUSIC' },
    { id: 'about', label: 'ABOUT' },
    { id: 'gallery', label: 'GALLERY' },
    { id: 'epk', label: 'EPK' },
    { id: 'contact', label: 'CONTACT' }
  ];

  // Computes combination of base, active, and hover inline states dynamically
  const getLinkStyle = (id) => {
    let combinedStyle = { ...styles.navLink };

    if (activeSection === id) {
      combinedStyle = { ...combinedStyle, ...styles.activeNavLink };
    }

    if (hoveredLink === id) {
      combinedStyle = { ...combinedStyle, ...styles.hoverNavLink };
    }

    return combinedStyle;
  };

  return (
    <header style={styles.header}>
      {/* Logo Wrapper Container */}
      <div style={styles.logoContainer}>
        <img 
          src={logoImg} 
          alt="Rusted Strings Logo" 
          style={styles.logoImage} 
        />
      </div>

      {/* Interactive Navigation Menu */}
      <nav style={styles.nav}>
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            style={getLinkStyle(item.id)}
            onMouseEnter={() => setHoveredLink(item.id)}
            onMouseLeave={() => setHoveredLink(null)}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 8%',
    height: '90px',
    backgroundColor: 'rgba(0, 0, 0, 0.45)', 
    backdropFilter: 'blur(8px)', 
    WebkitBackdropFilter: 'blur(8px)', 
    position: 'fixed',       
    top: 0,
    left: 0,
    width: '100vw',         
    zIndex: 100,            
    boxSizing: 'border-box' 
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    height: '100%',
  },
  logoImage: {
    height: '122px', 
    width: 'auto',
    objectFit: 'contain',
    backgroundColor: 'transparent',
    transition: 'transform 0.3s ease', // Smooth transition if you want scaling later
  },
  nav: {
    display: 'flex',
    gap: '30px',
    alignItems: 'center',
  },
  navLink: {
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '0.95rem',
    fontFamily: '"Impact", "Arial Black", sans-serif',
    fontWeight: 'normal',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    paddingBottom: '4px',
    borderBottom: '2px solid transparent',
    // 💡 Added strict timing control to make color fading feel incredibly fluid
    transition: 'border-color 0.2s ease, color 0.2s ease', 
  },
  activeNavLink: {
    borderBottom: '2px solid #b31031',
    color: '#b31031',
  },
  // 💡 New custom state injected instantly when mouse positions over a link item
  hoverNavLink: {
    color: '#ff3355',              // Bright neon rock red highlight variant on point
    borderBottom: '2px solid #ff3355',
    cursor: 'pointer'
  }
};
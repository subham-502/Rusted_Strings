import React, { useState, useEffect } from 'react';
import logoImg from './logo.jpeg'; 

export default function Header() {
  const [activeSection, setActiveSection] = useState('music');
  const [hoveredLink, setHoveredLink] = useState(null);
  
  // 💡 New Mobile Specific States
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Listen for viewport layout breaking changes
  useEffect(() => {
    const handleResize = () => {
      const mobileActive = window.innerWidth <= 768;
      setIsMobile(mobileActive);
      // Auto-close menu if user drags screen wider to desktop size
      if (!mobileActive) setMenuOpen(false);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    // Intersection Observer logic for scroll tracking
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

    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, []);

  const navItems = [
    { id: 'music', label: 'MUSIC' },
    { id: 'about', label: 'ABOUT' },
    { id: 'gallery', label: 'GALLERY' },
    { id: 'epk', label: 'EPK' },
    { id: 'contact', label: 'CONTACT' }
  ];

  const getLinkStyle = (id) => {
    let combinedStyle = { ...styles.navLink };

    // Mobile adjustments to link layout padding
    if (isMobile) {
      combinedStyle = { ...combinedStyle, ...styles.mobileNavLink };
    }

    if (activeSection === id) {
      combinedStyle = { ...combinedStyle, ...styles.activeNavLink };
    }

    if (hoveredLink === id) {
      combinedStyle = { ...combinedStyle, ...styles.hoverNavLink };
    }

    return combinedStyle;
  };

  return (
    <header style={{...styles.header, padding: isMobile ? '0 5%' : '0 8%'}}>
      {/* Logo Wrapper Container */}
      <div style={styles.logoContainer}>
        <img 
          src={logoImg} 
          alt="Rusted Strings Logo" 
          style={{...styles.logoImage, height: isMobile ? '90px' : '122px'}} // Slightly downscales logo height on phone
        />
      </div>

      {/* 🍔 Mobile Burger Trigger Button */}
      {isMobile && (
        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          style={styles.burgerButton}
          aria-label="Toggle Navigation Menu"
        >
          {/* Animated or changing lines based on toggle open/close status */}
          <div style={{...styles.burgerLine, transform: menuOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none'}} />
          <div style={{...styles.burgerLine, opacity: menuOpen ? 0 : 1}} />
          <div style={{...styles.burgerLine, transform: menuOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none'}} />
        </button>
      )}

      {/* Interactive Navigation Menu Container */}
      <nav style={{
        ...(isMobile ? styles.mobileNavMenu : styles.nav),
        top: isMobile ? (menuOpen ? '90px' : '-400px') : 'auto', // Slides down gracefully when triggered
        opacity: isMobile ? (menuOpen ? 1 : 0) : 1
      }}>
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            style={getLinkStyle(item.id)}
            onMouseEnter={() => setHoveredLink(item.id)}
            onMouseLeave={() => setHoveredLink(null)}
            onClick={() => setMenuOpen(false)} // Closes screen instantly on selection click
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
    height: '90px',
    backgroundColor: 'rgba(0, 0, 0, 0.75)', // Slightly dark opacity background for premium mobile shielding
    backdropFilter: 'blur(10px)', 
    WebkitBackdropFilter: 'blur(10px)', 
    position: 'fixed',       
    top: 0,
    left: 0,
    width: '100vw',         
    zIndex: 100,            
    boxSizing: 'border-box',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    transition: 'all 0.3s ease'
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    height: '100%',
  },
  logoImage: {
    width: 'auto',
    objectFit: 'contain',
    backgroundColor: 'transparent',
    transition: 'height 0.3s ease',
  },
  nav: {
    display: 'flex',
    gap: '30px',
    alignItems: 'center',
  },
  // 💡 Translucent drop panel slide menu injected for mobile profiles
  mobileNavMenu: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    left: 0,
    width: '100vw',
    backgroundColor: 'rgba(5, 5, 5, 0.95)',
    backdropFilter: 'blur(15px)',
    WebkitBackdropFilter: 'blur(15px)',
    padding: '30px 0',
    gap: '24px',
    alignItems: 'center',
    borderBottom: '2px solid #b31031',
    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
    zIndex: 99
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
    transition: 'border-color 0.2s ease, color 0.2s ease', 
  },
  mobileNavLink: {
    fontSize: '1.3rem', // Larger touch targets on mobile
    letterSpacing: '2px',
    width: '80%',
    textAlign: 'center',
    padding: '8px 0'
  },
  activeNavLink: {
    borderBottom: '2px solid #b31031',
    color: '#b31031',
  },
  hoverNavLink: {
    color: '#ff3355',              
    borderBottom: '2px solid #ff3355',
    cursor: 'pointer'
  },
  // 🍔 Mobile Burger Icon Styles
  burgerButton: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '26px',
    height: '18px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    zIndex: 101,
  },
  burgerLine: {
    width: '100%',
    height: '2px',
    backgroundColor: '#ffffff',
    transition: 'all 0.25s ease',
    transformOrigin: 'left center'
  }
};
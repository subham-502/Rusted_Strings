import React, { useState, useEffect, useRef } from 'react';
import logoImg from './logo.jpeg';

const navItems = [
  { id: 'music',   label: 'MUSIC' },
  { id: 'about',   label: 'ABOUT' },
  { id: 'gallery', label: 'GALLERY' },
  { id: 'epk',     label: 'EPK' },
  { id: 'contact', label: 'CONTACT' },
];

export default function Header() {
  const [activeSection, setActiveSection]   = useState('music');
  const [hoveredLink, setHoveredLink]       = useState(null);
  const [isMobile, setIsMobile]             = useState(false);
  const [menuOpen, setMenuOpen]             = useState(false);
  const [scrolled, setScrolled]             = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const navRef = useRef(null);
  const linkRefs = useRef({});

  useEffect(() => {
    // Google Font injection
    if (!document.getElementById('editorial-nav-font')) {
      const link = document.createElement('link');
      link.id = 'editorial-nav-font';
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz,wght@6..96,600;6..96,800&display=swap';
      document.head.appendChild(link);
    }

    // Resize handler
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) setMenuOpen(false);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    // Scroll handler — shrinks header after 60px
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);

    // Intersection Observer for active section
    const observerOptions = { root: null, rootMargin: '-50% 0px -50% 0px', threshold: 0 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, observerOptions);
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  // Gliding underline indicator
  useEffect(() => {
    const activeEl = linkRefs.current[hoveredLink || activeSection];
    const navEl = navRef.current;
    if (activeEl && navEl) {
      const navRect = navEl.getBoundingClientRect();
      const elRect  = activeEl.getBoundingClientRect();
      setIndicatorStyle({
        left:    elRect.left - navRect.left,
        width:   elRect.width,
        opacity: 1,
      });
    }
  }, [hoveredLink, activeSection]);

  const headerHeight = scrolled ? '68px' : '90px';

  return (
    <>
      <style>{`
        .nav-link {
          position: relative;
          color: #fff;
          text-decoration: none;
          font-family: "Bodoni Moda", serif;
          font-size: 1.05rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          padding-bottom: 4px;
          transition: color 0.2s ease;
        }
        .nav-link.active { color: #ff3366; font-weight: 800; }
        .nav-link:hover  { color: #ff3366; }

        .mobile-nav-link {
          color: #fff;
          text-decoration: none;
          font-family: "Bodoni Moda", serif;
          font-size: 1.6rem;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          width: 80%;
          text-align: center;
          padding: 10px 0;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          transition: color 0.2s ease, letter-spacing 0.2s ease;
        }
        .mobile-nav-link:hover,
        .mobile-nav-link.active { color: #ff3366; letter-spacing: 2px; }

        .burger-line {
          width: 100%;
          height: 2px;
          background: #fff;
          transition: all 0.25s ease;
          transform-origin: left center;
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <header style={{
        display:         'flex',
        justifyContent:  'space-between',
        alignItems:      'center',
        height:          headerHeight,
        backgroundColor: scrolled ? 'rgba(0,0,0,0.92)' : 'rgba(0,0,0,0.65)',
        backdropFilter:  'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        position:        'fixed',
        top:             0, left: 0,
        width:           '100vw',
        zIndex:          100,
        boxSizing:       'border-box',
        padding:         isMobile ? '0 5%' : '0 8%',
        borderBottom:    scrolled
          ? '1px solid rgba(255,51,102,0.25)'
          : '1px solid rgba(255,255,255,0.05)',
        transition:      'height 0.3s ease, background-color 0.3s ease, border-color 0.3s ease',
      }}>

        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'flex-start', height: '100%' }}>
          <img
            src={logoImg}
            alt="Rusted Strings Logo"
            style={{
              height:     isMobile ? '80px' : (scrolled ? '78px' : '100px'),
              width:      'auto',
              objectFit:  'contain',
              transition: 'height 0.3s ease',
            }}
          />
        </div>

        {/* Desktop nav */}
        {!isMobile && (
          <nav ref={navRef} style={{ display: 'flex', gap: '30px', alignItems: 'center', position: 'relative' }}>
            {navItems.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                ref={(el) => (linkRefs.current[id] = el)}
                className={`nav-link${activeSection === id ? ' active' : ''}`}
                onMouseEnter={() => setHoveredLink(id)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {label}
              </a>
            ))}

            {/* Gliding underline */}
            <span style={{
              position:   'absolute',
              bottom:     0,
              left:       indicatorStyle.left,
              width:      indicatorStyle.width,
              height:     '2px',
              background: 'linear-gradient(to right, #ff3366, #c0112e)',
              opacity:    indicatorStyle.opacity,
              transition: 'left 0.28s cubic-bezier(0.4,0,0.2,1), width 0.28s cubic-bezier(0.4,0,0.2,1), opacity 0.2s',
              borderRadius: '2px',
              pointerEvents: 'none',
            }} />
          </nav>
        )}

        {/* Mobile burger */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display:        'flex',
              flexDirection:  'column',
              justifyContent: 'space-between',
              width:  '26px',
              height: '18px',
              background: 'none',
              border:     'none',
              cursor:     'pointer',
              padding:    0,
              zIndex:     101,
            }}
            aria-label="Toggle navigation"
          >
            <div className="burger-line" style={{ transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
            <div className="burger-line" style={{ opacity: menuOpen ? 0 : 1 }} />
            <div className="burger-line" style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
          </button>
        )}
      </header>

      {/* Mobile slide-down menu — rendered outside header so it doesn't clip */}
      {isMobile && menuOpen && (
        <nav style={{
          position:        'fixed',
          top:             headerHeight,
          left:            0,
          width:           '100vw',
          backgroundColor: 'rgba(4,4,4,0.97)',
          backdropFilter:  'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          display:         'flex',
          flexDirection:   'column',
          alignItems:      'center',
          gap:             '0',
          paddingBottom:   '20px',
          borderBottom:    '2px solid #b31031',
          zIndex:          99,
          animation:       'slideDown 0.3s cubic-bezier(0.4,0,0.2,1)',
        }}>
          {/* Red accent strip at top of menu */}
          <div style={{ width: '100%', height: '1px', background: 'linear-gradient(to right, transparent, #ff3366, transparent)', marginBottom: '10px' }} />

          {navItems.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`mobile-nav-link${activeSection === id ? ' active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </>
  );
}
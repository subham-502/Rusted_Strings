import React, { useState, useEffect } from 'react';

export default function Bio() {
  const [isMobile, setIsMobile] = useState(false);

  // Dynamic viewport tracking system
  useEffect(() => {
    if (!document.getElementById('editorial-bio-font')) {
      const link = document.createElement('link');
      link.id = 'editorial-bio-font';
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz,wght@6..96,600;6..96,900&family=Space+Grotesk:wght@400;500&display=swap';
      document.head.appendChild(link);
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const members = [
    { name: 'Alex', role: 'Vocals & Guitar' },
    { name: 'Sam', role: 'Lead Guitar' },
    { name: 'Jordan', role: 'Bass' },
    { name: 'Casey', role: 'Drums' },
  ];

  // Dynamic responsive styles calculation for full-screen layout tracking
  const responsiveSection = {
    ...styles.section,
    height: '100vh', // Forces the container to cover the entire viewport height
    padding: isMobile ? '90px 5% 40px 5%' : '90px 8% 0 8%', // 90px top padding protects against header clipping
  };

  const responsiveGrid = {
    ...styles.grid,
    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
    gap: isMobile ? '30px' : '80px',
    width: '100%',
  };

  const responsiveHeading = {
    ...styles.heading,
    fontSize: isMobile ? '2.5rem' : '4rem',
    marginBottom: isMobile ? '20px' : '40px',
  };

  return (
    <section id="about" style={responsiveSection}>
      <div style={styles.contentWrapper}>
        <h2 style={responsiveHeading}>OUR STORY</h2>
        <div style={responsiveGrid}>
          <div style={styles.textContainer}>
            <p style={styles.paragraph}>
              Formed in late 2023, Rusted Strings was born from the wreckage of the underground 
              scene. We blend raw, heavy guitar riffs with atmospheric electronic textures 
              to create a sound that feels both nostalgic and futuristic.
            </p>
            <p style={styles.paragraph}>
              We've played from dive bars to festival stages, always with one goal: 
              to create an immersive experience that leaves the crowd ringing.
            </p>
            <div>
              <a href="/band-press-kit.pdf" download style={styles.downloadBtn}>
                DOWNLOAD EPK
              </a>
            </div>
          </div>

          <div style={styles.members}>
            <h3 style={styles.subHeading}>THE BAND</h3>
            {members.map((m, i) => (
              <div key={i} style={styles.memberCard}>
                <span style={styles.memberName}>{m.name}</span>
                <span style={styles.memberRole}>{m.role}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: { 
    backgroundColor: '#050505', 
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', // Centers text blocks vertically within the full viewport frame
    alignItems: 'center',
    width: '100vw',
    boxSizing: 'border-box',
    transition: 'padding 0.2s ease',
    overflow: 'hidden'
  },
  contentWrapper: {
    width: '100%',
    maxWidth: '1400px', // Prevents layout over-stretching on huge monitors
    display: 'flex',
    flexDirection: 'column'
  },
  heading: { 
    letterSpacing: '-1px',
    fontFamily: '"Bodoni Moda", serif',
    fontWeight: '900',
    textTransform: 'uppercase',
    alignSelf: 'flex-start',
    transition: 'font-size 0.2s ease'
  },
  grid: { 
    display: 'grid', 
    alignItems: 'start',
    transition: 'all 0.2s ease'
  },
  textContainer: { 
    display: 'flex', 
    flexDirection: 'column', 
    gap: '20px' 
  },
  paragraph: { 
    fontSize: '1.05rem', 
    color: '#b5b5b5', 
    lineHeight: '1.7',
    fontFamily: '"Space Grotesk", sans-serif'
  },
  downloadBtn: { 
    display: 'inline-block', 
    marginTop: '10px', 
    padding: '14px 32px', 
    backgroundColor: '#ffffff', 
    color: '#000', 
    textDecoration: 'none', 
    fontWeight: 'bold',
    letterSpacing: '1px',
    fontFamily: '"Space Grotesk", sans-serif',
    fontSize: '0.9rem',
    textAlign: 'center',
    transition: 'transform 0.2s ease'
  },
  subHeading: { 
    color: '#ff3366', 
    marginBottom: '10px',
    fontFamily: '"Space Grotesk", sans-serif',
    fontWeight: '600',
    letterSpacing: '2px',
    fontSize: '0.9rem'
  },
  members: { 
    display: 'flex', 
    flexDirection: 'column', 
    gap: '5px' 
  },
  memberCard: { 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    borderBottom: '1px solid #141414', 
    padding: '16px 0' 
  },
  memberName: { 
    fontFamily: '"Bodoni Moda", serif',
    fontWeight: '600',
    fontSize: '1.3rem'
  },
  memberRole: { 
    fontFamily: '"Space Grotesk", sans-serif',
    color: '#888',
    fontSize: '0.95rem'
  }
};
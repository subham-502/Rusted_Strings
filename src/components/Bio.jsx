import React, { useState, useEffect } from 'react';

export default function Bio() {
  const [isMobile, setIsMobile] = useState(false);

  // Dynamic viewport tracking system
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Initial check and event listener initialization
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

  // Dynamic styles calculation based on current viewport size
  const responsiveGrid = {
    ...styles.grid,
    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
    gap: isMobile ? '40px' : '80px',
  };

  const responsiveSection = {
    ...styles.section,
    padding: isMobile ? '60px 5%' : '80px 8%',
  };

  const responsiveHeading = {
    ...styles.heading,
    fontSize: isMobile ? '2.2rem' : '3rem',
    marginBottom: isMobile ? '25px' : '40px',
  };

  return (
    <section id="about" style={responsiveSection}>
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
    </section>
  );
}

const styles = {
  section: { 
    backgroundColor: '#050505', 
    color: '#fff',
    transition: 'padding 0.2s ease'
  },
  heading: { 
    letterSpacing: '2px',
    fontFamily: '"Impact", "Arial Black", sans-serif', // Uniform rock branding
    transition: 'font-size 0.2s ease'
  },
  grid: { 
    display: 'grid', 
    transition: 'all 0.2s ease'
  },
  textContainer: { 
    display: 'flex', 
    flexDirection: 'column', 
    gap: '20px' 
  },
  paragraph: { 
    fontSize: '1.05rem', 
    color: '#ccc', 
    lineHeight: '1.7' 
  },
  downloadBtn: { 
    display: 'inline-block', 
    marginTop: '10px', 
    padding: '14px 28px', 
    backgroundColor: '#fff', 
    color: '#000', 
    textDecoration: 'none', 
    fontWeight: 'bold',
    letterSpacing: '1px',
    fontFamily: '"Impact", "Arial Black", sans-serif',
    textAlign: 'center',
    transition: 'transform 0.2s ease'
  },
  subHeading: { 
    color: '#ff3366', 
    marginBottom: '10px',
    fontFamily: '"Impact", "Arial Black", sans-serif',
    letterSpacing: '1px',
    fontSize: '1.5rem'
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
    borderBottom: '1px solid #1a1a1a', 
    padding: '16px 0' 
  },
  memberName: { 
    fontWeight: 'bold',
    fontSize: '1.1rem'
  },
  memberRole: { 
    color: '#888',
    fontSize: '0.95rem'
  }
};
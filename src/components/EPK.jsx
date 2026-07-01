import React, { useState, useEffect } from 'react';

export default function EPK() {
  const [isMobile, setIsMobile] = useState(false);

  // Viewport checking listener system & Google Font loader
  useEffect(() => {
    if (!document.getElementById('editorial-epk-fonts')) {
      const link = document.createElement('link');
      link.id = 'editorial-epk-fonts';
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz,wght@6..96,900&family=Space+Grotesk:wght@400;500;600;700&display=swap';
      document.head.appendChild(link);
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const stats = [
    { label: 'Sounds Like', value: 'Nine Inch Nails, Muse, QOTSA' }, // Trimmed slightly for seamless fit on mobile grids
    { label: 'Origin', value: 'Austin, TX' },
    { label: 'Active Since', value: '2023' },
    { label: 'Live Setup', value: '4-Piece Band' }
  ];

  const pressQuotes = [
    { quote: "An absolute wall of sound. The most explosive live rock act to emerge this year.", source: "IndieRock Monthly" },
    { quote: "Rusted Strings seamlessly blends alternative grit with massive hooks.", source: "The Underground Pulse" }
  ];

  // Dynamic layout definitions calculated natively based on device profile
  const responsiveSection = {
    ...styles.section,
    height: '100vh',
    padding: isMobile ? '90px 5% 40px 5%' : '90px 8% 0 8%' // 90px top padding keeps everything perfectly below fixed header
  };

  const responsiveHeading = {
    ...styles.heading,
    fontSize: isMobile ? '2.5rem' : '4rem',
    marginBottom: isMobile ? '15px' : '30px'
  };

  const responsiveDownloadBar = {
    ...styles.downloadBar,
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: isMobile ? 'flex-start' : 'center',
    gap: isMobile ? '12px' : '15px',
    marginBottom: isMobile ? '25px' : '40px',
  };

  const responsiveGrid = {
    ...styles.grid,
    gridTemplateColumns: isMobile ? '1fr' : '1fr 1.2fr',
    gap: isMobile ? '30px' : '60px'
  };

  const responsiveStatRow = {
    ...styles.statRow,
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: isMobile ? 'flex-start' : 'center',
    gap: isMobile ? '4px' : '0'
  };

  return (
    <section id="epk" style={responsiveSection}>
      <div style={styles.contentWrapper}>
        <h2 style={responsiveHeading}>ELECTRONIC PRESS KIT</h2>
        
        {/* Quick Download Dashboard */}
        <div style={responsiveDownloadBar}>
          <span style={styles.barLabel}>⚡ INDUSTRY ASSETS:</span>
          <div style={styles.linksGroup}>
            <a href="#" style={styles.downloadLink}>⬇ Promo Photos (Hi-Res)</a>
            <a href="#" style={styles.downloadLink}>⬇ Tech Rider & Stage Plot</a>
            <a href="#" style={styles.downloadLink}>⬇ Full Band Bio (PDF)</a>
          </div>
        </div>

        <div style={responsiveGrid}>
          {/* Left Column: Quick Facts & Press Quotes */}
          <div style={styles.leftCol}>
            <h3 style={styles.subHeading}>QUICK FACTS</h3>
            <div style={styles.statsCard}>
              {stats.map((stat, i) => (
                <div key={i} style={responsiveStatRow}>
                  <span style={styles.statLabel}>{stat.label}:</span>
                  <span style={{...styles.statValue, maxWidth: isMobile ? '100%' : '70%', textAlign: isMobile ? 'left' : 'right'}}>{stat.value}</span>
                </div>
              ))}
            </div>

            <h3 style={{...styles.subHeading, marginTop: isMobile ? '25px' : '35px'}}>RECENT PRESS</h3>
            {pressQuotes.map((p, i) => (
              <blockquote key={i} style={styles.blockquote}>
                <p style={styles.quoteText}>"{p.quote}"</p>
                <cite style={styles.cite}>— {p.source}</cite>
              </blockquote>
            ))}
          </div>

          {/* Right Column: Live Video Embed Placeholder & Requirements */}
          <div style={styles.rightCol}>
            <h3 style={styles.subHeading}>FEATURED LIVE PERFORMANCE</h3>
            <div style={{...styles.videoPlaceholder, height: isMobile ? '160px' : '200px'}}>
              <div style={{fontSize: '1.8rem'}}>🎬</div>
              <p style={{marginTop: '8px', color: '#666', fontSize: '0.85rem', fontFamily: '"Space Grotesk", sans-serif'}}>
                [ YouTube / Vimeo Live Session Embed ]
              </p>
            </div>

            <h3 style={{...styles.subHeading, marginTop: isMobile ? '25px' : '35px'}}>STAGE & AUDIO REQUIREMENTS</h3>
            <ul style={styles.bulletList}>
              <li>Total inputs required: 12 (4 vocal mics, 2 guitar DIs, 1 bass DI, 5 drum mics).</li>
              <li>Monitors: 4 independent stage monitor mixes required (In-ear compatible).</li>
              <li>Power: Minimum 3 dedicated 15A drop circuits on stage.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: '#0a0a0a',
    color: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', // Snaps elements cleanly to central focus points on screens
    alignItems: 'center',
    width: '100vw',
    boxSizing: 'border-box',
    transition: 'padding 0.2s ease',
    overflow: 'hidden'
  },
  contentWrapper: {
    width: '100%',
    maxWidth: '1400px',
    display: 'flex',
    flexDirection: 'column'
  },
  heading: {
    fontFamily: '"Bodoni Moda", serif',
    fontWeight: '900',
    letterSpacing: '-1px',
    textTransform: 'uppercase',
    alignSelf: 'flex-start',
    transition: 'font-size 0.2s ease'
  },
  downloadBar: {
    backgroundColor: '#111111',
    padding: '14px 24px',
    borderRadius: '2px',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    border: '1px solid #1c1c1c',
    transition: 'all 0.2s ease'
  },
  barLabel: {
    fontFamily: '"Space Grotesk", sans-serif',
    fontWeight: '700',
    fontSize: '0.85rem',
    color: '#ff3366',
    letterSpacing: '1px'
  },
  linksGroup: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  downloadLink: {
    fontFamily: '"Space Grotesk", sans-serif',
    color: '#b5b5b5',
    fontSize: '0.85rem',
    textDecoration: 'none',
    fontWeight: '500',
    borderBottom: '1px dashed #333',
    paddingBottom: '2px',
    transition: 'color 0.2s ease'
  },
  grid: {
    display: 'grid',
    width: '100%',
    transition: 'gap 0.2s ease'
  },
  leftCol: {},
  rightCol: {},
  subHeading: {
    fontFamily: '"Space Grotesk", sans-serif',
    fontSize: '0.9rem',
    letterSpacing: '2px',
    color: '#ff3366',
    marginBottom: '15px',
    fontWeight: '600',
    textTransform: 'uppercase'
  },
  statsCard: {
    backgroundColor: '#111',
    padding: '5px 20px',
    borderRadius: '2px',
    border: '1px solid #141414'
  },
  statRow: {
    display: 'flex',
    padding: '12px 0',
    borderBottom: '1px solid #141414',
    fontSize: '0.95rem',
    fontFamily: '"Space Grotesk", sans-serif',
    justifyContent: 'space-between'
  },
  statLabel: {
    color: '#666',
    fontWeight: '500'
  },
  statValue: {
    fontFamily: '"Bodoni Moda", serif', // Elegant serif rendering for stats metrics
    fontWeight: '600',
    color: '#fff',
  },
  blockquote: {
    margin: '0 0 15px 0',
    paddingLeft: '15px',
    borderLeft: '2px solid #ff3366',
    color: '#ccc',
    lineHeight: '1.6'
  },
  quoteText: {
    fontFamily: '"Space Grotesk", sans-serif',
    fontSize: '1rem',
    fontStyle: 'italic',
    margin: 0
  },
  cite: {
    display: 'block',
    fontFamily: '"Space Grotesk", sans-serif',
    fontSize: '0.8rem',
    color: '#555',
    marginTop: '6px',
    letterSpacing: '1px',
    fontStyle: 'normal',
    fontWeight: '600',
    textTransform: 'uppercase'
  },
  videoPlaceholder: {
    width: '100%',
    backgroundColor: '#111',
    border: '1px dashed #222',
    borderRadius: '2px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'height 0.2s ease'
  },
  bulletList: {
    fontFamily: '"Space Grotesk", sans-serif',
    color: '#aaa',
    fontSize: '0.95rem',
    lineHeight: '1.7',
    paddingLeft: '20px',
    margin: 0
  }
};
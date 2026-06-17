import React, { useState, useEffect } from 'react';

export default function EPK() {
  const [isMobile, setIsMobile] = useState(false);

  // Viewport checking listener system
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const stats = [
    { label: 'Sounds Like', value: 'Nine Inch Nails, Muse, Queens of the Stone Age' },
    { label: 'Origin', value: 'Austin, TX' },
    { label: 'Active Since', value: '2023' },
    { label: 'Live Setup', value: '4-Piece (Vocals/Gt, Gt, Bass, Drums)' }
  ];

  const pressQuotes = [
    { quote: "An absolute wall of sound. The most explosive live rock act to emerge this year.", source: "IndieRock Monthly" },
    { quote: "Rusted Strings seamlessly blends heavy alternative grit with massive electronic hooks.", source: "The Underground Pulse" }
  ];

  // Dynamic layout definitions calculated natively based on device profile
  const responsiveSection = {
    ...styles.section,
    padding: isMobile ? '50px 5%' : '60px 8%'
  };

  const responsiveHeading = {
    ...styles.heading,
    fontSize: isMobile ? '2.2rem' : '2.5rem',
    marginBottom: isMobile ? '20px' : '30px'
  };

  const responsiveDownloadBar = {
    ...styles.downloadBar,
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: isMobile ? 'flex-start' : 'center',
    gap: isMobile ? '12px' : '15px',
    marginBottom: isMobile ? '35px' : '50px',
  };

  const responsiveGrid = {
    ...styles.grid,
    gridTemplateColumns: isMobile ? '1fr' : '1fr 1.2fr',
    gap: isMobile ? '40px' : '60px'
  };

  const responsiveStatRow = {
    ...styles.statRow,
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: isMobile ? 'flex-start' : 'center',
    gap: isMobile ? '4px' : '0'
  };

  return (
    <section id="epk" style={responsiveSection}>
      <h2 style={responsiveHeading}>ELECTRONIC PRESS KIT</h2>
      
      {/* Quick Download Dashboard - Adapts dynamically from single block to rows */}
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

          <h3 style={{...styles.subHeading, marginTop: isMobile ? '30px' : '40px'}}>RECENT PRESS</h3>
          {pressQuotes.map((p, i) => (
            <blockquote key={i} style={styles.blockquote}>
              <p>"{p.quote}"</p>
              <cite style={styles.cite}>— {p.source}</cite>
            </blockquote>
          ))}
        </div>

        {/* Right Column: Live Video Embed Placeholder & Requirements */}
        <div style={styles.rightCol}>
          <h3 style={styles.subHeading}>FEATURED LIVE PERFORMANCE</h3>
          <div style={{...styles.videoPlaceholder, height: isMobile ? '180px' : '240px'}}>
            <div style={{fontSize: '2rem'}}>🎬</div>
            <p style={{marginTop: '10px', color: '#888', fontSize: '0.85rem'}}>
              [ YouTube / Vimeo Live Session Embed ]
            </p>
          </div>

          <h3 style={{...styles.subHeading, marginTop: isMobile ? '30px' : '40px'}}>STAGE & AUDIO REQUIREMENTS</h3>
          <ul style={styles.bulletList}>
            <li>Total inputs required: 12 (4 vocal mics, 2 guitar DIs, 1 bass DI, 5 drum mics).</li>
            <li>Monitors: 4 independent stage monitor mixes required (In-ear compatible).</li>
            <li>Power: Minimum 3 dedicated 15A drop circuits on stage.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: '#0a0a0a',
    color: '#ffffff',
    fontFamily: 'sans-serif',
    borderTop: '1px solid #111',
    transition: 'padding 0.2s ease'
  },
  heading: {
    fontFamily: '"Impact", sans-serif',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    transition: 'font-size 0.2s ease'
  },
  downloadBar: {
    backgroundColor: '#161616',
    padding: '15px 25px',
    borderRadius: '4px',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    border: '1px solid #222',
    transition: 'all 0.2s ease'
  },
  barLabel: {
    fontWeight: 'bold',
    fontSize: '0.9rem',
    color: '#ff3366',
    letterSpacing: '0.5px'
  },
  linksGroup: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  downloadLink: {
    color: '#fff',
    fontSize: '0.85rem',
    textDecoration: 'none',
    fontWeight: 'bold',
    borderBottom: '1px dashed #555',
    paddingBottom: '2px'
  },
  grid: {
    display: 'grid',
    transition: 'gap 0.2s ease'
  },
  leftCol: {},
  rightCol: {},
  subHeading: {
    fontFamily: '"Impact", sans-serif',
    fontSize: '1.4rem',
    letterSpacing: '0.5px',
    color: '#fff',
    marginBottom: '20px',
    fontWeight: 'normal',
    textTransform: 'uppercase'
  },
  statsCard: {
    backgroundColor: '#111',
    padding: '20px',
    borderRadius: '4px',
    border: '1px solid #1c1c1c'
  },
  statRow: {
    display: 'flex',
    padding: '10px 0',
    borderBottom: '1px solid #1c1c1c',
    fontSize: '0.9rem',
    justifyContent: 'space-between'
  },
  statLabel: {
    color: '#888',
    fontWeight: 'bold'
  },
  statValue: {
    color: '#fff',
  },
  blockquote: {
    margin: '0 0 20px 0',
    paddingLeft: '15px',
    borderLeft: '3px solid #ff3366',
    fontStyle: 'italic',
    color: '#ccc',
    lineHeight: '1.5',
    fontSize: '1rem'
  },
  cite: {
    display: 'block',
    fontSize: '0.8rem',
    color: '#666',
    marginTop: '5px',
    fontStyle: 'normal',
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  videoPlaceholder: {
    width: '100%',
    backgroundColor: '#111',
    border: '2px dashed #222',
    borderRadius: '4px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'height 0.2s ease'
  },
  bulletList: {
    color: '#aaa',
    fontSize: '0.9rem',
    lineHeight: '1.7',
    paddingLeft: '20px'
  }
};
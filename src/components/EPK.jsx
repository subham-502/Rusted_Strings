import React from 'react';

export default function EPK() {
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

  return (
    <section id="epk" style={styles.section}>
      <h2 style={styles.heading}>ELECTRONIC PRESS KIT</h2>
      
      {/* 1. Quick Download Dashboard for Promoters/Press */}
      <div style={styles.downloadBar}>
        <span style={styles.barLabel}>⚡ INDUSTRY ASSETS:</span>
        <div style={styles.linksGroup}>
          <a href="#" style={styles.downloadLink}>⬇ Promo Photos (Hi-Res)</a>
          <a href="#" style={styles.downloadLink}>⬇ Tech Rider & Stage Plot</a>
          <a href="#" style={styles.downloadLink}>⬇ Full Band Bio (PDF)</a>
        </div>
      </div>

      <div style={styles.grid}>
        {/* Left Column: Quick Facts & Press Quotes */}
        <div style={styles.leftCol}>
          <h3 style={styles.subHeading}>QUICK FACTS</h3>
          <div style={styles.statsCard}>
            {stats.map((stat, i) => (
              <div key={i} style={styles.statRow}>
                <span style={styles.statLabel}>{stat.label}:</span>
                <span style={styles.statValue}>{stat.value}</span>
              </div>
            ))}
          </div>

          <h3 style={{...styles.subHeading, marginTop: '40px'}}>RECENT PRESS</h3>
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
          <div style={styles.videoPlaceholder}>
            <div style={{fontSize: '2rem'}}>🎬</div>
            <p style={{marginTop: '10px', color: '#888', fontSize: '0.9rem'}}>
              [ YouTube / Vimeo Live Session Embed ]
            </p>
          </div>

          <h3 style={{...styles.subHeading, marginTop: '40px'}}>STAGE & AUDIO REQUIREMENTS</h3>
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
    padding: '60px 8%',
    backgroundColor: '#0a0a0a',
    color: '#ffffff',
    fontFamily: 'sans-serif',
    borderTop: '1px solid #111'
  },
  heading: {
    fontFamily: '"Impact", sans-serif',
    fontSize: '2.5rem',
    letterSpacing: '1px',
    marginBottom: '30px',
    textTransform: 'uppercase',
  },
  downloadBar: {
    backgroundColor: '#161616',
    padding: '15px 25px',
    borderRadius: '4px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '15px',
    marginBottom: '50px',
    border: '1px solid #222'
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
    flexWrap: 'wrap'
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
    gridTemplateColumns: '1fr 1.2fr',
    gap: '60px'
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
    textAlign: 'right',
    maxWidth: '70%'
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
    height: '240px',
    backgroundColor: '#111',
    border: '2px dashed #222',
    borderRadius: '4px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bulletList: {
    color: '#aaa',
    fontSize: '0.9rem',
    lineHeight: '1.7',
    paddingLeft: '20px'
  }
};
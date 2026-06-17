import React from 'react';

export default function Bio() {
  const members = [
    { name: 'Alex', role: 'Vocals & Guitar' },
    { name: 'Sam', role: 'Lead Guitar' },
    { name: 'Jordan', role: 'Bass' },
    { name: 'Casey', role: 'Drums' },
  ];

  return (
    <section id="about" style={styles.section}>
      <h2 style={styles.heading}>OUR STORY</h2>
      <div style={styles.grid}>
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
          <a href="/band-press-kit.pdf" download style={styles.downloadBtn}>DOWNLOAD EPK</a>
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
  section: { padding: '80px 8%', backgroundColor: '#050505', color: '#fff' },
  heading: { fontSize: '3rem', marginBottom: '40px', letterSpacing: '2px' },
  grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' },
  textContainer: { display: 'flex', flexDirection: 'column', gap: '20px' },
  paragraph: { fontSize: '1.1rem', color: '#ccc', lineHeight: '1.8' },
  downloadBtn: { display: 'inline-block', marginTop: '20px', padding: '15px 30px', backgroundColor: '#fff', color: '#000', textDecoration: 'none', fontWeight: 'bold' },
  subHeading: { color: '#ff3366', marginBottom: '20px' },
  members: { display: 'flex', flexDirection: 'column', gap: '15px' },
  memberCard: { display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #222', padding: '15px 0' },
  memberName: { fontWeight: 'bold' },
  memberRole: { color: '#777' }
};
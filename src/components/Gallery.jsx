import React from 'react';

export default function Gallery() {
  // A few high-res concert/band placeholder images from Unsplash
  const images = [
    'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800',
    'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=800',
    'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?q=80&w=800',
    'https://images.unsplash.com/photo-1540039155733-d7696d4eb98b?q=80&w=800'
  ];

  return (
    <section id="gallery" style={styles.section}>
      <h3 style={styles.heading}>LIVE GALLERY</h3>
      <div style={styles.grid}>
        {images.map((img, index) => (
          <div key={index} style={styles.imageWrapper}>
            <img src={img} alt={`Live Show ${index + 1}`} style={styles.image} />
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '20px 8% 60px 8%', // Aligns with the margins of your app
    fontFamily: 'sans-serif',
  },
  heading: {
    fontFamily: '"Impact", sans-serif',
    fontSize: '1.8rem',
    letterSpacing: '1px',
    marginBottom: '20px',
    marginTop: 0,
    fontWeight: 'normal',
    textTransform: 'uppercase',
  },
  grid: {
    display: 'grid',
    // This makes the grid automatically responsive: 
    // It will fit as many 250px columns as possible, and scale them to fill the space
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '15px',
  },
  imageWrapper: {
    width: '100%',
    height: '250px',
    backgroundColor: '#111', // Placeholder background before image loads
    borderRadius: '4px',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover', // Ensures images fill the square without stretching
    filter: 'grayscale(30%) contrast(120%)', // Gives them a slightly gritty, rock aesthetic
  }
};
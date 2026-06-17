import React, { useState, useEffect } from 'react';

export default function Contact() {
  const [isMobile, setIsMobile] = useState(false);

  // Track viewport scaling states dynamically
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Compute layout structures on the fly
  const responsiveSection = {
    ...styles.section,
    padding: isMobile ? '50px 5%' : '80px 8%'
  };

  const responsiveHeading = {
    ...styles.heading,
    fontSize: isMobile ? '2.2rem' : '3rem',
    marginBottom: isMobile ? '25px' : '40px'
  };

  const responsiveContainer = {
    ...styles.container,
    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
    gap: isMobile ? '40px' : '60px'
  };

  const responsiveFormWrapper = {
    ...styles.formWrapper,
    padding: isMobile ? '25px 20px' : '40px'
  };

  return (
    <section id="contact" style={responsiveSection}>
      <h2 style={responsiveHeading}>GET IN TOUCH</h2>
      <div style={responsiveContainer}>
        
        {/* Left Column -> Top Stack: Interactive Booking Form */}
        <div style={responsiveFormWrapper}>
          <form style={styles.form} onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your Name" style={styles.input} />
            <input type="email" placeholder="Your Email" style={styles.input} />
            <select style={styles.input}>
              <option>Booking Inquiry</option>
              <option>Press & Media</option>
              <option>General Support</option>
            </select>
            <textarea placeholder="Your Message" rows="6" style={styles.textarea}></textarea>
            <button type="submit" style={styles.submitBtn}>SEND MESSAGE</button>
          </form>
        </div>
        
        {/* Right Column -> Bottom Stack: Official Direct Communication Info */}
        <div style={styles.infoWrapper}>
          <div>
            <h3 style={styles.subHeading}>BOOKING</h3>
            <p style={styles.text}>booking@rustedstrings.com</p>
          </div>
          <div>
            <h3 style={styles.subHeading}>MANAGEMENT</h3>
            <p style={styles.text}>mgmt@rustedstrings.com</p>
          </div>
          <div style={styles.socials}>
            <a href="#" style={styles.link}>Instagram</a>
            <a href="#" style={styles.link}>Twitter</a>
            <a href="#" style={styles.link}>YouTube</a>
          </div>
        </div>

      </div>
    </section>
  );
}

const styles = {
  section: { 
    backgroundColor: '#0a0a0a', 
    color: '#fff',
    transition: 'padding 0.2s ease'
  },
  heading: { 
    fontFamily: '"Impact", "Arial Black", sans-serif',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    transition: 'font-size 0.2s ease'
  },
  container: { 
    display: 'grid', 
    transition: 'gap 0.2s ease'
  },
  formWrapper: { 
    backgroundColor: '#161616', 
    borderRadius: '8px',
    border: '1px solid #1c1c1c',
    transition: 'padding 0.2s ease'
  },
  form: { 
    display: 'flex', 
    flexDirection: 'column', 
    gap: '15px' 
  },
  input: { 
    padding: '14px 12px', 
    borderRadius: '4px', 
    border: '1px solid #2a2a2a', 
    backgroundColor: '#222', 
    color: '#fff',
    fontSize: '0.95rem',
    fontFamily: 'sans-serif'
  },
  textarea: { 
    padding: '14px 12px', 
    borderRadius: '4px', 
    border: '1px solid #2a2a2a', 
    backgroundColor: '#222', 
    color: '#fff',
    fontSize: '0.95rem',
    fontFamily: 'sans-serif',
    resize: 'vertical'
  },
  submitBtn: { 
    padding: '16px', 
    backgroundColor: '#b31031', // Crimson accent theme sync 
    color: '#fff', 
    border: 'none', 
    fontWeight: 'bold', 
    cursor: 'pointer',
    fontFamily: '"Impact", "Arial Black", sans-serif',
    letterSpacing: '1px',
    fontSize: '1rem',
    transition: 'background-color 0.2s ease'
  },
  infoWrapper: { 
    display: 'flex', 
    flexDirection: 'column', 
    gap: '24px',
    justifyContent: 'center'
  },
  subHeading: { 
    color: '#ff3366', 
    fontSize: '0.9rem', 
    letterSpacing: '2px',
    fontFamily: '"Impact", sans-serif',
    marginBottom: '8px'
  },
  text: { 
    fontSize: '1.2rem', 
    fontFamily: 'sans-serif',
    wordBreak: 'break-all' // 💡 Crucial mobile safeguard prevents emails breaking out of view wrappers
  },
  socials: { 
    display: 'flex', 
    gap: '20px',
    marginTop: '10px'
  },
  link: { 
    color: '#aaa', 
    textDecoration: 'none',
    fontSize: '0.95rem',
    fontWeight: 'bold',
    transition: 'color 0.2s ease'
  }
};
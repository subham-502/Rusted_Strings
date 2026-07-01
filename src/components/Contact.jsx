import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [isMobile, setIsMobile] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'Booking Inquiry',
    message: ''
  });

  const [status, setStatus] = useState('idle');

  // Dynamic Google Font Injection matching your signature high-contrast layout system
  useEffect(() => {
    if (!document.getElementById('editorial-contact-fonts')) {
      const link = document.createElement('link');
      link.id = 'editorial-contact-fonts';
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz,wght@6..96,900&family=Space+Grotesk:wght@400;500;600&display=swap';
      document.head.appendChild(link);
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.message) {
      alert('Please provide at least a Name and a Message.');
      return;
    }

    setStatus('sending');

    const SERVICE_ID = 'service_797nz1p';
    const TEMPLATE_ID = 'template_g4y254p';
    const PUBLIC_KEY = 'P5C3sNawom7lE_mnc';

    const templateParams = {
      fromName: formData.name,       
      replyTo: formData.email, 
      inquiry_type: formData.inquiryType,
      message: formData.message,
      to_email: 'yesdarling105@gmail.com'
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        setStatus('success');
        setFormData({ name: '', email: '', inquiryType: 'Booking Inquiry', message: '' });
      })
      .catch((err) => {
        console.error('EmailJS Error:', err);
        setStatus('error');
      });
  };

  // Upgraded layout computations to align container cleanly within a 100vh panel block
  const responsiveSection = { 
    ...styles.section, 
    height: '100vh',
    padding: isMobile ? '90px 5% 40px 5%' : '90px 8% 0 8%' 
  };
  
  const responsiveHeading = { 
    ...styles.heading, 
    fontSize: isMobile ? '2.5rem' : '4rem', 
    marginBottom: isMobile ? '20px' : '40px' 
  };
  
  const responsiveContainer = { 
    ...styles.container, 
    gridTemplateColumns: isMobile ? '1fr' : '1.2fr 0.8fr', // Gives form layout slight prominence
    gap: isMobile ? '30px' : '60px' 
  };
  
  const responsiveFormWrapper = { 
    ...styles.formWrapper, 
    padding: isMobile ? '25px 20px' : '35px 40px' 
  };

  return (
    <section id="contact" style={responsiveSection}>
      <div style={styles.contentWrapper}>
        <h2 style={responsiveHeading}>GET IN TOUCH</h2>
        <div style={responsiveContainer}>
          
          {/* Left Column: Direct-from-Web Form */}
          <div style={responsiveFormWrapper}>
            <form style={styles.form} onSubmit={handleSubmit}>
              <input 
                type="text" 
                name="name"
                placeholder="Your Name *" 
                value={formData.name}
                onChange={handleChange}
                style={styles.input} 
                required
              />
              <input 
                type="email" 
                name="email"
                placeholder="Your Email Address" 
                value={formData.email}
                onChange={handleChange}
                style={styles.input} 
              />
              <select 
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleChange}
                style={styles.input}
              >
                <option value="Booking Inquiry">Booking Inquiry</option>
                <option value="Press & Media">Press & Media</option>
                <option value="General Support">General Support</option>
              </select>

              <textarea 
                name="message"
                placeholder="Write your message details here... *" 
                rows={isMobile ? "4" : "5"} 
                value={formData.message}
                onChange={handleChange}
                style={styles.textarea}
                required
              ></textarea>
              
              <button 
                type="submit" 
                disabled={status === 'sending'}
                style={{...styles.submitBtn, backgroundColor: status === 'sending' ? '#333' : '#b31031'}}
              >
                {status === 'sending' ? 'TRANSMITTING...' : 'SEND MESSAGE'}
              </button>

              {status === 'success' && (
                <div style={styles.successBox}>🎸 Message sent straight to our manager!</div>
              )}
              {status === 'error' && (
                <div style={styles.errorBox}>⚠️ Transmission failed. Please try again.</div>
              )}
            </form>
          </div>
          
          {/* Right Column: Contact Details */}
          <div style={styles.infoWrapper}>
            <div>
              <h3 style={styles.subHeading}>// BOOKING</h3>
              <p style={styles.text}>booking@rustedstrings.com</p>
            </div>
            <div>
              <h3 style={styles.subHeading}>// MANAGEMENT</h3>
              <p style={styles.text}>ngre95552@gmail.com</p>
            </div>
            <div style={styles.socials}>
              <a href="#" style={styles.link}>Instagram</a>
              <a href="#" style={styles.link}>Twitter</a>
              <a href="#" style={styles.link}>YouTube</a>
            </div>
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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center', // Centers block elements flawlessly into center focus on snap lock
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
  container: { display: 'grid', alignItems: 'center', transition: 'gap 0.2s ease' },
  formWrapper: { backgroundColor: '#131313', borderRadius: '4px', border: '1px solid #1c1c1c', transition: 'padding 0.2s ease' },
  form: { display: 'flex', flexDirection: 'column', gap: '16px' },
  input: { 
    padding: '14px 14px', 
    borderRadius: '2px', 
    border: '1px solid #222', 
    backgroundColor: '#1a1a1a', 
    color: '#fff', 
    fontSize: '0.95rem', 
    fontFamily: '"Space Grotesk", sans-serif',
    outline: 'none'
  },
  textarea: { 
    padding: '14px 14px', 
    borderRadius: '2px', 
    border: '1px solid #222', 
    backgroundColor: '#1a1a1a', 
    color: '#fff', 
    fontSize: '0.95rem', 
    fontFamily: '"Space Grotesk", sans-serif', 
    resize: 'none',
    outline: 'none'
  },
  submitBtn: { 
    padding: '16px', 
    color: '#fff', 
    border: 'none', 
    fontWeight: '600', 
    borderRadius: '2px',
    cursor: 'pointer', 
    fontFamily: '"Space Grotesk", sans-serif', 
    letterSpacing: '1px', 
    fontSize: '0.95rem', 
    textTransform: 'uppercase',
    transition: 'all 0.2s ease' 
  },
  infoWrapper: { display: 'flex', flexDirection: 'column', gap: '35px', justifyContent: 'center' },
  subHeading: { 
    color: '#ff3366', 
    fontSize: '0.85rem', 
    letterSpacing: '3px', 
    fontFamily: '"Space Grotesk", sans-serif', 
    fontWeight: '600',
    marginBottom: '8px' 
  },
  text: { 
    fontSize: '1.3rem', 
    fontFamily: '"Space Grotesk", sans-serif', 
    fontWeight: '400',
    letterSpacing: '-0.5px',
    wordBreak: 'break-all' 
  },
  socials: { display: 'flex', gap: '25px', marginTop: '5px' },
  link: { 
    color: '#666', 
    textDecoration: 'none', 
    fontSize: '0.95rem', 
    fontFamily: '"Space Grotesk", sans-serif',
    fontWeight: '600', 
    transition: 'color 0.2s ease' 
  },
  successBox: { marginTop: '10px', padding: '14px', backgroundColor: 'rgba(29, 185, 84, 0.1)', color: '#1DB954', border: '1px solid #1DB954', borderRadius: '2px', textAlign: 'center', fontSize: '0.9rem', fontFamily: '"Space Grotesk", sans-serif' },
  errorBox: { marginTop: '10px', padding: '14px', backgroundColor: 'rgba(179, 16, 49, 0.1)', color: '#ff3355', border: '1px solid #b31031', borderRadius: '2px', textAlign: 'center', fontSize: '0.9rem', fontFamily: '"Space Grotesk", sans-serif' }
};
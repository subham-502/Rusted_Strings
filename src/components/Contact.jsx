import React from 'react';

export default function Contact() {
  return (
    <section id="contact" style={styles.section}>
      <h2 style={styles.heading}>GET IN TOUCH</h2>
      <div style={styles.container}>
        <div style={styles.formWrapper}>
          <form style={styles.form}>
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
        
        <div style={styles.infoWrapper}>
          <h3 style={styles.subHeading}>BOOKING</h3>
          <p style={styles.text}>booking@rustedstrings.com</p>
          <h3 style={styles.subHeading}>MANAGEMENT</h3>
          <p style={styles.text}>mgmt@rustedstrings.com</p>
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
  section: { padding: '80px 8%', backgroundColor: '#0a0a0a', color: '#fff' },
  heading: { fontSize: '3rem', letterSpacing: '2px', marginBottom: '40px' },
  container: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' },
  formWrapper: { backgroundColor: '#161616', padding: '40px', borderRadius: '8px' },
  form: { display: 'flex', flexDirection: 'column', gap: '15px' },
  input: { padding: '12px', borderRadius: '4px', border: 'none', backgroundColor: '#222', color: '#fff' },
  textarea: { padding: '12px', borderRadius: '4px', border: 'none', backgroundColor: '#222', color: '#fff' },
  submitBtn: { padding: '15px', backgroundColor: '#ff3366', color: '#fff', border: 'none', fontWeight: 'bold', cursor: 'pointer' },
  infoWrapper: { display: 'flex', flexDirection: 'column', gap: '20px' },
  subHeading: { color: '#ff3366', fontSize: '1rem', letterSpacing: '2px' },
  text: { fontSize: '1.2rem', marginBottom: '20px' },
  socials: { display: 'flex', gap: '20px' },
  link: { color: '#aaa', textDecoration: 'none' }
};
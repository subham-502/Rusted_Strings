import React, { useState } from 'react';

export default function SocialSidebar() {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  // All 7 requested platforms with their vector icons, branding accents, and target routing links
  const socials = [
    { 
      id: 'facebook', 
      label: 'Facebook', 
      url: 'https://facebook.com/YOUR_PAGE', 
      brandColor: '#1877F2',
      svg: <svg viewBox="0 0 24 24" fill="currentColor" style={styles.svgIcon}><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/></svg>
    },
    { 
      id: 'instagram', 
      label: 'Instagram', 
      url: 'https://instagram.com/YOUR_PROFILE', 
      brandColor: '#E4405F',
      svg: <svg viewBox="0 0 24 24" fill="currentColor" style={styles.svgIcon}><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
    },
    { 
      id: 'x', 
      label: 'X (Twitter)', 
      url: 'https://x.com/YOUR_PROFILE', 
      brandColor: '#444444',
      svg: <svg viewBox="0 0 24 24" fill="currentColor" style={styles.svgIcon}><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
    },
    { 
      id: 'whatsapp', 
      label: 'WhatsApp', 
      url: 'https://wa.me/YOUR_PHONE_NUMBER', 
      brandColor: '#25D366',
      svg: <svg viewBox="0 0 24 24" fill="currentColor" style={styles.svgIcon}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    },
    { 
      id: 'spotify', 
      label: 'Spotify', 
      url: 'https://open.spotify.com/artist/YOUR_ID', 
      brandColor: '#1DB954',
      svg: <svg viewBox="0 0 24 24" fill="currentColor" style={styles.svgIcon}><path d="M12 0C5.373 0 0 5.372 0 12s5.373 12 12 12 12-5.372 12-12S18.627 0 12 0zm5.494 17.31c-.215.354-.675.466-1.03.25-2.875-1.758-6.495-2.156-10.757-1.182-.404.092-.814-.162-.906-.565-.092-.402.163-.813.565-.906 4.66-1.066 8.646-.617 11.877 1.36.355.216.467.676.251 1.03zm1.468-3.263c-.272.44-.847.58-1.288.31-3.292-2.023-8.31-2.61-12.2-1.43-.497.15-.1.82-.35.973-.497-.15-.822-.676-.672-1.173 4.455-1.35 10-1.166 13.8 1.436.44.272.58.847.31 1.288zm.126-3.41c-3.948-2.344-10.462-2.56-14.24-1.412-.605.184-1.243-.153-1.427-.758-.184-.606.152-1.244.758-1.428 4.337-1.316 11.52-1.06 16.075 1.64.544.323.722 1.03.4 1.573-.324.543-1.028.72-1.566.386z"/></svg>
    },
    { 
      id: 'youtube', 
      label: 'YouTube', 
      url: 'https://youtube.com/YOUR_CHANNEL', 
      brandColor: '#FF0000',
      svg: <svg viewBox="0 0 24 24" fill="currentColor" style={styles.svgIcon}><path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.516 0-9.387.508a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.871.507 9.387.507 9.387.507s7.517 0 9.387-.507a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
    },
    { 
      id: 'ytmusic', 
      label: 'YouTube Music', 
      url: 'https://music.youtube.com/channel/YOUR_ID', 
      brandColor: '#FF0000',
      // YouTube Music uses a double nested ring graphic layout structure
      svg: <svg viewBox="0 0 24 24" fill="currentColor" style={styles.svgIcon}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm-1.5 4.5v-3l2.5 1.5-2.5 1.5z"/></svg>
    }
  ];

  const getIconStyle = (id, brandColor) => {
    return hoveredIcon === id 
      ? { ...styles.iconLink, backgroundColor: brandColor, transform: 'translateX(-6px)', boxShadow: `0 4px 15px ${brandColor}66` } 
      : styles.iconLink;
  };

  return (
    <div style={styles.sidebar}>
      {socials.map((social) => (
        <a
          key={social.id}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          title={`Open Rusted Strings on ${social.label}`}
          style={getIconStyle(social.id, social.brandColor)}
          onMouseEnter={() => setHoveredIcon(social.id)}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          {social.svg}
        </a>
      ))}
    </div>
  );
}

const styles = {
  sidebar: {
    position: 'fixed',
    right: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    backgroundColor: 'rgba(0, 0, 0, 0.45)', // Matching clear header translucency
    backdropFilter: 'blur(10px)',         // Elegant modern blurring
    WebkitBackdropFilter: 'blur(10px)',
    padding: '18px 8px',
    borderTopLeftRadius: '12px',
    borderBottomLeftRadius: '12px',
    borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
    zIndex: 99, 
  },
  iconLink: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '42px',
    height: '42px',
    color: '#ffffff', // Base color is solid white vector
    borderRadius: '50%', // Circular button format looks incredible for music badges
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
    transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
  },
  svgIcon: {
    width: '20px',
    height: '20px',
    display: 'block'
  }
};
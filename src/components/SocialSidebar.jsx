// Run this first in your project:
// npm install react-icons

import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaSpotify, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiYoutubemusic } from 'react-icons/si';

const socials = [
  {
    id: 'facebook',
    label: 'Facebook',
    url: 'https://facebook.com/YOUR_PAGE',
    brandColor: '#1877F2',
    icon: <FaFacebook size={18} />,
  },
  {
    id: 'instagram',
    label: 'Instagram',
    url: 'https://instagram.com/YOUR_PROFILE',
    brandColor: '#E4405F',
    icon: <FaInstagram size={18} />,
  },
  {
    id: 'x',
    label: 'X',
    url: 'https://x.com/YOUR_PROFILE',
    brandColor: '#ffffff',
    icon: <FaXTwitter size={18} />,
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    url: 'https://wa.me/YOUR_PHONE_NUMBER',
    brandColor: '#25D366',
    icon: <FaWhatsapp size={18} />,
  },
  { divider: true },
  {
    id: 'spotify',
    label: 'Spotify',
    url: 'https://open.spotify.com/artist/YOUR_ID',
    brandColor: '#1DB954',
    icon: <FaSpotify size={18} />,
  },
  {
    id: 'youtube',
    label: 'YouTube',
    url: 'https://youtube.com/YOUR_CHANNEL',
    brandColor: '#FF0000',
    icon: <FaYoutube size={18} />,
  },
  {
    id: 'ytmusic',
    label: 'YT Music',
    url: 'https://music.youtube.com/channel/YOUR_ID',
    brandColor: '#FF0000',
    icon: <SiYoutubemusic size={18} />,
  },
];

export default function SocialSidebar() {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  return (
    <>
      <style>{`
        .social-icon-link .social-tooltip {
          pointer-events: none;
          position: absolute;
          right: 54px;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0,0,0,0.85);
          color: #fff;
          font-family: Arial, sans-serif;
          font-size: 11px;
          letter-spacing: 1px;
          text-transform: uppercase;
          white-space: nowrap;
          padding: 5px 10px;
          border-radius: 3px;
          opacity: 0;
          transition: opacity 0.2s ease;
        }
        .social-icon-link:hover .social-tooltip {
          opacity: 1;
        }
        .social-icon-circle {
          transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1),
                      background-color 0.25s ease,
                      box-shadow 0.25s ease;
        }
        .social-icon-link:hover .social-icon-circle {
          transform: translateX(-4px);
        }
      `}</style>

      <div style={styles.sidebar}>
        <div style={styles.accentBar} />

        {socials.map((item, i) =>
          item.divider ? (
            <div key={`divider-${i}`} style={styles.divider} />
          ) : (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
              style={styles.iconLink}
              onMouseEnter={() => setHoveredIcon(item.id)}
              onMouseLeave={() => setHoveredIcon(null)}
              aria-label={item.label}
            >
              <div
                className="social-icon-circle"
                style={{
                  ...styles.iconCircle,
                  backgroundColor: hoveredIcon === item.id
                    ? item.brandColor
                    : 'rgba(255,255,255,0.07)',
                  boxShadow: hoveredIcon === item.id
                    ? `0 4px 16px ${item.brandColor}55`
                    : 'none',
                }}
              >
                {item.icon}
              </div>
              <span className="social-tooltip">{item.label}</span>
            </a>
          )
        )}

        <div style={styles.accentBar} />
      </div>
    </>
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
    alignItems: 'center',
    gap: '6px',
    backgroundColor: 'rgba(0,0,0,0.5)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    padding: '10px 8px',
    borderTopLeftRadius: '12px',
    borderBottomLeftRadius: '12px',
    border: '1px solid rgba(255,255,255,0.07)',
    borderRight: 'none',
    zIndex: 99,
  },
  accentBar: {
    width: '20px',
    height: '2px',
    borderRadius: '2px',
    background: 'linear-gradient(to right, #ff3366, #c0112e)',
    margin: '4px 0',
  },
  divider: {
    width: '24px',
    height: '1px',
    background: 'rgba(255,255,255,0.1)',
    margin: '4px 0',
  },
  iconLink: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
  },
  iconCircle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '38px',
    height: '38px',
    borderRadius: '50%',
    color: '#ffffff',
  },
};
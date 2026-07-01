import React, { useEffect, useState } from 'react';

export default function Gallery() {
  const [isMobile, setIsMobile] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [videos, setVideos] = useState([]);
  
  // State to manage the active modal/popup item
  const [activeMedia, setActiveMedia] = useState(null); // { src, isVideo }

  // 1. DYNAMICALLY FETCH AND ROUTE MEDIA BY TYPE
  useEffect(() => {
    const mediaModules = import.meta.glob('../photos/*.{png,jpg,jpeg,webp,mp4,webm}', { eager: true });
    
    const loadedPhotos = [];
    const loadedVideos = [];

    Object.entries(mediaModules).forEach(([path, mod]) => {
      const src = mod.default || mod;
      const isVideo = path.match(/\.(mp4|webm)$/i) !== null;

      if (isVideo) {
        loadedVideos.push(src);
      } else {
        loadedPhotos.push(src);
      }
    });

    setPhotos([...loadedPhotos, ...loadedPhotos]);
    setVideos([...loadedVideos, ...loadedVideos]);
  }, []);

  // 2. FONT LOADING & RESIZE LISTENERS
  useEffect(() => {
    if (!document.getElementById('editorial-gallery-font')) {
      const link = document.createElement('link');
      link.id = 'editorial-gallery-font';
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz,wght@6..96,900&display=swap';
      document.head.appendChild(link);
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 3. HOVER PLAY/PAUSE FOR ROW TRACK PREVIEWS
  const handleVideoMouseEnter = (e) => {
    const videoElement = e.currentTarget.querySelector('video');
    if (videoElement) {
      videoElement.play().catch(() => {});
    }
  };

  const handleVideoMouseLeave = (e) => {
    const videoElement = e.currentTarget.querySelector('video');
    if (videoElement) {
      videoElement.pause();
      videoElement.currentTime = 0;
    }
  };

  const responsiveSection = {
    ...styles.section,
    padding: isMobile ? '60px 0 40px 0' : '80px 0',
  };

  return (
    <section id="gallery" style={responsiveSection}>
      <style>{`
        @keyframes scrollMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .marquee-track {
          display: flex;
          gap: 30px;
          width: max-content;
          animation: scrollMarquee 28s linear infinite;
        }

        .video-track {
          animation-duration: 34s;
        }

        .scroll-container:hover .marquee-track {
          animation-play-state: paused;
        }

        .media-card {
          transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.5s ease;
          position: relative;
          cursor: pointer;
        }

        .media-card:hover {
          transform: scale(1.08) translateY(-10px); 
          box-shadow: 0 30px 60px -15px rgba(255, 255, 255, 0.15); 
          z-index: 10; 
        }

        .media-card:hover .inner-media {
          filter: grayscale(0%) contrast(100%) brightness(100%);
        }

        /* Pop-up Fade In Animation */
        @keyframes popupFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes popupScale {
          from { transform: scale(0.9); }
          to { transform: scale(1); }
        }

        .popup-overlay {
          animation: popupFade 0.3s ease forwards;
        }
        .popup-content {
          animation: popupScale 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
      `}</style>

      {/* --- PHOTO GALLERY SECTION --- */}
      <div style={styles.contentWrapper}>
        <h3 style={{ ...styles.heading, fontSize: isMobile ? '2.2rem' : '3.5rem' }}>
          PHOTO ARCHIVE
        </h3>
        
        <div className="scroll-container" style={styles.outerContainer}>
          <div className="marquee-track">
            {photos.map((src, index) => (
              <div 
                key={`photo-${index}`} 
                className="media-card" 
                style={styles.mediaWrapper}
                onClick={() => setActiveMedia({ src, isVideo: false })}
              >
                <img 
                  src={src} 
                  className="inner-media" 
                  alt={`Live Capture ${index + 1}`} 
                  style={styles.mediaElement} 
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- VIDEO GALLERY SECTION --- */}
      <div style={{ ...styles.contentWrapper, marginTop: '40px' }}>
        <h3 style={{ ...styles.heading, fontSize: isMobile ? '2.2rem' : '3.5rem' }}>
          MOTION TRACKS
        </h3>
        
        <div className="scroll-container" style={styles.outerContainer}>
          <div className="marquee-track video-track">
            {videos.map((src, index) => (
              <div 
                key={`video-${index}`} 
                className="media-card" 
                style={styles.mediaWrapper}
                onMouseEnter={handleVideoMouseEnter}
                onMouseLeave={handleVideoMouseLeave}
                onClick={() => setActiveMedia({ src, isVideo: true })}
              >
                <video
                  src={src}
                  className="inner-media"
                  style={styles.mediaElement}
                  muted
                  loop
                  playsInline
                />
                <span style={styles.videoBadge}>PREVIEW</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- LIGHTBOX POPUP MODAL --- */}
      {activeMedia && (
        <div 
          className="popup-overlay" 
          style={styles.popupOverlay}
          onClick={() => setActiveMedia(null)}
        >
          {/* Close button indicator */}
          <button style={styles.closeButton} onClick={() => setActiveMedia(null)}>✕</button>
          
          <div 
            className="popup-content" 
            style={styles.popupContent}
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking directly on image/video
          >
            {activeMedia.isVideo ? (
              <video 
                src={activeMedia.src} 
                style={styles.popupMedia} 
                controls 
                autoPlay 
                playsInline
              />
            ) : (
              <img 
                src={activeMedia.src} 
                alt="Enlarged gallery view" 
                style={styles.popupMedia} 
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: '#050505',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    boxSizing: 'border-box',
    overflow: 'hidden'
  },
  contentWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  heading: {
    fontFamily: '"Bodoni Moda", serif',
    fontWeight: '900',
    letterSpacing: '-1px',
    marginTop: 0,
    marginBottom: '20px',
    textTransform: 'uppercase',
    alignSelf: 'flex-start',
    paddingLeft: '8%',
    transition: 'font-size 0.2s ease',
  },
  outerContainer: {
    width: '100%',
    overflow: 'hidden',
    paddingBottom: '45px',
    paddingTop: '15px',
    maskImage: 'linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)', 
    WebkitMaskImage: 'linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)'
  },
  mediaWrapper: {
    flex: '0 0 340px',
    height: '460px',
    backgroundColor: '#111', 
    borderRadius: '16px', 
    overflow: 'hidden',
    boxShadow: '0 20px 40px -20px rgba(0, 0, 0, 0.8)',
  },
  mediaElement: {
    width: '100%',
    height: '100%',
    objectFit: 'cover', 
    filter: 'grayscale(40%) contrast(105%) brightness(80%)',
    transition: 'filter 0.4s ease',
    pointerEvents: 'none'
  },
  videoBadge: {
    position: 'absolute',
    bottom: '20px',
    left: '20px',
    background: 'rgba(255, 255, 255, 0.12)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    color: '#fff',
    fontSize: '0.6rem',
    fontWeight: 'bold',
    letterSpacing: '1px',
    padding: '4px 10px',
    borderRadius: '4px',
    border: '1px solid rgba(255, 255, 255, 0.15)'
  },
  
  // Popup / Lightbox Layout Styles
  popupOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(5, 5, 5, 0.95)', // Deep black velvet backdrop
    backdropFilter: 'blur(15px)',
    WebkitBackdropFilter: 'blur(15px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999, // Floating on absolute topmost layer
    cursor: 'zoom-out'
  },
  popupContent: {
    maxWidth: '85vw',
    maxHeight: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 50px 100px -20px rgba(0,0,0,0.9)',
    cursor: 'default'
  },
  popupMedia: {
    maxWidth: '100%',
    maxHeight: '80vh',
    objectFit: 'contain',
    backgroundColor: '#000'
  },
  closeButton: {
    position: 'absolute',
    top: '30px',
    right: '40px',
    background: 'none',
    border: 'none',
    color: '#fff',
    fontSize: '2rem',
    cursor: 'pointer',
    opacity: 0.7,
    transition: 'opacity 0.2s, transform 0.2s',
  }
};
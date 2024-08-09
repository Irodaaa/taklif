// Modal.js
import React, { useEffect, useRef, useState } from 'react';
import './Modal.css';

const Modal = ({ showModal, handleClose, children, musicSrc }) => {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    if (showModal && audioRef.current) {
      audioRef.current.play();
    }
  }, [showModal]);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    showModal && (
      <div className="modal-overlay">
        <div className="modal-content">
          <span className="close" onClick={handleClose}>&times;</span>
          <button className="mute-button" onClick={toggleMute}>
            {isMuted ? 'Unmute' : 'Mute'}
          </button>
          {children}
          <audio ref={audioRef} src={musicSrc} loop />
        </div>
      </div>
    )
  );
};

export default Modal;

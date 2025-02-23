import React from 'react';
import './Modal_preview.css'

const Modal_preview = ({ children, onClose }) => {
    return (
        <div className="modal-backdrop" onClick={onClose}>
<div className="modal-contents" onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

  
  export default Modal_preview;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './InvitationTemplate.css';
import { Link } from 'react-router-dom';

const InvitationTemplate = ({ image, title, newPrice, oldPrice, sampleLink, createLink, onSampleClick, invitationDetails }) => {
  const handleSampleClick = () => {
    onSampleClick(invitationDetails);
  };
    
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-content">
        <h3>
          {title} <span className="new">YANGI</span>
        </h3>
        <p className="price">
          <span className="new-price">{newPrice}</span>
          <span className="old-price">{oldPrice}</span>
        </p>
        <div className="card-buttons">
        <button onClick={handleSampleClick}>Namuna ko'rish</button>
        <Link to={createLink}>
        <button>Zakaz qilish</button>
      </Link>
        </div>
      </div>
    </div>
  );
};

export default InvitationTemplate;

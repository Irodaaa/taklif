import React from 'react';
import { useNavigate } from 'react-router-dom';
import './InvitationTemplate.css';
import { Link } from 'react-router-dom';

const InvitationTemplate = ({ image, title, newPrice, oldPrice, sampleLink, createLink, onSampleClick, invitationDetails }) => {
  const navigate = useNavigate();
  const isAuthenticated = false; // Здесь нужно проверять, авторизован ли пользователь

  const handleSampleClick = () => {
    onSampleClick(invitationDetails);
  };

  const handleOrderClick = () => {
    if (isAuthenticated) {
      navigate(createLink); // Перенаправить на страницу создания, если пользователь авторизован
    } else {
      navigate('/login'); // Перенаправить на страницу входа, если пользователь не авторизован
    }
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
          <button className="look-button" onClick={handleSampleClick}>Namuna ko'rish</button>
          <button className="create-button" onClick={handleOrderClick}>Zakaz qilish</button>
        </div>
      </div>
    </div>
  );
};

export default InvitationTemplate;

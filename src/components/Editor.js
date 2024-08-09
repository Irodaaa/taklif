// EditInvitationForm.js
import React, { useState } from 'react';
import './EditInvitationForm.css';
import { useNavigate, useLocation } from 'react-router-dom';

const EditInvitationForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state: initialInvitation } = location;
  const [invitation, setInvitation] = useState(initialInvitation);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInvitation((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setInvitation((prevState) => ({
      ...prevState,
      music: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const invitations = JSON.parse(localStorage.getItem('invitations')) || [];
    invitations.push(invitation);
    localStorage.setItem('invitations', JSON.stringify(invitations));
    console.log('Invitation saved:', invitation);
    navigate('/');
  };

  return (
    <div className="edit-invitation-container">
      <h2>Подтвердите и отредактируйте пригласительное</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Имена пары</label>
          <input
            type="text"
            name="coupleNames"
            value={invitation.coupleNames}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Дата</label>
          <input
            type="date"
            name="date"
            value={invitation.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Время</label>
          <input
            type="time"
            name="time"
            value={invitation.time}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Место</label>
          <input
            type="text"
            name="location"
            value={invitation.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Описание</label>
          <textarea
            name="description"
            value={invitation.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label>Музыка</label>
          <input
            type="file"
            name="music"
            accept="audio/*"
            onChange={handleFileChange}
            required
          />
        </div>
        <div className="form-group">
          <button type="submit">Сохранить</button>
        </div>
      </form>
    </div>
  );
};

export default EditInvitationForm;

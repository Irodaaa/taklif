import React from 'react';
import { useParams } from 'react-router-dom';

const InvitationDetails = () => {
  const { id } = useParams();
  const invitation = JSON.parse(localStorage.getItem(id));

  if (!invitation) {
    return <div>Приглашение не найдено</div>;
  }

  return (
    <div className="invitation-details">
      <h2>{invitation.title}</h2>
      <p>Дата: {invitation.date}</p>
      <p>Время: {invitation.time}</p>
      <p>Место: {invitation.location}</p>
      <p>{invitation.description}</p>
      <audio controls>
        <source src={invitation.music} type="audio/mpeg" />
        Ваш браузер не поддерживает элемент audio.
      </audio>
    </div>
  );
};

export default InvitationDetails;

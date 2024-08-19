import React from 'react';
import { useParams } from 'react-router-dom';
import './InvitationView.css'; 
import { format } from 'date-fns';
import { uz } from 'date-fns/locale';
import Countdown from './Countdown';
import Calendar from './Calendar';
import flower2 from '../images/flower2.png'

const InvitationView = ({ invitations = [] }) => {
  const { id } = useParams(); // Получаем ID из URL
  const invitation = invitations.find(inv => inv.id === id);

  if (!invitation) {
    return <p>Приглашение не найдено</p>;
  }

  const getFormattedDate = (date) => {
    if (!date) return 'Дата ещё не установлена';
    return format(new Date(date), 'EEEE, MMMM d, yyyy', { locale: uz });
  };

  const getDayOfWeek = (date) => {
    if (!date) return '';
    return format(new Date(date), 'EEEE', { locale: uz });
  };

  const combineDateTime = (date, time) => {
    if (!date || !time) return null;
    const [hours, minutes] = time.split(':');
    const dateTime = new Date(date);
    dateTime.setHours(parseInt(hours));
    dateTime.setMinutes(parseInt(minutes));
    return dateTime;
  };

  return (
    <div className={`invitation-view ${invitation.theme}`}>
      <h1 className='taklif'>TAKLIFNOMA</h1>
      <p className='date1'>{invitation.weddingDate}</p>
      <img 
        src={invitation.customImage || invitation.selectedPhoto} 
        alt="Couple" 
        className={invitation.customImage ? 'custom-photo' : 'default-photo'}
      />
      <div className="details-container">
        <span className="names">{invitation.brideName}</span>
        <p className="ampersand">&</p>
        <span className="names">{invitation.groomName}</span>
        <div className={`event-details ${invitation.theme}`}>
          {invitation.weddingDate ? getFormattedDate(invitation.weddingDate) : 'Дата ещё не установлена'},
          {invitation.weddingTime}, 
          {invitation.weddingLocation}
        </div>
        <img src={flower2} alt="Decorative Flower" className="flower-decor"/>
        <p className="static-message">{invitation.customText}</p>
        <div className='calendarplace'>
          <p className='date'>{invitation.weddingDate}</p>
          <p className='datee'>{invitation.weddingDate ? getDayOfWeek(invitation.weddingDate) : ''}, Soat {invitation.weddingTime}da</p>
          <div className="line"></div>
          <Calendar selectedDate={invitation.weddingDate} />
          <div className="line1"></div>
          <Countdown targetDate={combineDateTime(invitation.weddingDate, invitation.weddingTime)} />
        </div>
        <div className={invitation.theme}>
          <h5 className='footer2'>LOKATSIYA</h5>
          <p className="static-message-location" >{invitation.weddingLocation}</p>
        </div>
      </div>
    </div>
  );
};

export default InvitationView;

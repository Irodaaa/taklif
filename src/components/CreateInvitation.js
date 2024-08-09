import React, { useState } from 'react';
import './CreateInvitation.css';
import couplePhoto from '../images/couple.png';
import flower1 from '../images/flower1.png';
import { format } from 'date-fns';
import { uz } from 'date-fns/locale';
import Countdown from './Countdown';
import Calendar from './Calendar'



const defaultWeddingDetails = {
  brideName: ' ',
  groomName: ' ',
  weddingDate: '',
  weddingTime: '',
  weddingLocation: '',
  theme: 'classic', // Добавлено поле для выбора темы
};

const CreateInvitation = () => {
  const [weddingDetails, setWeddingDetails] = useState(defaultWeddingDetails);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setWeddingDetails(prev => ({ ...prev, [name]: value }));
  };

  const getFormattedDate = (date) => {
    if (!date) return 'Дата ещё не установлена';
    return format(new Date(date), 'EEEE, MMMM d, yyyy', { locale: uz });
  };
  const getDayOfWeek = (date) => {
    if (!date) return ''; // Или любой другой текст-заполнитель
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
    <div className="invitation-container">
<div className="select-wrapper">
  <h2>Tema</h2>
  <select id="themeSelect" name="theme" value={weddingDetails.theme} onChange={handleInputChange} className="theme-select">
    <option value="classic">Classic</option>
    <option value="modern">Zamonaviy</option>
    <option value="vintage">Vintaj</option>
  </select>
</div>
      <form>
        <label htmlFor="brideName">Kelin nomi:</label>
        <input type="text" id="brideName" name="brideName" value={weddingDetails.brideName} onChange={handleInputChange} />
        <label htmlFor="groomName">Kuyov nomi:</label>
        <input type="text" id="groomName" name="groomName" value={weddingDetails.groomName} onChange={handleInputChange} />
        <label htmlFor="weddingDate">To'y sanasi:</label>
        <input type="date" id="weddingDate" name="weddingDate" value={weddingDetails.weddingDate} onChange={handleInputChange} />
        <label htmlFor="weddingTime">To'y vaqti:</label>
        <input type="time" id="weddingTime" name="weddingTime" value={weddingDetails.weddingTime} onChange={handleInputChange} />
        <label htmlFor="weddingLocation">To'y joyi:</label>
        <input type="text" id="weddingLocation" name="weddingLocation" value={weddingDetails.weddingLocation} onChange={handleInputChange} />
        </form>
      <div className={`invitation-preview ${weddingDetails.theme}`}>
        <h2>TAKLIFNOMA</h2>
        <img src={couplePhoto} alt="Couple" className="couple-photo"/>
        <div className="details-container">
          <span className="names">{weddingDetails.brideName}</span>
          <span className="ampersand">&amp;</span>
          <span className="names">{weddingDetails.groomName}</span>
          <div className="event-details">
            {weddingDetails.weddingDate ? getFormattedDate(weddingDetails.weddingDate) : 'Дата ещё не установлена'},
            {weddingDetails.weddingTime}, 
            {weddingDetails.weddingLocation}
          </div>
          <p className="static-message">Sizni to'yga bag'ishlangan bayramga taklif qilamiz. Hayotimizda yangi sahifa ochish quvonchini biz bilan baham ko'ring!</p>
          <img src={flower1} alt="Decorative Flower" className="flower-decor"/>
          <p className="static-message">To'yimizning bayramida tariximizning yangi bo'lini ochishga birga taklif etamiz.</p>
        </div>
        <h5 className='footer'>TAKLIFNOMA</h5>
        <p className="static-message">Bizga qadrli bolgan insonlarni toy marosimizga taklif qilamiz.</p>
        <div className='calendarplace'>
        <p className='date'>{weddingDetails.weddingDate}</p>
        <p className='datee'>{weddingDetails.weddingDate ? getDayOfWeek(weddingDetails.weddingDate) : ''}, Soat {weddingDetails.weddingTime}da</p>
        <div className="line"></div>
        <Calendar selectedDate={weddingDetails.weddingDate} />
        <div className="line1"></div>
        <Countdown targetDate={combineDateTime(weddingDetails.weddingDate, weddingDetails.weddingTime)} />
        </div>
      </div>
    </div>
  );
};

export default CreateInvitation;



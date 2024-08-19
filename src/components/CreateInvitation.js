import React, { useState, useEffect } from 'react';
import './CreateInvitation.css';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

import couple2 from '../images/couple2.png';
import flower2 from '../images/flower2.png';
import { format } from 'date-fns';
import { uz } from 'date-fns/locale';
import Countdown from './Countdown';
import Calendar from './Calendar';
import Modal_preview from './Modal_preview';
import couple3 from '../images/couple3.png'
import couple1 from '../images/couple.png'


const defaultWeddingDetails = {
  brideName: '',
  groomName: '',
  weddingDate: '',
  weddingTime: '',
  weddingLocation: '',
  theme: 'classic', 
  customText: 'Sizni to’yga bag’ishlangan bayramga taklif qilamiz. Hayotimizda yangi sahifa ochish quvonchini biz bilan baham ko’ring!', // Стандартный текст
  selectedPhoto: couple1,
};

const CreateInvitation = () => {
  const [weddingDetails, setWeddingDetails] = useState(defaultWeddingDetails);
  const [modalOpen, setModalOpen] = useState(false);
  const [isTextEditable, setIsTextEditable] = useState(false);
  const [customImage, setCustomImage] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState({couple1});



  const handleSave = () => {
    setModalOpen(true); // Открывает модальное окно
  };

  const closeModal = () => {
    setModalOpen(false); // Закрывает модальное окно
  };


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setWeddingDetails(prev => ({ ...prev, [name]: value }));
  };

  const handlePhotoChange = (event) => {
    const photo = event.target.value;
    let selectedPhoto;
  
    switch(photo) {
      case 'rasm1':
        selectedPhoto = couple1;
        break;
      case 'rasm2':
        selectedPhoto = couple2;
        break;
      case 'rasm3':
        selectedPhoto = couple3;
        break;
      default:
        selectedPhoto = couple2;
    }
  
    setSelectedPhoto(photo);
    setWeddingDetails(prev => ({ ...prev, selectedPhoto })); // Обновляем выбранное фото
  };


  const handleCustomImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCustomImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

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
  
  const { ref: firstElementRef, inView: firstElementVisible } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: secondElementRef, inView: secondElementVisible } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: thirdElementRef, inView: thirdElementVisible } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });


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
        <div className="text-edit-option">
          <label>
            <input
              type="checkbox"
              checked={isTextEditable}
              onChange={() => setIsTextEditable(!isTextEditable)}
            />
            Static textni almashtirish
          </label>
        </div>
        {isTextEditable && (
          <div className="editable-text-container">
            <label htmlFor="customText">O'zgartirilgan matn:</label>
            <textarea
              id="customText"
              name="customText"
              value={weddingDetails.customText}
              onChange={handleInputChange}
              className="editable-text"
            />
          </div>
        )}
        <label htmlFor="weddingDate">To'y sanasi:</label>
        <input type="date" id="weddingDate" name="weddingDate" value={weddingDetails.weddingDate} onChange={handleInputChange} />
        <label htmlFor="weddingTime">To'y vaqti:</label>
        <input type="time" id="weddingTime" name="weddingTime" value={weddingDetails.weddingTime} onChange={handleInputChange} />
        <label htmlFor="weddingLocation">To'y joyi:</label>
        <input type="text" id="weddingLocation" name="weddingLocation" value={weddingDetails.weddingLocation} onChange={handleInputChange} />
        <div className="image-selection-container"> 
        <label>Rasmni tanlang:</label>
  <select id="photoSelect" value={selectedPhoto} onChange={handlePhotoChange} className="select-photo">
    <option value="rasm1">Rasm 1</option>
    <option value="rasm2">Rasm 2</option>
    <option value="rasm3">Rasm 3</option>
  </select>
  <div className="image-preview">
    {selectedPhoto === "rasm1" && <img src={couple1} alt="Rasm 1" />}
    {selectedPhoto === "rasm2" && <img src={couple2} alt="Rasm 2" />}
    {selectedPhoto === "rasm3" && <img src={couple3} alt="Rasm 3" />}
  </div>
  <div className="upload-photo">
    <label className='choose'>Yoki o'zingizning rasmingizni yuklang:</label>
    <input type="file" id="customImageUpload" onChange={handleCustomImageUpload} />
    <label htmlFor="customImageUpload">Fayl tanlash</label>
  </div>
        </div>
      </form>
      <button className='save-button' onClick={handleSave}>Сохранить и открыть приглашение</button>
      {modalOpen && (
        <Modal_preview isOpen={modalOpen} onClose={closeModal}>
          <div className={`invitation-previeww ${weddingDetails.theme}`}>
            <h1 className='taklif'>TAKLIFNOMA</h1>
            <p className='date1'>{weddingDetails.weddingDate}</p>
            <img 
              src={customImage || weddingDetails.selectedPhoto} 
              alt="Couple" 
              className={customImage ? 'custom-photo' : 'default-photo'}
            />
            <div className="details-container">
              <motion.div
                ref={firstElementRef}
                initial={{ opacity: 0 }}
                animate={{ opacity: firstElementVisible ? 1 : 0 }}
                transition={{ duration: 1 }}
              >
                <span className="names">{weddingDetails.brideName}</span>
                <p className="ampersand">&</p>
                <span className="names">{weddingDetails.groomName}</span>
              </motion.div>
              <motion.div
                ref={secondElementRef}
                initial={{ opacity: 0 }}
                animate={{ opacity: secondElementVisible ? 1 : 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <div className={`event-details ${weddingDetails.theme}`}>
                  {weddingDetails.weddingDate ? getFormattedDate(weddingDetails.weddingDate) : 'Дата ещё не установлена'},
                  {weddingDetails.weddingTime}, 
                  {weddingDetails.weddingLocation}
                </div>
                <img src={flower2} alt="Decorative Flower" className="flower-decor"/>
                <p className="static-message">{weddingDetails.customText}</p>
              </motion.div>
              <motion.div
                ref={thirdElementRef}
                initial={{ opacity: 0 }}
                animate={{ opacity: thirdElementVisible ? 1 : 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <h3 className='footer'>TAKLIF</h3>
                <p className="static-message">Biz aziz insonlarimizni taklif qilamiz</p>
                <p className="static-message">Ikki yurak birga urishi, ikki qalb birlashishi - bu muhabbatning eng chiroyli misoli. Bizning nikohimiz - bu ikki dunyoning bir-biriga qo'shilishi, umrbod davom etadigan muhabbat va baxt sarguzashti!</p>
                <div className='calendarplace'>
                  <p className='date'>{weddingDetails.weddingDate}</p>
                  <p className='datee'>{weddingDetails.weddingDate ? getDayOfWeek(weddingDetails.weddingDate) : ''}, Soat {weddingDetails.weddingTime}da</p>
                  <div className="line"></div>
                  <Calendar selectedDate={weddingDetails.weddingDate} />
                  <div className="line1"></div>
                  <Countdown targetDate={combineDateTime(weddingDetails.weddingDate, weddingDetails.weddingTime)} />
                </div>
                <div className={weddingDetails.theme}>
                  <h5 className='footer2'>LOKATSIYA</h5>
                  <p className="static-message-location" >{weddingDetails.weddingLocation}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </Modal_preview>
      )}
    </div>
  );
};

export default CreateInvitation;

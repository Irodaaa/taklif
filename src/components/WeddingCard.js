import React, { useState } from 'react';
import Modal from 'react-modal';
import './WeddingCard.css';

const WeddingCard = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="wedding-card">
      <button onClick={openModal}>Посмотреть</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Wedding Details"
        className="modal"
        overlayClassName="overlay"
      >
        <div className="modal-content">
          <button onClick={closeModal} className="close-button">Закрыть</button>
          <div className="wedding-details">
            <h2>23 | 05 | 20</h2>
            <p>Суббота</p>
            <img src="path/to/image.jpg" alt="Wedding" className="wedding-image"/>
            <div className="wedding-info">
              <p>두 사람이 꽃과 나무처럼 걸어와서 서로의 모든 것이 되기 위해 오랜 기다림 끝에 혼례식을 치르는 날 세상은 더욱 아름다워라</p>
              <p>이해인, 사랑의 사람들여</p>
              <p>소중한 분들을 초대합니다</p>
              <p>살랑이는 바람결에 사랑이 묻어나는 계절입니다.</p>
            </div>
            <audio controls className="audio-player">
              <source src="path/to/audio.mp3" type="audio/mpeg"/>
              Ваш браузер не поддерживает аудио элементы.
            </audio>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default WeddingCard;

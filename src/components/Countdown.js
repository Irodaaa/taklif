import React, { useState, useEffect } from 'react';
import './Countdown.css';

const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const target = new Date(targetDate);
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  if (!targetDate) {
    return <p>Дата свадьбы не установлена</p>;
  }

  return (
    <div className="countdown">
      <div className="time-unit">
        <span className="number">{timeLeft.days || '0'}</span>
        <span className="unit">KUN</span>
      </div>
      <div className="time-unit">
        <span className="number">{timeLeft.hours || '0'}</span>
        <span className="unit">SOAT</span>
      </div>
      <div className="time-unit">
        <span className="number">{timeLeft.minutes || '0'}</span>
        <span className="unit">MINUT</span>
      </div>
      <div className="time-unit">
        <span className="number">{timeLeft.seconds || '0'}</span>
        <span className="unit">SECUND</span>
      </div>
    </div>
  );
};

export default Countdown;

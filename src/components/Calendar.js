import React, { useState, useEffect } from 'react';
import './Calendar.css';

const Calendar = ({ selectedDate }) => {
    const [currentDate, setCurrentDate] = useState(new Date(selectedDate || new Date()));

    useEffect(() => {
        setCurrentDate(new Date(selectedDate));
    }, [selectedDate]);

    const startDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const days = [];

    const isSelectedDate = (day) => {
        const checkDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
        const selected = new Date(selectedDate);
        return checkDate.toDateString() === selected.toDateString();
    };

    for (let i = 0; i < startDay; i++) {
        days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }
    for (let i = 1; i <= daysInMonth; i++) {
        days.push(
            <div key={i} className={`calendar-day ${isSelectedDate(i) ? 'selected' : ''}`}>
                {i}
            </div>
        );
    }

    return (
        <div className="calendar-container">
            <div className="calendar-grid">
                {['Yak', 'Dush', 'Sesh', 'Chor', 'Pay', 'Jum', 'Shan'].map((day) => (
                    <div key={day} className="calendar-day header">{day}</div>
                ))}
                {days}
            </div>
        </div>
    );
};

export default Calendar;

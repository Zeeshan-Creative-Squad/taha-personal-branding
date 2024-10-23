import React, { useState, useEffect } from 'react';
import './BookConsultation.css';

const BookConsultation = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth()); 
    const [selectedDay, setSelectedDay] = useState(null);

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const getDaysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (year, month) => {
        return new Date(year, month, 1).getDay();
    };

    const handlePrevMonth = () => {
        if (currentMonth === 0) {
            setCurrentMonth(11);
            setCurrentYear(currentYear - 1);
        } else {
            setCurrentMonth(currentMonth - 1);
        }
    };

    const handleNextMonth = () => {
        if (currentMonth === 11) {
            setCurrentMonth(0);
            setCurrentYear(currentYear + 1);
        } else {
            setCurrentMonth(currentMonth + 1);
        }
    };

    const renderCalendarDays = () => {
        const daysInMonth = getDaysInMonth(currentYear, currentMonth);
        const firstDayIndex = getFirstDayOfMonth(currentYear, currentMonth);

        const days = [];
        for (let i = 0; i < firstDayIndex; i++) {
            days.push(<td key={`empty-${i}`} className="empty"></td>); 
        }

        for (let day = 1; day <= daysInMonth; day++) {
            days.push(
                <td
                    key={day}
                    className={`day ${selectedDay === day ? 'selected' : ''}`}
                    onClick={() => setSelectedDay(day)}
                >
                    {day}
                </td>
            );
        }

        const remainingEmptyCells = (7 - (days.length % 7)) % 7;
        for (let i = 0; i < remainingEmptyCells; i++) {
            days.push(<td key={`empty-end-${i}`} className="empty"></td>);
        }

        const rows = [];
        for (let i = 0; i < days.length; i += 7) {
            rows.push(
                <tr key={`week-${i / 7}`}>
                    {days.slice(i, i + 7)}
                </tr>
            );
        }

        return rows;
    };

    return (
        <div className="consultation-container">
            <div className="container">
                <div className="header-section">
                    <h2 className="head-h2">Tech Mentorship & Career Guidance</h2>
                    <h1 className="head-h1">Book your <span className="spanHead">Consultation</span></h1>
                    <p className="para_main">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim urna porttitor neque elementum cursus. Bibendum.</p>
                </div>

                <div className="calendar-time-container">
                    <div className="calendar-section">
                        <div className="month-navigation">
                            <button className="prev-month" onClick={handlePrevMonth}>{"<"}</button>
                            <h3 className="head-h3">
                                {months[currentMonth]} {currentYear}
                            </h3>
                            <button className="next-month" onClick={handleNextMonth}>{">"}</button>
                        </div>

                        <table className="calendar">
                            <thead>
                                <tr>
                                    <th>MON</th><th>TUE</th><th>WED</th><th>THU</th><th>FRI</th><th>SAT</th><th>SUN</th>
                                </tr>
                            </thead>
                            <tbody>
                                {renderCalendarDays()}
                            </tbody>
                        </table>
                    </div>

                    <div className="timeslots-section">
                        <h3 className="head-h3 text-center">Book Your Time Slot</h3>
                        <div className="timeslots">
                            <button className="timeslot highlight d-flex flex-column">2:00 PM <span>3:00 PM</span></button>
                            <button className="timeslot d-flex flex-column">3:00 PM <span>4:00 PM</span></button>
                            <button className="timeslot d-flex flex-column">4:00 PM <span>5:00 PM</span></button>
                            <button className="timeslot d-flex flex-column">5:00 PM <span>6:00 PM</span></button>
                            <button className="timeslot d-flex flex-column">6:00 PM <span>7:00 PM</span></button>
                            <button className="timeslot d-flex flex-column">7:00 PM <span>8:00 PM</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookConsultation;

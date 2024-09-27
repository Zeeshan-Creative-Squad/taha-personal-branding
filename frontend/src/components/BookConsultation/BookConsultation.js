import React from 'react';
import './BookConsultation.css';

const BookConsultation = () => {
    return (
        <div className="consultation-container">
            <div className='container'>
                <div className="header-section">
                    <h2 className='head-h2'>Tech Mentorship & Career Guidance</h2>
                    <h1 className='head-h1'>Book your <span className='spanHead'>Consultation</span></h1>
                    <p className='para_main'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim urna porttitor neque elementum cursus. Bibendum.</p>
                </div>

                <div className="calendar-time-container">
                    <div className="calendar-section">
                        <div className="month-navigation">
                            <button className="prev-month">{"<"}</button>
                            <h3 className='head-h3'>January 2024</h3>
                            <button className="next-month">{">"}</button>
                        </div>
                        <table className="calendar">
                            <thead>
                                <tr>
                                    <th>MON</th><th>TUE</th><th>WED</th><th>THU</th><th>FRI</th><th>SAT</th><th>SUN</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td><td></td><td className="highlight-day">1</td><td>2</td><td>3</td><td>4</td><td>5</td>
                                </tr>
                                <tr>
                                    <td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td>
                                </tr>
                                <tr>
                                    <td>13</td><td>14</td><td>15</td><td>16</td><td>17</td><td>18</td><td>19</td>
                                </tr>
                                <tr>
                                    <td>20</td><td>21</td><td>22</td><td>23</td><td>24</td><td>25</td><td>26</td>
                                </tr>
                                <tr>
                                    <td>27</td><td>28</td><td>29</td><td>30</td><td>31</td><td></td><td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="timeslots-section">
                        <h3 className='head-h3 text-center'>Book Your Time Slot</h3>
                        <div className="timeslots">
                            <button className="timeslot highlight d-flex flex-column">2:00 PM <span>3:00 PM</span></button>
                            <button className="timeslot d-flex flex-column">3:00 PM <span>4:00 PM</span></button>
                            <button className="timeslot  d-flex flex-column">4:00 PM <span>5:00 PM</span></button>
                            <button className="timeslot  d-flex flex-column">5:00 PM <span>6:00 PM</span></button>
                            <button className="timeslot  d-flex flex-column">6:00 PM <span>7:00 PM</span></button>
                            <button className="timeslot  d-flex flex-column">7:00 PM <span>8:00 PM</span></button>

                            {/* <button className="timeslot">4:00 PM</button>
                            <button className="timeslot">5:00 PM</button>
                            <button className="timeslot">6:00 PM</button>
                            <button className="timeslot">7:00 PM</button>
                            <button className="timeslot">8:00 PM</button>
                            <button className="timeslot">9:00 PM</button>
                            <button className="timeslot">10:00 PM</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookConsultation;

import React, { useState } from 'react';
import './PaymentForm.css';

const PaymentForm = () => {
    const [cardType, setCardType] = useState('MasterCard');

    const handleCardSelect = (type) => {
        setCardType(type);
    };

    return (
        <div className="payment-wrapper">
            <div className='container'>
                <div className="contact-header">
                    <h1 className='head-h1'>Get in<span className='spanHead'> Touch</span></h1>
                    <p className='para_main py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim urna porttitor neque elementum cursus. Bibendum.</p>
                </div>

                <div className="contact-body">
                    <div className="contact-form">
                        <h1 className='head-h3'>Send a message</h1>
                        <form className='main-group'>
                            <div className="form-group">
                                <div className="input-group">
                                    <label htmlFor="name">Name*</label>
                                    <input type="text" id="name" placeholder="Your First Name" required />
                                </div>

                                <div className="input-group">
                                    <label htmlFor="email">Email*</label>
                                    <input type="email" id="email" placeholder="Email Address" required />
                                </div>
                            </div>
                            <div className="card-select-group">
                                <p>Select Your Card</p>
                                <div className="card-options">
                                    <label className={`card-option ${cardType === 'MasterCard' ? 'selected' : ''}`}>
                                        <input
                                            type="radio"
                                            name="cardType"
                                            value="MasterCard"
                                            checked={cardType === 'MasterCard'}
                                            onChange={() => handleCardSelect('MasterCard')}
                                        />
                                        <span className="card-icon master-card"></span>
                                        <span>MasterCard</span>
                                    </label>

                                    <label className={`card-option ${cardType === 'Visa' ? 'selected' : ''}`}>
                                        <input
                                            type="radio"
                                            name="cardType"
                                            value="Visa"
                                            checked={cardType === 'Visa'}
                                            onChange={() => handleCardSelect('Visa')}
                                        />
                                        <span className="card-icon visa"></span>
                                        <span>Visa</span>
                                    </label>
                                    <div className="input-group">
                                        <label htmlFor="cardNumber">Card Number</label>
                                        <input type="text" id="cardNumber" placeholder="************" required />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group mt-2">

                                <div className="input-group">
                                    <label htmlFor="cvcNumber">CVC Number</label>
                                    <input type="text" id="cvcNumber" placeholder="123" required />
                                </div>

                                <div className="input-group">
                                    <label htmlFor="expiryDate">Expiry Date</label>
                                    <input type="text" id="expiryDate" placeholder="MM/YY" required />
                                </div>
                            </div>
                            {/* <textarea placeholder="Type Your Message" rows="4"></textarea> */}

                            <button type="submit" className="connect-button">Book Now</button>

                        </form>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default PaymentForm
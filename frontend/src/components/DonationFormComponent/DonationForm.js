import React from 'react';
import './DonationForm.css';

const DonationForm = () => {
    return (
        <div className='main-donation-container'>
        <div className='container'>
            <div className="Donation-form-container">
                <div className='under-form-container'>
                    <div className="form-group">
                        <label className='form-text'>First Name</label>
                        <input type="text" className="form-control" placeholder="Type Your First Name" />
                    </div>
                    <div className="form-group">
                        <label className='form-text'>Second Name</label>
                        <input type="text" className="form-control" placeholder="Type Your Second Name" />
                    </div>
                </div>
                <div className='under-form-container'>
                    <div className="form-group">
                        <label className='form-text'>Email Address</label>
                        <input type="email" className="form-control" placeholder="Type Your Email Address" />
                    </div>
                    <div className="form-group">
                        <label className='form-text'>Contact Number</label>
                        <input type="tel" className="form-control" placeholder="Type Your Phone Number" />
                    </div>
                </div>
                <div className="form-group">
                    <label className='form-text'>CNIC Number</label>
                    <input type="text" className="form-control" placeholder="Type Your CNIC Number" />
                </div>
                <div className='under-form-container'>
                    <div className="form-group">
                        <label className='form-text'>Select Your Service</label>
                        <select className="form-control">
                            <option>Cow Qurbani</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label className='form-text'>Per Portion Amount</label>
                        <input type="text" className="form-control" value="PKR 25,000" readOnly />
                    </div>
                </div>

                <div className='under-form-container'>
                    <div className="form-row">
                        <div className="form-group">
                            <label className='form-text'>Select Portions</label>
                            <div className="btn-group">
                                <button className="connect-button d-flex align-items-center">-</button>
                                <p className='head-h2 align-items-center'> 0 </p>
                                <button className="connect-button d-flex align-items-center"> + </button>
                                <h2 className='form-rs-price'> Rs. 25,000</h2>
                            </div>
                        </div>
                    </div>


                    <div className="form-row">
                        <div className="form-group">
                            <label className='form-text'>Donation Type</label>
                            <select className="form-control">
                                <option>I want meat</option>
                            </select>
                        </div>
                    </div>
                </div>


                
                    <label className='form-text'>Names for Sacrifice Shares</label>
                    <div className='under-form-container'>
                    <div className="add-name">
                        {/* <p className='para_main'>John</p> */}
                        </div>

<div>
                        <button className="primary-button">Add</button>
                        </div>
                        </div>

                        <div className="form-group mt-4">
                    <label className='form-text'>Type your message</label>
                    <textarea type="text" className="form-control" rows={5} placeholder="Type Your CNIC Number" style={{height: "150px"}}/>
                </div>
                    <div className='bottom-button'>
                        <button className='connect-button'>Submit</button>
                    </div>
                </div>
            </div>
            </div>
        


    );
};

export default DonationForm;

import React from 'react';
import './ZakatCalculatorSection.css';

const ZakatCalculatorSection = () => {
  return (
    <div className='container'>
      <div className="zakat-container">
        <h1 className="head-h1">Zakat <span className='span-black'>Calculator</span></h1>
        <p className="para_main mb-5">
          Zakat is the amount of money that every adult, mentally stable, free, and financially able Muslim, male and female, has to pay to support specific categories people. This category of people is defined in surah at-Taubah (9) verse 60: “The alms are only...
        </p>
        <div className="prices-container">
          <div className="gold-prices">
            <h2 className='head-h1'>Gold Prices (According to Carets)</h2>
            <div className='row prices para_main'>
              <p className='col-lg-3'>24K - 1 Gram (Rs. 20705/-)</p>
              <p className='col-lg-3'>23K - 1 Gram (Rs. 20705/-)</p>
              <p className='col-lg-3'>22K - 1 Gram (Rs. 20705/-)</p>
              <p className='col-lg-3'>21K - 1 Gram (Rs. 20705/-)</p>
              <p className='col-lg-3'>20K - 1 Gram (Rs. 20705/-)</p>
              <p className='col-lg-3'>19K - 1 Gram (Rs. 20705/-)</p>
              <p className='col-lg-3'>18K - 1 Gram (Rs. 20705/-)</p>
            </div>



          </div>
          <div className="silver-prices">
            <h2 className='head-h1'>Silver Prices</h2>
            <p className='para_main'>Pure Silver - 10 Grams (Rs. 2636/-)</p>
          </div>
        </div>
      </div>


      <div className="zakat-calculation-container">
     <div className='input-container-main'>
  <h1 className="zakat-title">Zakat Calculation</h1>
  <div className="input-container">
    <div class="input-group">
      <label>Total Cash</label>
      <input type="text" placeholder="Rs" />
    </div>
    <div class="input-group">
      <label>Total Value of Gold</label>
      <input type="text" placeholder="Rs" />
    </div>
    <div class="input-group">
      <label>Total Value of Silver</label>
      <input type="text" placeholder="Rs" />
    </div>
    <div class="input-group">
      <label>Total Liabilities Value (eg. Wages, Credit money, rent, etc.)</label>
      <input type="text" placeholder="Rs" />
    </div>
    <div class="input-group">
      <label>Total Investments Value (Stocks, Prize Bonds, Property, etc.)</label>
      <input type="text" placeholder="Rs" />
    </div>
    <div class="input-group">
      <label>Total Value of Trade Goods</label>
      <input type="text" placeholder="Rs" />
    </div>
    <div class="zakat-result">
      <span class="zakat-payable-label">Zakat Payable</span> 
      <span class="zakat-payable-amount">  Rs. 114000/-</span>
      <button class="calculate-button">Calculate Now</button>
    </div>
  </div>
  </div>
</div>

        
      </div>


    
  );
}

export default ZakatCalculatorSection;

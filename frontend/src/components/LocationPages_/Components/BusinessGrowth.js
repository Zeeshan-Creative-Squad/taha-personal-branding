import React from 'react';
import './BusinessGrowth.css';
import { Link } from 'react-router-dom';

const BusinessGrowth = ({normalHeading, highlightedHeading}) => {
    return (
        <div className='business_growth'>
            <h1 className='heading_capital'>{normalHeading} <span>{highlightedHeading}</span></h1> 
            <Link to='/seo-analysis'> <button className='button_main genral-btn' >FREE ANALYSIS</button> </Link>
        </div>
    )
}

export default BusinessGrowth;
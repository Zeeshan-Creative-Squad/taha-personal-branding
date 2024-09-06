import React,{useState} from 'react'
import "./BgTextContent.css"


function BgTextContent() {

  return (
    <div className='BgTextContent-container standard-padding-space standard-margin-space'>
        <div className='container my-5'>
            <div className='text-content text-center py-5'>
                <h3 className='head-h3 my-3 px-3 px-lg-1' style={{color:"white"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum</h3>
                <p className='body-paragraph px-3 px-lg-5' style={{color:"white"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
               
                <button className="connect-button mt-2">WORK WITH US</button>
               
                
            </div>

        </div>
    </div>
  )
}

export default BgTextContent
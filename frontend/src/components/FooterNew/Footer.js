import React from 'react'
import "./Footer.css"
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className='Footer-container standard-padding-space'>
        <div className='container mt-4'>
          <div className='text-content text-center d-flex flex-column align-items-center gap-4'>
          <img src='/images/icons/ETB-Logo.png' alt='navigation bar logo'/>
            <p className='body-paragraph mt-3'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum is simply dummy text of the printing
            </p>

           
            <div className='d-flex align-items-center justify-content-center flex-column flex-lg-row w-75 w-100 my-4 bottom-manu'>
              <h1 className='head-h3 d-lg-none d-md-block'>QUICKLINKS</h1>
              <NavLink to={"/"} className="anchor" exact activeClassName="active">
              HOME
              </NavLink>
              <NavLink to={"/about"} className="anchor" exact activeClassName="active">
              ABOUT
              </NavLink>
              <NavLink to={"/services"} className="anchor" exact activeClassName="active">
              SERVICES
              </NavLink>
              <NavLink to={"/blogs"} className="anchor" exact activeClassName="active">
              BLOGS
              </NavLink>
              <NavLink to={"/contact"} className="anchor" exact activeClassName="active">
              CONTACTUS
              </NavLink>
              <NavLink to={"#"} className="anchor" exact activeClassName="active">
              TERMS & CONDITIONS
              </NavLink>
              <NavLink to={"#"} className="anchor" exact activeClassName="active">
              PRIVACY POLICY
              </NavLink>
            
            </div>

            
          </div>
        </div>
        </div>
        <div className='py-3 Footer-Bottom-Stuff' style={{background:"white"}}>

        <div className="footer-last-section d-flex align-items-center justify-content-between w-100 container">
  <p className="para_main">
  © 2024 | All rights reserved. ETB Home Staging
  </p>
  <div className="social-icons-main">
    <img src="/images/icons/footer-fb-icon.svg" alt="Icon 1" className="social-icon" />
    <img src="/images/icons/footer-insta-icon.svg" alt="Icon 2" className="social-icon" />
    <img src="/images/icons/footer-linkedln-icon.svg" alt="Icon 3" className="social-icon" />
    <img src="/images/icons/footer-tiktok-icon.svg" alt="Icon 3" className="social-icon" />
  </div>
</div>

        </div>
        </>
  )
}

export default Footer;
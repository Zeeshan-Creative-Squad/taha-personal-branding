import "./ConnectPopup.css"
import { useNavigate } from "react-router-dom";

function ConnectPopup() {
  const navigate = useNavigate();
  return (
    <div className="main-container">
      <div className="container">
        <div className="Testimonials-container">
          <div className="row d-flex align-items-center">
            <div className="col-md-12 text-center">
              <h3 className="head-h1">Have projects in mind? Let’s work together</h3>
              <p className="para_main">Lorem Ipsum has been the printer took a galley of type and scrambled survived not only five finance software has love the financial haveing on centuries Lorem Ipsum has been the rinter took a galley of type and scrambled survived</p>
              <div className="button-section">
              <button onClick={() => navigate("/contact")} className="connect-button">Let's Connect</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConnectPopup;
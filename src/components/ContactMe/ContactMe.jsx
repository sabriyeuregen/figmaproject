import "./ContactMe.scss";
import { FaStar } from "react-icons/fa";
const ContactMe = () => {
  return (
    <div className="contact-me">
      <div className="contact-me__title">CONTACT ME</div>
      <div className="straight-line">
        <div className="line-left">
          <span>---------</span>
        </div>
        <div className="startpage-star">
          <FaStar />
        </div>
        <div className="line-right">
          <span>---------</span>
        </div>
      </div>
      <div className="contact-box">
        <div>Full name</div>
        <input></input>
        <div>Email address</div>
        <input></input>
        <div>Phone Number</div>
        <input></input>
        <div>Message</div>
        <div className="message-box">
        <input className="message-box__input"></input>
        </div>
        <button>Send</button>
      </div>
    </div>
  );
};

export default ContactMe;

import "./ContactInfo.scss";
import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineTwitter } from "react-icons/ai";
import { TfiLinkedin } from "react-icons/tfi";
import { TiSocialDribbble } from "react-icons/ti";

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <div className="contact-info__location">
        <div className="contact-info__location-title">LOCATION</div>
        <div className="contact-info__location-address">
          2215 John Daniel Drive
          <br />
          Clark, MO 65243
        </div>
      </div>
      <div className="contact-info__aroundweb">
        <div className="contact-info__aroundweb-title">AROUND THE WEB</div>
        <div className="contact-info__aroundweb-logos">
          <button>
            <TiSocialFacebook />
          </button>
          <button>
            <AiOutlineTwitter />
          </button>
          <button>
            <TfiLinkedin />
          </button>
          <button>
            <TiSocialDribbble />
          </button>
        </div>
      </div>
      <div className="contact-info__aboutfreelancer">
        <div className="contact-info__aboutfreelancer-title">
          ABOUT FREELANCER
        </div>
        <div className="contact-info__aboutfreelancer-content">
          &nbsp; &nbsp; &nbsp; Freelance is a free to use,MIT licensed <br />
          Bootstrap theme created by <span>Start Bootstrap</span>.
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;

import "./About.scss";
import { FaStar } from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";
const About = () => {
  return (
    <div className="about">
      <div className="about-title">ABOUT</div>
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
      <div className="about-paragraph">
        <div className="paragraph-left">
          <p>
            Freelancer is a free bootstrap the created by 
            Start Bootstrap. The download includes the
            complete source files including HTML,CSS and
            JavaScript as well as optional SASS stylesheets 
            for easy customization.
          </p>
        </div>
        <div className="paragraph-right">
          <p>
            You can create your own custom avatar for the
            masthead, change the icon in the dividers, and
            add your email address to the contact form to
            make it fully functional!
          </p>
        </div>
      </div>
      <div className="button">
        <button><AiOutlineDownload/> Free Downloand!</button>
      </div>
    </div>
  );
};

export default About;

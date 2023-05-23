import "./StartBootstrap.scss";
import { RxAvatar } from "react-icons/rx";
import { FaStar } from "react-icons/fa";
const StartBootstrap = () => {
  return (
    <div className="startpage">
      <div className="avatar">
        <RxAvatar />
      </div>
      <div className="startpage-headline">START BOOTSTRAP</div>
      <div className="straight-line">
        <div className="line-left">-</div>
        <div className="startpage-star">
          <FaStar />
        </div>
        <div className="line-rigth">-</div>
      </div>
      <div className="startpage-title">
        <span>Graphic Designer-Web Designer-Illustrator</span>
      </div>
    </div>
  );
};

export default StartBootstrap;

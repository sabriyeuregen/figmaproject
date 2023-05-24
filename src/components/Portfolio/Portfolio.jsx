import "./Portfolio.scss";
import { FaStar } from "react-icons/fa";
import data from "../../assets/images/images.json";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="portfolio-title">PORTFOLİO</div>
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
      <div className="portfolio-images">
        {data.map((project) => (
          <div key={project.id}>
            <img className="portfolio-img" src={project.img} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

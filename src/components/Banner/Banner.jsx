import Navbar from "../Navbar/Navbar";
import "./Banner.css";
import Vector from "../../assets/Vector.png";
import Kalendar from "../../assets/Kalendar.png";
import Search from "../../assets/Search.png";

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="middle">
        <Navbar />
          <div className="middle-first">
            <h4>Explorer and Travel</h4>
            <h2>Let’s Go Now</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>
          <div className="middle-item">
            <div className="middle-item-icon">
              <img src={Vector} alt="Location Icon" />
              <div className="icons-text">
                <p>Location</p>
                <p>Thailand</p>
              </div>
            </div>

            <div className="middle-item-icon">
              <img src={Kalendar} alt="Calendar Icon" />
              <div className="icons-text">
                <p>Date</p>
                <h5>13 May, 2023</h5>
              </div>
            </div>
            <button>
              <img className="middle-btn" src={Search} alt="Search Icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

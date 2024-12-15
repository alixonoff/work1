import Img1 from '../../assets/DestinationImg1.png';
import Img2 from '../../assets/DestinationImg2.png';
import Img3 from '../../assets/DestinationImg3.png';
import Img4 from '../../assets/DestinationImg4.png';
import './Destination.css';

const Destination = () => {
  return (
    <div className="destination">
      <div className="container">
        <div className="destination-wrapper">
          <div className="destion-text">
            <h3 className="logo">Choose your</h3>
            <p>Destination</p>
          </div>
          <div className="imgs-card">
            <div className="img-left">
              <div className="img-contanier">
                <img className="destion-img one" src={Img1} alt="" />
                <div className="overlay-content">
                  <h3>Malaysia</h3>
                  <button>16 TOURS</button>
                </div>
              </div>
            </div>
            <div className="img-right">
              <div className="img-right-top">
                <div className="img-contanier">
                  <img className="destion-img two" src={Img2} alt="" />
                  <div className="overlay-content">
                    <h3>Dubai</h3>
                    <button>16 TOURS</button>
                  </div>
                </div>
                <div className="img-contanier">
                  <img className="destion-img third" src={Img3} alt="" />
                  <div className="overlay-content">
                    <h3>Greece</h3>
                    <button>16 TOUR</button>
                  </div>
                </div>
              </div>
              <div className="img-right-bottom">
                <div className="img-contanier">
                  <img className="destion-img" src={Img4} alt="" />
                  <div className="overlay-content">
                    <h3>Singapore</h3>
                    <button>16 TOUR</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <button>View More</button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;

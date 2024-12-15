import './Reviews.css'
import imgs2 from '../../assets/coment2.png'
import imgs3 from '../../assets/coment3.png'
import imgs4 from '../../assets/coment-orta.png'
import imgs5 from '../../assets/coment5.png'
import imgs6 from '../../assets/coment6.png'

const Reviews = () => {
  return (
    <div className="reviews">
      <div className="conatiner">
        <div className="reviewd-wrapper">
        <div className="destion-text">
            <h3 className="logo">Review & Testimonials</h3>
            <p>TOP REVIWES FOR ETOUR</p>
            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</span>
          </div>
            <div className="coments">
              <div className="coment">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.....</p>
              
              </div>
            </div>
          <div className="people">
            <img src={imgs2} alt="" />
            <img src={imgs3} alt="" />
            <img src={imgs4} alt="" />
            <img src={imgs5} alt="" />
            <img src={imgs6} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reviews

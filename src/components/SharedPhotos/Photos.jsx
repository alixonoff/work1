import './Photos.css'
import photo1 from '../../assets/Photo.png'
import photo2 from '../../assets/photo2.png'
import photo3 from '../../assets/photo3.png'
const Photos = () => {
  return (
    <div className="photo">
        <div className="conatiner">
        <div className="destion-text">
            <h3 className="logo">Best Traveler’s</h3>
            <p>SHARED PHOTOS</p>
            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</span>
          </div>
          <div className="photos">
          <img src={photo1} alt="" />
          <img src={photo2} alt="" />
          <img src={photo3} alt="" />
          <img src={photo1} alt="" />
          <img src={photo2} alt="" />
          <img src={photo3} alt="" />
          </div>
        </div>
      

    </div>
  )
}

export default Photos

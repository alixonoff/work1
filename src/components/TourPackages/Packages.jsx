import { PAGESDATA } from "../../PagesStatic/pagesStatic"
import './Packages.css'
const Packages = () => {
  return (
    <div className="pakcges">
        <div className="container">
            <div className="packges-wrapper">
            <div className="destion-text">
            <h3 className="logo">Popular</h3>
            <p>TOURUR PACKAGES</p>
            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</span>
          </div>
          <div className="pages-cart">
            <div className="pages-cart">
              {
                PAGESDATA.map((item,index)=>{
                  return(
                    <div className="pcard" key={index}>
                    <img src={item.img} alt="" />
                  <div className="textp">
                    <div className="ptext">
                    <h5>{item.name}</h5>
                    <p>{item.day}</p>
                    </div>
                    <b>{item.price}</b></div>
                  </div>
                  )
                })
              }
            </div>
          </div>
          
            </div>
            </div>      
    </div>
  )
}

export default Packages

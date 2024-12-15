import { DATA } from "../../static/static"
import "./Activity.css"
const Activity = () => {
  return (
    <div className="activity">
      <div className="conatiner">
        <div className="activity-wrapper">
        <div className="destion-text">
            <h3 className="logo">Travel by</h3>
            <p>ACTIVITY</p>
            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</span>
          </div>
          <div className="activity-carts">
            <div className="activity-carts">
            {DATA.map((item, index)=>{
              return(
                <div className="activity-cart" key={index}>
                  <img style={{width:125, height:122}} src={item.img} alt="" />
                  <h2>{item.title}</h2>
                  <p>{item.p}</p>
                </div>
              )
            })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Activity

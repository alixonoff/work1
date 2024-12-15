import footerimg from '../../assets/Footerfrist.png'
import './Footerf.css'
const Footerfirst = () => {
  return (
    <div className='footerfirst'>
        <div className="contaner">
            <div className="footerf-wrapper">
                <div className="fbg">
                <div className="f-left">
                    <img src={footerimg} alt="" />
                </div>
                <div className="f-rigt">
                    <h2>Get Our Monthly
                    Newsletter</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                    <div className="f-input">
                        <input type="text" placeholder='Input your emaill address in here' />
                        <button>-></button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footerfirst

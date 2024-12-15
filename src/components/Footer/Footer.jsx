import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import './Footer.css'
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <footer>
        <div className="footer-wrapper">
            <div className="f1">
                <h2>Listee Travel</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div className="ficons">
                   <FaFacebook/> <FaInstagram/> <FaYoutube/> <FaTwitter/>
                </div>
           </div>
           <div className="f2">
                <h1>About</h1>
                <ul>
                    <li>Menu</li>
                    <li>Features</li>
                    <li>News & Blogs</li>
                    <li>Help & Supports</li>
                </ul>
           </div>
           <div className="f2">
                <h1>Company</h1>
                <ul>
                    <li>How we work</li>
                    <li>Terms of service</li>
                    <li>Pricing</li>
                    <li>FAQ</li>
                </ul>
           </div>
           <div className="f2">
                <h1>Contact Us</h1>
                <ul>
                    <li>Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</li>
                    <li>+1 202-918-2132</li>
                    <li>listeetravel@mail.com</li>
                    <li>www.listeetravel.com</li>
                </ul>
           </div>
        </div>
        </footer>
      </div>
    </div>
  )
}

export default Footer

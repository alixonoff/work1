import "./Navbar.css"
import { FiAlignJustify } from "react-icons/fi";
export default function Navbar() {
  return (

    <div className="container">
    <div className="navbar">
    <header>
      <div className="logo">Listee Travel</div>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Destinations</li>
                    <li>Tours</li>
                    <li>Shop</li>
                    <li>Blogs</li>
                </ul>
                <div className="buttons">
                    <p>Sign In</p>
                    <button>Sign Up</button>
                </div>
                <div className="icons">
                  <p><FiAlignJustify /></p>
                </div>
            </header>
            

        </div>    
    </div>
  )
}

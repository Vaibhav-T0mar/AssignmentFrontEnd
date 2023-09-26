import {BsTruck} from "react-icons/bs"
import {FiFacebook,FiInstagram} from "react-icons/fi"
import {BiLogoLinkedin} from "react-icons/bi"
import {PiTwitterLogoDuotone} from "react-icons/pi"
 
import "./navup.css"
const NavbarUp = () => {
  return (
    <div className='container'>
        <div className="leftSideIcon">
        <BsTruck/>
        <div className="free-delivery">
        <p>Free Delivery</p>

        </div>
        <div className="empty">|</div>
        <div className="return-policy">
        <p>Return Policy</p>

        </div>
        </div>
        <div className="rightSideIcon">
            <p>Login</p>
            <p>Follow Us</p>
            <div className="icons">
            <FiFacebook/>
            <BiLogoLinkedin/>
            <PiTwitterLogoDuotone className="twitterLogo"/>
            <FiInstagram/>
            </div>
        </div>
    </div>
  )
}

export default NavbarUp
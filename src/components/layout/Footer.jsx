import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"
import ListItems from "../ListItems";
import "../../styles/layout/Footer.css"


function Footer()
{
    return(
        <footer>
            <p>Free<span>lancer</span></p>
            <ul className="social-links">
                <ListItems link="https://facebook.com" icon={<FaFacebook />} />
                <ListItems link="https://twitter.com"   icon={<FaTwitter />} />
                <ListItems link="https://instagram.com" icon={<FaInstagram />} />
                <ListItems link="https://linkedin.com"  icon={<FaLinkedin />} />
                <ListItems link="https://github.com"    icon={<FaGithub />} />
            </ul>
            <h2 className="email">someone@example.com</h2>
            <ul>
                <ListItems text="Home" />
                <ListItems text="About" />
                <ListItems text="Services" />
                <ListItems text="Portfolio" />
                <ListItems text="Pricing" />
                <ListItems text="Contact us" />
            </ul>
            <p className="comment">Developped by <span>Saad05-dev</span></p>
        </footer>
    )
}

export default Footer;
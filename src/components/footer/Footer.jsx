import facebookLogo from '../../assets/facebook.svg'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container">
        <img src={facebookLogo} alt="" />
        <img src={facebookLogo} alt="" />
        <img src={facebookLogo} alt="" />
      </div>
    </footer>
  );
}

export default Footer;

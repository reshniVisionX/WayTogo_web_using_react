import '../css/footer.css';
import React from 'react';
import { Link } from 'react-router-dom';



const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" 
    });
  };
const openContact = () => {
    window.location.href = "/contact";
}

const Footer = () => {
  return (
    <div>
     
<footer>
    <h2>HURRY UP! CONTACT US TODAY AND GET</h2>
    <h1>FREE FIRST CONSULTATION!</h1>
    <button type="button" id="btnf" onClick={openContact}>BOOK YOUR CONSULTATION</button>
    
<h2>Follow us on social media</h2>
<div className="social_media">
<img src="https://images.vexels.com/media/users/3/223136/isolated/preview/984f500cf9de4519b02b354346eb72e0-facebook-icon-social-media-by-vexels.png" alt="img" className="fa fa-facebook"></img>
<img src="http://icons.iconarchive.com/icons/iynque/ios7-style/1024/Twitter-icon.png" alt="img" className="fa fa-twitter"/>
<img src="http://clipart-library.com/new_gallery/410617_facebook-icon-transparent-png.jpg" className="fa fa-instagram" alt="img"></img>
<img src="http://www.clipartbest.com/cliparts/yio/6Xo/yio6XoAyT.png" className="fa fa-youtube" alt="img"></img>
<img src="https://clipground.com/images/pinterest-logo-clipart-transparent-background.png" alt="img" className="fa fa-pinterest"></img>
<img src="https://1.bp.blogspot.com/-onvhHUdW1Us/YI52e9j4eKI/AAAAAAAAE4c/6s9wzOpIDYcAo4YmTX1Qg51OlwMFmilFACLcBGAsYHQ/s1600/Logo%2BLinkedin.png" alt="img" className="fa fa-linkedin"></img>
</div>
</footer>
<div className="foot">
    <div className="footer2">
        <div className="footer-content">
            <div className="footer-section about">
                <h2>About Us</h2>
                <p>Immigration | Education |Legal</p>
            </div>

            <div className="footer-section links">
                <h2>Quick Links</h2>
                <ul>
                
          <h3 onClick={scrollToTop}>
            <Link to="/" >Home</Link>
          </h3>
          <h3 onClick={scrollToTop}>
            <Link to="/trending">Trending</Link>
          </h3>
          <h3 onClick={scrollToTop}>
            <Link to="/destinations">Our Destinations</Link>
          </h3>
          <h3 onClick={scrollToTop}>
            <Link to="/resources">Resources</Link>
          </h3>
          <h3 onClick={scrollToTop}>
            <Link to="/services">Our Services</Link>
          </h3>
          <h3 onClick={scrollToTop}>
            <Link to="/contact">Contact us</Link>
          </h3>
          
                </ul>
            </div>

            <div className="footer-section contact">
                <h2>Contact Us</h2>
                <p>Email: reachout@waytogo.com</p>
                <p>Phone: +1 234 567 890</p>
            </div>
        </div>

        <div className="footer-bottom">
            <p>&copy; 2024 Your Company. All Rights Reserved.</p>
        </div>
    </div>
</div>
    </div>
  );
};

export default Footer;

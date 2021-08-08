import React from 'react';
import './styles.scss';
import facebookLogo from '../../assets/facebook.png'
import githubLogo from '../../assets/github.png'
import instagramLogo from '../../assets/instagram.png'


const Footer = props => {
  return (
    <footer className="footer">
      
  <div className="footer">
                <div className="socialContact">
                    <div className="container">
                        <div className="row">
                            <div className="col-3" id="footerTitle">
                                <div className="row">
                                    <div className="col-3">
                                    </div>
                                        <div className="col-6">
                                                <div className="footerTitle"><span>BROKENFANG VIETNAM</span></div>
                                                <div className="footerTitle-2"><span> © 2021 BROKENFANG</span></div>
                                        </div>
                                </div>
                            </div>

                        <div className="col-3">
                            <div className="footerTitle"><span>ABOUT US</span></div>    
                            <div className="col-6">
                                    <ul className="list-footer">
                                        <li><a href="#" target="_blank" rel="noreferrer">ABOUT US</a></li>
                                        <li><a href="#" target="_blank" rel="noreferrer">GIFT CARD</a></li>
                                        <li><a href="#" target="_blank" rel="noreferrer">CAREER</a></li>
                                    </ul>
                            </div>
                        </div>

                        <div className="col-3">
                            <div className="footerTitle"><span>CUSTOMER SERVICE</span></div>
                            <div className="col-6">
                                    <ul className="list-footer">
                                        <li><p>HOTLINE : <span className="list-footer-info">1234567890</span></p></li>
                                        <li><p>EMAIL SUPPORT: <span className="list-footer-info">brokenfang@usth.vn</span></p></li>
                                        <li><p>ADDRESS : <span className="list-footer-info">18 Hoang Quoc Viet</span></p></li>
                                        <li><p>WORKING HOURS : <span className="list-footer-info">8 A.M - 6 P.M </span></p></li>
                                    </ul>
                            </div>
                        </div>

                        <div className="col-3">
                        <div className="footerTitle"><span>FOLLOW US</span></div>
                            <div className="row pl-3 pt-2">
                                <div className="socialLogo" ><a href="#"><img className="social-Logo" src={facebookLogo} alt="social-facebook"/></a></div>
                                <div className="socialLogo" ><a href="#"><img className="social-Logo" src={instagramLogo} alt="social-instagram"/></a></div>
                                <div className="socialLogo" ><a href="#"><img className="social-Logo" src={githubLogo} alt="social-github"/></a></div>
                            </div>
                        </div>
                        </div>   
                    </div>
                </div>
            </div>
    </footer>
  );
}

export default Footer;
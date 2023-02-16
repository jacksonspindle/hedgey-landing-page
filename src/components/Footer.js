import React from "react";
import { Link } from "react-router-dom";
import mediumLogo from "../medium-logo.png";
import twitterLogo from "../twitter-logo.png";
import mailLogo from "../mail-logo.png";

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="footer-column1">
          <h4>Learn More</h4>
          <ul>
            <li>
              <Link>info@parachutetoken.com</Link>
            </li>
            <li>
              <Link>Coin Market Cap</Link>
            </li>
            <li>
              <Link>Etherscan</Link>
            </li>
          </ul>
        </div>
        <div className="footer-column2">
          <h4>Community</h4>
          <ul>
            <li>
              <Link>Etherscan</Link>
            </li>
          </ul>
        </div>
        <div className="footer-column3">
          <h4>Terms</h4>
          <ul>
            <li>
              <Link>Terms of Use</Link>
            </li>
            <li>
              <Link>Privacy</Link>
            </li>
          </ul>
        </div>
        <div className="footer-column4 ">
          <img src={mediumLogo}></img>
          <img src={twitterLogo}></img>
          <img src={mailLogo}></img>
        </div>
      </div>
      {/* <hr /> */}
    </div>
  );
};

export default Footer;

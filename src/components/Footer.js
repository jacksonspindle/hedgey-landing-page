import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="footer-column1">
          <h4>Legal</h4>
          <ul>
            <li>
              <Link>Terms</Link>
            </li>
            <li>
              <Link>Privacy</Link>
            </li>
          </ul>
        </div>
        <div className="footer-column2">
          <h4>Docs</h4>
          <ul>
            <li>
              <Link>Documentation</Link>
            </li>
            <li>
              <Link>Audits</Link>
            </li>
          </ul>
        </div>
        <div className="footer-column3">
          <h4>Community</h4>
          <ul>
            <li>
              <Link>Twitter</Link>
            </li>
            <li>
              <Link>Privacy</Link>
            </li>
          </ul>
        </div>
        <div className="footer-column3">
          <h4>Book a time</h4>
          <ul>
            <li>
              <Link>Calendly</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* <hr /> */}
    </div>
  );
};

export default Footer;

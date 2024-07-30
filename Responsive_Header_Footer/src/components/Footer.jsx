import React from "react";
import "../css/Footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer">
        <div className="footer-section">
          <div className="logo">
            <div className="logo-image">
              <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.9iAQnPCcGZ50_1zcaGCWCAHaHQ%26pid%3DApi&f=1&ipt=7123af6379f6d86f11205dcdfa593c94ef7f7ce2702dd18b6704ed062238139b&ipo=images"
                alt="logo"
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui natus
              voluptas, a reiciendis explicabo praesentium! Repudiandae hic.
            </p>
            <ul>
              <li>
                <a href="">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fab fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="about">
            <p>About US</p>
            <nav>
              <ul>
                <li>
                  <a href="">Company History</a>
                </li>
                <li>
                  <a href="">Meet the Team</a>
                </li>
                <li>
                  <a href="">Employee Handbook</a>
                </li>
                <li>
                  <a href="">Careers</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="service">
            <p>Our Services</p>
            <nav>
              <ul>
                <li>
                  <a href="">Web Development</a>
                </li>
                <li>
                  <a href="">Web Design</a>
                </li>
                <li>
                  <a href="">Marketing</a>
                </li>
                <li>
                  <a href="">Google Ads</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="link">
            <p>Helpful Links</p>
            <nav>
              <ul>
                <li>
                  <a href="">FAQs</a>
                </li>
                <li>
                  <a href="">Support</a>
                </li>
                <li>
                  <a href="">Live Chat</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="contact">
            <p>Contact Us</p>
            <ul>
              <li>
                <a href="">
                  <i className="fas fa-envelope"></i>
                  <span>john@doe.com</span>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fas fa-phone"></i>
                  <span>9841236595</span>
                </a>
              </li>
              <li>
                <i className="fas fa-map-marker"></i>
                <address>213 Lane, London, UK</address>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright-section">
          <div className="copyright">
            <p>&copy; 2024 M and MB Soft Tech</p>
          </div>
          <div className="terms-conditions">
            <p>
              All rights reserved. <a href="">Terms & Conditions</a> |{" "}
              <a href="">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import logo from "../large-logo.png";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  ExternalLink
} from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Main Footer Content */}
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-section">
            <div className="brand">
              <img src={logo} alt="PIA logo" className="brand-logo"></img>
            </div>
            <p className="brand-description">
              Building innovative solutions that empower businesses and individuals to achieve their full potential through cutting-edge technology.
            </p>
            <div className="social-links">
              <a href="https://linkedin.com/in/samupif" className="social-link">
                <Linkedin size={25} />
              </a>
            </div>
          </div>

          {/* Product Links */}
          {/* <div className="footer-section">
            <h4 className="section-title">Product</h4>
            <ul className="link-list">
              {['Features', 'Pricing', 'Integrations', 'API', 'Documentation', 'Changelog'].map((item) => (
                <li key={item}>
                  <a href="#" className="footer-link">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Company Links */}
          <div className="footer-section">
            <h4 className="section-title">Company</h4>
            <ul className="link-list">
              {['About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="footer-link">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div className="footer-section">
            <h4 className="section-title">Stay tuned</h4>
            <p className="newsletter-description">
              Stay ahead with our most recent news.
            </p>
            
            {/* Newsletter Signup */}
            <div className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
              />
              <button className="newsletter-button">
                <Send size={16} />
              </button>
            </div>

            {/* Contact Info */}
            <div className="contact-info">
              <div className="contact-item">
                <Mail size={14} />
                <span>hello@pia.com</span>
              </div>
              <div className="contact-item">
                <MapPin size={14} />
                <span>Guadalajara, Jal.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="bottom-content">
            {/* Copyright */}
            <div className="copyright">
              © {currentYear} PIA. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="legal-links">
              <a href="#" className="legal-link">
                Privacy Policy
              </a>
              <a href="#" className="legal-link">
                Terms of Service
              </a>
              <a href="#" className="legal-link">
                Cookie Policy
              </a>
              <a href="#" className="legal-link status-link">
                <span>Status</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
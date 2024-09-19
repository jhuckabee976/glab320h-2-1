import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-social">
        <a href="https://facebook.com">Facebook</a> | 
        <a href="https://twitter.com">Twitter</a> | 
        <a href="https://instagram.com">Instagram</a>
      </div>
      <h1>
        <span className="footer-emoji">✨ Created by Me, of Course. ✨</span>
      </h1>
    </footer>
  );
}

export default Footer;
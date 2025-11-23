import React from "react";
import {
  FiPhone,
  FiInfo,
  FiUser,
  FiCreditCard,
  FiTruck,
  FiRotateCcw,
  FiShield,
  FiBook,
  FiFileText
} from "react-icons/fi";

import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>

        {/* About */}
        <div style={styles.column}>
          <h3 style={styles.heading}>About</h3>
          <FooterLink icon={<FiPhone />} text="Contact Us" />
          <FooterLink icon={<FiInfo />} text="About Us" />
          <FooterLink icon={<FiUser />} text="Careers" />
        </div>

        {/* Help */}
        <div style={styles.column}>
          <h3 style={styles.heading}>Help</h3>
          <FooterLink icon={<FiCreditCard />} text="Payments" />
          <FooterLink icon={<FiTruck />} text="Shipping" />
          <FooterLink icon={<FiRotateCcw />} text="Returns" />
        </div>

        {/* Policy */}
        <div style={styles.column}>
          <h3 style={styles.heading}>Policy</h3>
          <FooterLink icon={<FiFileText />} text="Terms Of Use" />
          <FooterLink icon={<FiShield />} text="Security" />
          <FooterLink icon={<FiBook />} text="Return Policy" />
        </div>

        {/* Social */}
        <div style={styles.column}>
          <h3 style={styles.heading}>Social</h3>
          <FooterLink icon={<FaFacebook />} text="Facebook" />
          <FooterLink icon={<FaTwitter />} text="Twitter" />
          <FooterLink icon={<FaInstagram />} text="Instagram" />
        </div>

      </div>

      <div style={styles.bottom}>
        © 2025 TRIZEN. All rights reserved.
      </div>
    </footer>
  );
};

const FooterLink = ({ icon, text }) => (
  <div style={styles.linkContainer}>
    <span style={styles.icon}>{icon}</span>
    <a style={styles.link}>{text}</a>
  </div>
);

/* Styling */
const styles = {
  footer: {
    backgroundColor: "#172337",
    color: "white",
    padding: "40px 20px",
    marginTop: "40px",
  },

  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "30px",
  },

  column: {
    display: "flex",
    flexDirection: "column",
  },

  heading: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "20px",
  },

  linkContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "14px",
    cursor: "pointer",
  },

  icon: {
    color: "#9ca3af",
    fontSize: "16px",
  },

  link: {
    color: "#9ca3af",
    fontSize: "14px",
    textDecoration: "none",
  },

  bottom: {
    marginTop: "30px",
    textAlign: "center",
    color: "#9ca3af",
    paddingTop: "20px",
    borderTop: "1px solid #374151",
    fontSize: "14px",
  },
};

export default Footer;

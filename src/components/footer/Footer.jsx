import React from "react";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={`row ${styles.footer}`}>
      <div className="col-1"></div>
      <div className="col-4">
        <img src="./img/w.png" alt="" />
        <p className={`row ${styles.footerP1}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut laboreorem. <br /> <br /> <br />{" "}
          adipiscing elit, sed do eiusmod tempor incididunt ut laboreorem.
        </p>
      </div>
      <div className="col-3">
        <p className={`${styles.footerP2}`}>Quick Search</p>
        <p className={`${styles.footerP3}`}>
          Review Write a Review Join as a Vender About FAQs Contact Team Review
          Write a <br /> <br /> Review Join as a Vender About FAQs Contact Team
        </p>
      </div>
      <div className="col-3">
        <p className={`${styles.footerP2}`}>Quick Search</p>
        <p className={`${styles.footerP3}`}>
          Review Write a Review Join as a Vender About FAQs Contact Team Review
          Write a <br /> <br /> Review Join as a Vender About FAQs Contact Team
        </p>
      </div>
      <div className={`col-12 ${styles.footerdp}`}>
        <p>
          All rights reserved by Cyberpal App Limited. 2020 - 2021 <br />{" "}
          Privacy Policy Terms of Use Cookie Policy{" "}
        </p>
      </div>
      <div className={`col-12 ${styles.footerlp}`}>
      <p >
        CyberPal is the trading name of CyberPal App Limited. Company
        Registration No. 11814688, Registered in England and <br /> Vales. Registered
        Office : Kemp House, 160 City Road, London, United Kingdom, EC1V 2NX
      </p>
      </div>
    
    </div>
  );
};

export default Footer;

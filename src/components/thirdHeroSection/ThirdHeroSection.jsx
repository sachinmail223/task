import React from "react";
import styles from "./ThirdHeroSection.module.css";

const ThirdHeroSection = () => {
  return (
    <div className={`row ${styles.thirdHeroSection}`}>
      <div className={`col-8 ${styles.thirdHeroSectionTop}`}>
        <div className="row">
          <div className={`col-6 ${styles.div}`}>
            <span className={`${styles.span}`}>
              CyberPal Scoring and Analysis
            </span>
          </div>
          <div className="col-5">
            <button className={`${styles.span1}`}>BRF Score</button>
            <button className={`${styles.span2}`}>79</button>
          </div>
          
          <div className={`col-6 ${styles.rating}`}>
          <span className={`${styles.span}`}>Base Rating Framework</span>
          <p>
            5th generation cyber-attacks with an industry leading catch rate of
            malware, ransomware and Advanced targeted threats generation
            cyber-attacks
          </p>
          <button>Our Scoring Methodology</button>
        </div>
        <div className={`col-5 ${styles.meater}`}>
          <img src="./img/meater.png" alt="" />
        </div>
        <div className={`${styles.primeCol}`}>
<span className={`${styles.prime}`}>Prime Factors</span>
<div className="row">
  <div className={`col-3 ${styles.business}`}>
    <p >Business Credibility</p>
    <p >Customer perception</p>
  </div>
  <div className="col-3">
  <div className={`${styles.bar1}`}>
    <div></div>
  </div>
  <div className={`${styles.bar2}`}>
  <div></div>
  </div>
  </div>
  <div className={`col-3 ${styles.business}`}>
    <p >Business Credibility</p>
    <p >Customer perception</p>
  </div>
  <div className="col-3">
  <div className={`${styles.bar1}`}>
    <div></div>
  </div>
  <div className={`${styles.bar2}`}>
  <div></div>
  </div>
  </div>
  
</div>
        </div>
        <div className="col-6">

        </div>
      </div>
        </div>
        
      <div className={`col-4 ${styles.left}`}>
        <div>
        <p className={`${styles.p1}`}></p>
      <p className={`${styles.p2}`}></p>
      <p className={`${styles.p3}`}></p>
      <p className={`${styles.p4}`}></p>
        </div>
        <img src="./img/pyramid.png" alt="" />
        <p className={`${styles.brf}`}>BRF Pyramid</p>
        <p className={`${styles.brf2}`}>Lorem ipsum dolor sit ametconsectetur adipisc ing elied do eiusmodet, con secg</p>
     <button className={`${styles.view}`}>
       View Detail
     </button>
      </div>
    </div>
  );
};

export default ThirdHeroSection;

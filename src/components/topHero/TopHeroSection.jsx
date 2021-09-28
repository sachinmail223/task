import React from "react";
import styles from "./TopHeroSection.module.css";

const TopHeroSection = () => {
  return (
    <>
      <div className={`w-100 ${styles.topHero} position-relative`}>
        <img src="./img/topHero.png" alt="" className=" vw-100 " />
        <div className="row position-absolute w-100 h-100 p-0 top-0">
          <div className={`col-6 ${styles.topHeroLeft}`}>
            <span
              className={`px-3 py-1 pl-0 rounded-pill text-white ${styles.varified} `}
            >
              <img src="./img/corect.png" alt="corect" />
              <span className="ml-1">Varified</span>
            </span>
            <p>Lorem ipsum dolorsit consec tetur um dol</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmodet, consectetur adipiscing elit, sed do eiusmod
            </p>
            <button className={`btn ${styles.btn1}`}>Our Solutions</button>
            <button className={`btn ${styles.btn2}`}>Contact our Team</button>

            <p className={`${styles.rating}`}>
                <img src="./img/star.png" alt="star" />
                <img src="./img/star.png" alt="star" />
                <img src="./img/star.png" alt="star" />
                <img src="./img/star.png" alt="star" />
                <img src="./img/star.png" alt="star" />
                <span>(234 Reviews)</span>
            </p>
          </div>
          <div className="col-6">
            <img
              src="./img/cyberPal.png"
              alt="cyberPal"
              className={`float-end ${styles.cyberPal}`}
            />
          </div>
          <div className="col-4"></div>
          <div className={`col-7 position-relative ${styles.benerBotom}`}>
            <div className={`col position-absolute ${styles.benerBotomFirst}`}>
            <img src="./img/A+.png" alt="A+"  />
              <button className={`btn ${styles.benerBotomspan}`}>
              <ul>10+</ul>
              <ul>Years of Experience</ul>
              </button>
              <button className={`btn ${styles.benerBotomspan}`}>
              <ul>100</ul>
              <ul>Active Clients</ul>
              </button>
              
            </div>
             
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeroSection;

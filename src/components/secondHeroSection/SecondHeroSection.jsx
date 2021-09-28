import React from "react";
import styles from "./SecondHeroSection.module.css"
const SecondHeroSection = () => {
  return (
    <div className={`row ${styles.aboutRow}`}>
      <div className={`col-8 ${styles.about}`}>
        <p>About us</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmodet, conse ctetgipis cing lit, sed do eius., conse ctetgipis
          cing lit, sed do eius.
        </p>
        <div className="row">
          <div className={`col-4 ${styles.mission}`}>
            <p>Mission</p>
            <p>
              Lorem ipsum dolor sit amet, consecte tur adipiscing elit, sed do
              eiusmo det, consectetur adipiscing
            </p>
          </div>
          <div className={`col-4 ${styles.mission}`}>
            <p>Mission</p>
            <p>
              Lorem ipsum dolor sit amet, consecte tur adipiscing elit, sed do
              eiusmo det, consectetur adipiscing
            </p>
          </div>
        </div>
<div className={` ${styles.smallBtn}`}>
<button className="btn"><span>Consectetur adipiscin</span> </button>
<button className="btn">Dcte ipiscin</button>
<button className="btn">Consectetu</button>
<button className="btn">Dcte ipiscin</button>
<br/>
<button className="btn">Consectetu</button>
<button className="btn">Dcte ipiscin</button>
        
</div>

<div className={` ${styles.bigBtn}`}>
    <button className="btn">
        <img src="./img/pdf.png" alt="" />
        Brochure
    </button>
    <div className={` ${styles.bigBtnBoth}`}>
    <button className="btn">
    <img src="./img/play.png" alt="" />
    Intro Video
    </button>
    <button className="btn">
    <img src="./img/www.png" alt="" />
    Website
    </button>
    </div>
</div>

      </div>
      <div className={`col-4 ${styles.aboutImgCol}`}>
          <img src="./img/about.png" alt="" className={` ${styles.aboutImg}`}/>
          <div className={`row ${styles.smallImgRow}`}>
              <div className="col-4">
                  <img src="./img/2.png" alt="" className={` ${styles.smallImg}`}/>
              </div>
              <div className="col-4">
                  <img src="./img/1.png" alt="" className={` ${styles.smallImg}`}/>
              </div>
              <div className="col-4">
                  <img src="./img/3.png" alt="" className={` ${styles.smallImg}`} />
              </div>
          </div>
      </div>
    </div>
  );
};

export default SecondHeroSection;

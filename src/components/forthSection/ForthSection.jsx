import React from "react";
import styles from "./ForthSection.module.css";
const ForthSection = () => {
  return (
    <div className={`${styles.forthSection}`}>
      <div className="row">
        <div className={`col-3 ${styles.forthSectionour}`}>
          <p className={`${styles.our}`}>Our Solution</p>
          <div className={` ${styles.box1}`}>
            <p className={`${styles.p1box1}`}>78%</p>
            <p className={`${styles.div1box1}`}>
              <p className={`${styles.div2box1}`}></p>
            </p>
            <p className={`${styles.p2box1}`}>
              Cumulative online community rating
            </p>
          </div>
          <div className={` ${styles.box2}`}>
            <img src="./img/building1.png" alt="" />
            <p className={`${styles.p1box2}`}>
              Best Fit for <img src="./img/question.png" alt="" />
            </p>
            <p className={`${styles.p2box2}`}>Small Business</p>
          </div>
          <div className={` ${styles.box2}`}>
            <img src="./img/building2.png" alt="" />
            <p className={`${styles.p1box2}`}>
              Vendor Type <img src="./img/question.png" alt="" />
            </p>
            <p className={`${styles.p2box2}`}>Leader</p>
          </div>
        </div>

        <div className={`col-4 ${styles.next}`}>
          <p className={`${styles.nextp1}`}>Next Gen Firewall</p>
          <img src="./img/3rd.png" alt="" />
          <p className={`${styles.nextp2}`}>
            Lorem ipsum dolor sit amet, conse cr adipiscing elit, sed do eius
            mode.
          </p>
          <p className={`${styles.nextp3}`}>
            Cyberpal verified that this company's firewall  solutions is best
            fit for Small Business and it belongs to Pioneers segment. Cyberpal
            verified that this company's firewall solutions...
          </p>
          <button className={`${styles.nextbutton}`}>View Detail</button>
        </div>

        <div className={`col-4 ${styles.nextimg}`}>
            <img src="./img/NoPath.png" alt="" />
            <img src="./img/NoPath2.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ForthSection;

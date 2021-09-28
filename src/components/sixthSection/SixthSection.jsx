import React from "react";
import styles from "./SixthSection.module.css";
const SixthSection = () => {
  return (
    <div className={`row vh-100 ${styles.sixth}`}>
      <img src="./img/sixth.png" alt="" />
      <div className="col h-100">
      <p className={`${styles.sixp1}`}>Director Message</p>
      <p className={`${styles.sixp2}`}>
        Lorem ipsum dolor sit amet, conse adipiscing elit, sed do eius mode.
        Lorem ipsum dolor sit amet, conser adipiscing elit, sed do eius
        mode.adipiscing eli.
      </p>
      <p className={`${styles.sixp2}`}>
      Person Name (CEO)
      </p>
     <div className="row">
     <div className="col-1">
      <p className={`${styles.sixDiv}`}>
          <img src="./img/six1.png" alt="" />
      </p>
      </div>
      <div className="col-1">
      <p className={`${styles.sixDiv}`}>
          <img src="./img/six2.png" alt="" />
      </p>
      </div>
      <div className="col-1">
      <p className={`${styles.sixDiv}`}>
          <img src="./img/six3.png" alt="" />
      </p>
      </div>
     </div>
     
     
      </div>
     

    </div>
  );
};

export default SixthSection;

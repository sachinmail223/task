import React from 'react'
import styles from './Navbar.module.css'
const Navbar = () => {
    return (
        <div className={` ${styles.nav}`}>
            <div className={`col-2 ${styles.logo}`}>
              <p className={`${styles.logos1}`}>LOGO</p>
              <p className={`${styles.logos2}`}>Powered by CyberPal.io</p>

            </div>
            <div className="col-2"><img src="./img/Group1649.png" alt="" /></div>
            <div className="col-5"></div>
            <div className="col-2">
                <ul className={`${styles.ul}`}>
                    <li><a href="#">Company</a></li>
                    <li><a href="#"> Products</a></li>
                    <li><a href="#"> Testimonials</a></li>
                    <li><a href="#"> Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar


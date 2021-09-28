import React from 'react'
import styles from './Navbar.module.css'
const Navbar = () => {
    return (
        <div>
            <div className={`col-1 ${styles.logo}`}>
              <p>LOGO</p>
            </div>
        </div>
    )
}

export default Navbar


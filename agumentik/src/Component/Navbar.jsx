import React from 'react'
import styles from "../styles/navbar.module.css"
import {NavLink} from "react-router-dom"

const nav__links = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/anotherpage",
    display: "Another Page",
  },
  {
    path: "/#",
    display: "Classes",
  },
  {
    path: "/#",
    display: "Contact us",
  },
];

const Navbar = () => {
  return (
    <nav>
     <div className={styles.container}>
      <div className={styles.logo__name}>
        <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="logo" /><span className={styles.title}>COURZEES</span>
        </div>
     <div className={styles.path__links}>
     <ul className={styles.nav__items}>
     {
      nav__links.map((item,index)=>{
        return (
          <li className={styles.li__mapped} key={index}>
            <NavLink to={item.path}>
              {item.display}
            </NavLink>
          </li>
        )
      })
     }
     </ul>
     </div>
     <div className={styles.buttons__div}>
      <button className={styles.login__btn}>Login</button>
      <button className={styles.register__btn}>Register</button>
     </div>
     
     </div>
    </nav>
  )
}

export default Navbar
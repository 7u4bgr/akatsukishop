import React, { useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../../UI/";
import Logo from "../../../assets/images/logo.png";
import {ContactIcon, LocationIcon, MehsullarIcon, MenuIcon} from '../../../icons/'
import Product from '../../../assets/images/buy.png'
import Location from '../../../assets/images/location.png'
import Call from '../../../assets/images/call.png'
import { Link } from "react-router-dom";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.background}>
      <Wrapper>
        <div className={styles.control}>
          <Link to={"/"} className={styles.logo}>
            <img src={Logo} alt="" />
            <h2>AKATSUKI</h2>
          </Link>
        <div className={styles.desktopmenu}>
            <Link to={"products"}><img src={Product} alt="" /> Məhsullar</Link>
            <Link to={"location"}><img src={Location} alt="" /> Ünvan</Link>
            <a href="tel:0507487048"><img src={Call} alt="" />Əlaqə</a>
        </div>
        <div className={styles.burgermenu}>
          {isOpen?
            <ul>
              <Link to={"products"}><img src={Product} alt="" /> Məhsullar</Link>
              <Link to={"location"}><img src={Location} alt="" />Ünvan</Link>
              <a href="tel:0507487048"><img src={Call} alt="" />Əlaqə</a>
            
            </ul>
          :null}
          <div onClick={toggleMenu}>
            <MenuIcon/>
          </div>
        </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Header;

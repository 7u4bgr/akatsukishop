import React from "react";
import styles from "./index.module.css";
import Wrapper from "../../UI/";
import TikTok from "../../../assets/images/tiktok1.png";
import Instagram from "../../../assets/images/instagram1.png";
import WhatsApp from "../../../assets/images/whatsapp2.png";
import Logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className={styles.background}>
      <Wrapper>
        <div className={styles.control}>
          <div className={styles.icons}>
            <Link
              target="_blank"
              to={"https://www.instagram.com/akatsukishop.aze/"}
            >
              <img src={Instagram} alt="" />
            </Link>
            <img src={TikTok} alt="" />
            <img src={WhatsApp} alt="" />
          </div>
          <div className={styles.text}>
            <h2>あかつき店</h2>
            <img src={Logo} alt="" />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Footer;

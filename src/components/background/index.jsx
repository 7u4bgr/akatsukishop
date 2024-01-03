import React from "react";
import styles from "./index.module.css";
import Wrapper from "../UI/";
import Cosplay from "../../assets/images/cosplay.png";
import ShopIcon from '../../assets/images/buyingnow.png'
import ClickBuy from '../../assets/images/click.png'
import { Link } from "react-router-dom";
const Background = () => {
  return (
    <div className={styles.background}>
      <Wrapper>
        <div className={styles.control}>
          <div className={styles.textcontrol}>
            <div className={styles.name}>
              <h2>AKATSUKI SHOP <img src={ShopIcon} alt="" /></h2>
              <p>Baku Anime Shop Store</p>
            </div>
            <div className={styles.overview}>
              <p>
                “MIKU EXPO” is the virtual singer Hatsune Miku’s world tour
                series which will celebrate its 10th anniversary in 2024. In the
                10 years since the first concert, “MIKU EXPO” has traveled to 30
                cities worldwide, performing 68 shows in front of over 190,000
                attendees, and gathered over 60,000 viewers for the MIKU EXPO
                2021 Online livestream.
              </p>
            </div>
            <Link to={"products"} className={styles.button}>
                    <button>Elə İndi Al<img src={ClickBuy} alt="" /></button>
                    
            </Link>
          </div>
          <div className={styles.img}>
          
            <img src={Cosplay} alt="" />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Background;

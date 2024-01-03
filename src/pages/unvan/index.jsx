import React from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI";
import Anime from "../../assets/images/anime7.png";
import Mall from "../../assets/images/shoppingmall.png";
import Mall1 from "../../assets/images/shoppingmall1.png";
import Delivery from "../../assets/images/delivery.png";
const Location = () => {
  return (
    <div className={styles.background}>
      <Wrapper>
        <div className={styles.control}>
          <div className={styles.img}>
            <img src={Anime} alt="" />
          </div>
          <div className={styles.text}>
            <div className={styles.yellow}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.354060574355!2d49.827944076426206!3d40.37884485794355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307de69fc9e033%3A0x414a5a4c82342759!2sNizami%20Mall!5e0!3m2!1str!2saz!4v1704294231568!5m2!1str!2saz"
                styles="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
              <div>
                <div className={styles.images}>
                  <img src={Mall} alt="" />
                </div>
                <div className={styles.yellowtexts}>
                  <h2>Nizami mall 3-cü mərtəbə</h2>
                  <p>10:00-20:00</p>
                </div>
              </div>
            </div>
            <div className={styles.blue}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.653086785074!2d49.83517427642608!3d40.37221595834671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307da21f985fa1%3A0xbcbfed989fd04156!2zU295dXEgyZlsbMmZciBpc3RpIMO8csmZa2zJmWU!5e0!3m2!1str!2saz!4v1704295091009!5m2!1str!2saz"
               
                styles="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
              <div>
                <div className={styles.images}>
                  <img src={Mall1} alt="" />
                </div>
                <div className={styles.yellowtexts}>
                  <h2>Soyuq əllər,isti ürək</h2>
                  <p>11:00-23:00</p>
                </div>
              </div>
            </div>

            <div className={styles.red}>
              <img src={Delivery} alt="" />
              <h2>Çatdırılma Mövcuddur.</h2>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Location;

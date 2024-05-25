import React from "react";
import styles from "./home.module.css";
import Image from "next/image";
const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thougts Agency.</h1>
        <p className={styles.desc}>
          We are a creative agency that focuses on creating the best solutions
          for your business to grow.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image
            src="/brands.png"
            alt="brand"
            fill
            className={styles.brandImg}
          />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src={"/hero.gif"}
          alt="Hero"
          fill
          className={styles.heroImg}
          unoptimized
        />
      </div>
    </div>
  );
};

export default Home;

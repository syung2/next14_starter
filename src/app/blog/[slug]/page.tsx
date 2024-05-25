import React from "react";
import styles from "./singlepost.module.css";
import Image from "next/image";
const Slug = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://cdn.pixabay.com/photo/2021/09/27/20/47/nature-6662283_640.jpg"
          alt=""
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="https://cdn.pixabay.com/photo/2021/09/27/20/47/nature-6662283_640.jpg"
            alt=""
            width={50}
            height={50}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Terry Jefferson</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
          iusto totam ipsam velit accusantium. Harum molestias a numquam, itaque
          eum commodi consectetur? Fugiat rerum reiciendis officia molestias
          minus labore quo.
        </div>
      </div>
    </div>
  );
};

export default Slug;

import React from "react";
import styles from "./postCard.module.css";
import Image from "next/image";
import Link from "next/link";

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://cdn.pixabay.com/photo/2021/09/27/20/47/nature-6662283_640.jpg"
            alt=""
            fill
          />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
          explicabo quidem distinctio incidunt non ipsam dignissimos suscipit
          alias magni inventore velit, a molestias porro rem id et. Sequi,
          doloremque quas?
        </p>
        <Link href="/blog/1" className={styles.link}>
          Read MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;

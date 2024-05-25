import React from "react";
import styles from "./postCard.module.css";
import Image from "next/image";
import Link from "next/link";

const PostCard = ({
  id,
  title,
  body,
}: {
  id: number;
  title: string;
  body: string;
}) => {
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
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.desc}>{body}</p>
        <Link href={"/blog/" + id} className={styles.link}>
          Read MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;

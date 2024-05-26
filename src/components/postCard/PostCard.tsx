import React from "react";
import styles from "./postCard.module.css";
import Image from "next/image";
import Link from "next/link";

const PostCard = ({
  id,
  title,
  body,
  img,
  slug,
  createdAt,
}: {
  id: string;
  title: string;
  body: string;
  img: string;
  slug: string;
  createdAt: string;
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          {img && <Image src={img} alt={title} fill />}
        </div>
        <span className={styles.date}>{createdAt.toString().slice(4, 16)}</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.desc}>{body}</p>
        <Link href={"/blog/" + slug} className={styles.link}>
          Read MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;

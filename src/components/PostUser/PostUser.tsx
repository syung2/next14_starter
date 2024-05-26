import React from "react";
import styles from "./postUser.module.css";
import { getPost, getUser } from "@/lib/data";
import Image from "next/image";

// const getData = async (userId: number) => {
//   try {
//     const res = await fetch(
//       "https://jsonplaceholder.typicode.com/users/" + userId
//     );
//     if (!res.ok) {
//       throw new Error("Failed to fetch data");
//     }
//     const data = await res.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return null;
//   }
// };

const PostUser = async ({ userId, img }: { userId: number; img: string }) => {
  // const user = await getData(userId);
  const user: any = await getUser(userId);
  console.log(userId);
  return (
    <div className={styles.container}>
      {img && (
        <Image
          className={styles.avatar}
          src={img ? img : "/noavatar.png"}
          alt="avatar"
          width={50}
          height={50}
        />
      )}
      <span className={styles.title}>Author</span>
      <span className={styles.detailValue}>{user.username}</span>
    </div>
  );
};

export default PostUser;

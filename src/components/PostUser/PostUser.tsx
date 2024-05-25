import React from "react";
import styles from "./postUser.module.css";
import { getPost, getUser } from "@/lib/data";

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

const PostUser = async ({ userId }: { userId: number }) => {
  // const user = await getData(userId);
  const user: any = await getUser(userId);
  console.log(user);
  return (
    <div className={styles.container}>
      <span className={styles.title}>Author</span>
      <span className={styles.detailValue}>{user.name}</span>
    </div>
  );
};

export default PostUser;

import React from "react";
import styles from "./blog.module.css";
import PostCard from "@/components/postCard/PostCard";
import { getPosts } from "@/lib/data";

// const getData = async () => {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
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

const Blog = async () => {
  // const posts = await getData();
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      {posts &&
        posts.map((post: any) => (
          <div className={styles.post} key={post.id}>
            <PostCard id={post.id} title={post.title} body={post.body} />
          </div>
        ))}
    </div>
  );
};

export default Blog;

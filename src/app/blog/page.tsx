import React from "react";
import styles from "./blog.module.css";
import PostCard from "@/components/postCard/PostCard";
import { getPosts } from "@/lib/data";
import { Metadata } from "next";

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

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog Posts",
};

const Blog = async () => {
  // const posts = await getData();
  const posts = await getPosts();
  return (
    <div className={styles.container}>
      {posts &&
        posts.map((post: any, index: number) => (
          <div className={styles.post} key={index}>
            <PostCard
              id={post._id}
              title={post.title}
              body={post.desc}
              img={post.img}
              slug={post.slug}
              createdAt={post.createdAt}
            />
          </div>
        ))}
    </div>
  );
};

export default Blog;

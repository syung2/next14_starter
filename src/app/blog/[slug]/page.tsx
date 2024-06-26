import React, { Suspense } from "react";
import styles from "./singlepost.module.css";
import Image from "next/image";
import { ParsedUrlQuery } from "querystring";
import PostUser from "@/components/PostUser/PostUser";
import { getPost } from "@/lib/data";

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const { slug }: { slug: string } = params;
  const post = await getPost(slug);
  return {
    title: post.title,
    description: "Post",
  };
};

const getData = async (slug: string | string[] | undefined) => {
  try {
    const res = await fetch("http://localhost:3000/api/blog/" + slug);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

const Slug = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: URLSearchParams;
}) => {
  console.log(params, searchParams);
  const { slug }: { slug: string } = params;
  const post = await getData(slug);
  // const post = await getPost(slug);
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
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} img={post.img} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>published</span>
            <span className={styles.detailValue}>
              {post.createdAt.toString().slice(0, 10)}
            </span>
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

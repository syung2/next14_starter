import { Post, User } from "./models";
import { connectDB } from "./utils";
import { unstable_noStore as noStore } from "next/cache";
// TEMPORARY DATA
// const users = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Jane" },
// ];

// const posts = [
//   { id: 1, title: "Post 1", body: "......", userId: 1 },
//   { id: 2, title: "Post 2", body: "......", userId: 1 },
//   { id: 3, title: "Post 3", body: "......", userId: 2 },
//   { id: 4, title: "Post 4", body: "......", userId: 2 },
// ];

export const getPosts = async () => {
  try {
    connectDB();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.error(error);
    throw new Error("Error! Fetch Posts Failed!");
  }
};

export const getPost = async (id: string) => {
  try {
    connectDB();
    const post = await Post.findOne({ slug: id });
    return post;
  } catch (error) {
    console.error(error);
    throw new Error("Error! Fetch Post Failed!");
  }
};

export const getUser = async (id: number) => {
  try {
    connectDB();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.error(error);
    throw new Error("Error! Fetch User Failed!");
  }
};

export const getUsers = async () => {
  try {
    // noStore();
    connectDB();
    const users = await Post.find();
    return users;
  } catch (error) {
    console.error(error);
    throw new Error("Error! Fetch Users Failed!");
  }
};

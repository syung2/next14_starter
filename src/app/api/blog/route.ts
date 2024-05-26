import { Post } from "@/lib/models";
import { connectDB } from "@/lib/utils";
import { NextRequest } from "next/server";

export const GET = async () => {
  try {
    connectDB();
    const posts = await Post.find();
    return Response.json(posts);
  } catch (err) {
    console.error(err);
  }
  return Response.json("Hello, World!");
};

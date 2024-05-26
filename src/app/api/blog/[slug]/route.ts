import { Post } from "@/lib/models";
import { connectDB } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: { slug: string } }
) => {
  try {
    connectDB();
    const { slug } = params;
    const post = await Post.findOne({
      slug,
    });

    return NextResponse.json(post);
  } catch (err) {
    console.error(err);
  }
};
export const DELETE = async (
  req: NextRequest,
  { params }: { params: { slug: string } }
) => {
  try {
    connectDB();
    const { slug } = params;
    await Post.deleteOne({
      slug,
    });

    return NextResponse.json("Deleted Post");
  } catch (err) {
    console.error(err);
  }
};

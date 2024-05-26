"use server"; // 서버에서 실행되는 코드임을 나타냅니다.

import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectDB } from "./utils";

export const addPost = async (formData: FormData) => {
  const title = formData.get("title"); // 제목을 가져옵니다.
  const desc = formData.get("desc"); // 설명을 가져옵니다.
  const slug = formData.get("slug"); // 슬러그를 가져옵니다.
  const userId = formData.get("userId"); // 사용자 ID를 가져옵니다.

  try {
    connectDB(); // 데이터베이스에 연결합니다.
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });
    newPost.save(); // 새로운 게시물을 저장합니다.
    console.log("Post added successfully"); // 성공적으로 게시물이 추가되었음을 로그에 출력합니다.
    revalidatePath("/blog"); // "/blog" 경로를 다시 유효화합니다.
  } catch (error) {
    console.error("Error adding post:", error); // 게시물 추가 중에 오류가 발생한 경우 오류를 로그에 출력합니다.
  }
};

export const deletePost = async (formData: FormData) => {
  const id = formData.get("id");
  console.log("id", id);
  try {
    connectDB(); // 데이터베이스에 연결합니다.
    await Post.findByIdAndDelete(id); // 삭제된 게시물을 기다립니다.
    console.log("Post deleted successfully"); // 성공적으로 게시물이 삭제되었음을 로그에 출력합니다.
  } catch (error) {
    console.error("Error deleting post:", error); // 게시물 삭제 중에 오류가 발생한 경우 오류를 로그에 출력합니다.
  }
};

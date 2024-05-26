import { addPost, deletePost } from "@/lib/action";
import React from "react";
const ServerActionTest = () => {
  const actionInComponent = async () => {
    "use server";
    console.log("It works!");
  };

  return (
    <div>
      <form action={addPost}>
        <input type="text" placeholder="title" name="title" />
        <input type="text" placeholder="desc" name="desc" />
        <input type="text" placeholder="slug" name="slug" />
        <input type="text" placeholder="userId" name="userId" />
        <button>Create</button>
      </form>

      <form action={deletePost}>
        <input type="text" name="id" />
        <button>delete</button>
      </form>
    </div>
  );
};

export default ServerActionTest;

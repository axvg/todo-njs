"use client";

import { createTodo } from "@/services/supabase";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const create = async () => {
    const new_note = {
      title,
      content,
    };

    await createTodo(new_note);

    setContent("");
    setTitle("");

    router.refresh();
  };
  return (
    <form onSubmit={create}>
      <h3>Create a new note</h3>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Create note</button>
    </form>
  );
}

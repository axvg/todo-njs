import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL as string;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_API_KEY as string;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function getAllNotes() {
  const { error, data } = await supabase
    .from("todos")
    .select(`id, created_at, title, content`);

  if (error) {
    console.log("Error", error);
    return;
  }
  return data;
}

export const getSingleTodo = async (id: any) => {
  const { error, data } = await supabase
    .from("todos")
    .select(`id, created_at, title, content`)
    .eq("id", id);

  if (error) {
    console.log("Error", error);
    return;
  }
  return data;
};

export const updateTodo = async (new_note: any, id: Number) => {
  const { error, data } = await supabase
    .from("todos")
    .update({ ...new_note })
    .eq("id", id);

  if (error) {
    console.log("Error", error);
    return;
  }
  return data;
};

export const deleteToo = async (id: Number) => {
  const { error, data } = await supabase
    .from("todos")
    .delete()
    .match({ id: id });

  if (error) {
    console.log("Error", error);
    return;
  }
  return data;
};

export const createTodo = async (new_note: any) => {
  // const { data } = await supabase
  //   .from("todos")
  //   .select(`title`)
  //   .eq("title", new_note.title);
  // if (data?.length) {
  //   throw {
  //     message: "Note title must be unique",
  //   };
  // }

  const { error, data } = await supabase.from("todos").insert([new_note]);
  if (error) {
    console.log("Error", error);
    return;
  }
  return data;
};

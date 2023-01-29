import { getSingleTodo } from "@/services/supabase";
import styles from "../Notes.module.css";

export default async function NotePage({ params }: any) {
  let note = (await getSingleTodo(params.id)) ?? [];
  return (
    <div>
      <h1>notes/{note[0]?.id}</h1>
      <div className={styles.note}>
        <h3>{note[0]?.title}</h3>
        <h5>{note[0]?.content}</h5>
        <p>{note[0]?.created_at}</p>
      </div>
    </div>
  );
}

import { getAllNotes } from "@/services/supabase";
import Link from "next/link";
import CreateNote from "./CreateNote";
import styles from "./Notes.module.css";

export const dynamic = "auto",
  dynamicParams = true,
  revalidate = 0,
  fetchCache = "auto",
  runtime = "nodejs",
  preferredRegion = "auto";

export default async function NotesPage() {
  const data = await getAllNotes();

  return (
    <div>
      <h1>Notes</h1>
      <div className={styles.grid}>
        {data?.map((note) => {
          return <Note key={note.id} note={note} />;
        })}
      </div>

      <CreateNote />
    </div>
  );
}

function Note({ note }: any) {
  const { id, title, content, created_at } = note || {};

  return (
    <Link href={`/notes/${id}`}>
      <div className={styles.note}>
        <h2>{title}</h2>
        <h5>{content}</h5>
        <p>{created_at}</p>
      </div>
    </Link>
  );
}

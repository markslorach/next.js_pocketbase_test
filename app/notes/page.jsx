import Note from "./components/note";
import PocketBase from "pocketbase";

async function getNotes() {
  //   const res = await fetch(
  //     "http://127.0.0.1:8090/api/collections/notes/records", {cache: "no-store"}
  //   );
  //   const data = await res.json();

  const pb = new PocketBase("http://127.0.0.1:8090");
  const data = await pb.collection("notes").getList();

  return data?.items;
}

export default async function NotesPage() {
  const notes = await getNotes();
  console.log(notes);
  return (
    <div>
      <h1>Notes</h1>
      <div className="styles.grid">
        {notes?.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
}

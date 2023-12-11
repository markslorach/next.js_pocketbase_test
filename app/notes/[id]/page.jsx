import PocketBase from 'pocketbase';

async function getNote(id) {
  // const res = await fetch(`http://127.0.0.1:8090/api/collections/notes/records/${id}`,
  // {next: {revalidate: 0}})
  // const data = await res.json();

  const pb = new PocketBase("http://127.0.0.1:8090");
  const data = await pb.collection("notes").getOne(`${id}`);

  return data;
}

export default async function NotePage({ params }) {
  const note = await getNote(params.id);
  console.log(note);

  return (
    <div>
      <h1>notes/{note.id}</h1>
      <div>
        <h3>{note.title}</h3>
        <h5>{note.content}</h5>
        <p>{note.created}</p>
      </div>
    </div>
  );
}

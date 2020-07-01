import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function submitNote(input, area) {
    setNotes(prevNotes => [...prevNotes, [input, area]]);
    console.log(notes[0]);
  }

  function deleteNote(id) {
    setNotes(prevNotes => prevNotes.filter((note, index) => index !== id));
  }

  return (
    <div>
      <Header />
      <CreateArea submitNote={submitNote} />
      {notes.map((note, index) => (
        <Note
          deleteNote={deleteNote}
          key={index}
          index={index}
          title={note[0]}
          content={note[1]}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;

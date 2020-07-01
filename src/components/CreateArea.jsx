import React, { useState } from "react";
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

function CreateArea(props) {
  const [isNoteEditing, setNoteEditin] = useState(false);
  const [input, setInput] = useState("");
  const [area, setArea] = useState("");
  function handleEdit() {
    setNoteEditin(true);
  }
  function handleInput(event) {
    setInput(event.target.value);
  }
  function handleArea(event) {
    setArea(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    props.submitNote(input, area);
    setInput("");
    setArea("");
  }
  return (
    <div>
      <form className="create-note" action="" onSubmit={handleSubmit}>
        {isNoteEditing && 
        <input
          value={input}
          onChange={handleInput}
          name="title"
          placeholder="Title"
        /> }
        <textarea
          value={area}
          onClick={handleEdit}
          onChange={handleArea}
          name="content"
          placeholder="Take a note..."
          rows={isNoteEditing ? 3 : 1}
        />
        <Zoom in={isNoteEditing}>
          <Fab type="submit"><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;

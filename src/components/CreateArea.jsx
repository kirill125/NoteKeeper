import React, { useState } from "react";

function CreateArea(props) {
  const [input, setInput] = useState("");
  const [area, setArea] = useState("");
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
      <form action="" onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={handleInput}
          name="title"
          placeholder="Title"
        />
        <textarea
          value={area}
          onChange={handleArea}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;

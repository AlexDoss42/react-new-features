import React from 'react';

const Note = (props) => {
  const { note, removeNote} = props;

  return(
    <div>
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <button onClick={() => removeNote(note.title)}>x</button>
    </div>
  )
};

export { Note as default }
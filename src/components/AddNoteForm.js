import React from 'react';

const AddNoteForm = ({ title, setTitle, body, setBody, addNote }) => {
  return (
    <div>
      <p>Add note</p>
      <form onSubmit={addNote}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea value={body} onChange={(e) => setBody(e.target.value)}></textarea>
        <button>add note</button>
      </form>
    </div>
  );
}

export { AddNoteForm as default }
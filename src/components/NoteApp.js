import React, { useState, useEffect, useReducer } from 'react';

import notesReducer from './../reducers/notes';
import NoteList from './NoteList';
import AddNoteForm from './AddNoteForm';

const NoteApp = () => {
  // const [notes, setNotes] = useState([]);
  const [notes, dispatch] = useReducer(notesReducer, []);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem('notes'));
    if(notes) {
      dispatch({ type: 'POPULATE_NOTES', notes })
      // setNotes(notesData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_NOTE',
      title,
      body
    });
    // setNotes([
    //   ...notes,
    //   {
    //     title,
    //     body
    //   }
    // ]);
    setTitle('');
    setBody('');
  };

  const removeNote = (title) => {
    // setNotes(notes.filter((note) => note.title !== title));
    dispatch({
      type: 'REMOVE_NOTE',
      title
    });
  };

  return (
    <div>
      <h1>Notes</h1>
      <NoteList notes={notes} removeNote={removeNote} />
      <AddNoteForm
        title={title}
        setTitle={setTitle}
        setBody={setBody}
        body={body}
        addNote={addNote}
      />
    </div>
  );
};

export { NoteApp as default }
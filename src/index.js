import React, { useState, useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

const notesReducer = (state, action) => {
  switch (action.type) {
    case 'POPULATE_NOTES':
      return action.notes
    default: 
      return state
  }
};

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
    // setNotes([
    //   ...notes,
    //   {
    //     title,
    //     body
    //   }
    // ]);
  };

  const removeNote = (title) => {
    // setNotes(notes.filter((note) => note.title !== title));
  };

  return (
    <div>
      <h1>Notes</h1>
      {
        notes.map((note) => (
          <Note key={note.title} note={note} removeNote={removeNote} />
        ))
      }
      <p>Add note</p>
      <form onSubmit={addNote}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea value={body} onChange={(e) => setBody(e.target.value)}></textarea>
        <button>add note</button>
      </form>
    </div>
  );
};

const Note = (props) => {
  const { note, removeNote} = props;
  
  useEffect(() => {
    console.log('Setting up Effect!');

    return () => {
      console.log('cleaning up effect');
    };
  }, []);

  return(
    <div>
      <h3>{note.title}</h3>
      <p>{note.body}</p>
      <button onClick={() => removeNote(note.title)}>x</button>
    </div>
  )
}

ReactDOM.render(
  // <App count={0}/>,
  <NoteApp />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

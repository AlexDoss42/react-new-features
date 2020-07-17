import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

const NoteApp = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');

  const addNote = (e) => {
    e.preventDefault();
    setNotes([
      ...notes,
      {
        title
      }
    ]);
  };

  return (
    <div>
      <h1>Notes</h1>
      <p>Add note</p>
      <form onSubmit={addNote}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <button>add note</button>
      </form>
    </div>
  );
};

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [text, setText] = useState('');

//   const increment = () => {
//     setCount(count + 1);
//   };

//   const decrement = () => {
//     setCount(count - 1);
//   };

//   const reset = () => {
//     setCount(0);
//   };

//   return (
//     <div>
//       <p>The current {text || 'count'} is {count}</p>
//       <button onClick={increment}>+1</button>
//       <button onClick={decrement}>-1</button>
//       <button onClick={reset}>Reset</button>
//       <input value={text} onChange={(e) => {setText(e.target.value)}} />
//     </div>
//   )
// };


ReactDOM.render(
  <NoteApp/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

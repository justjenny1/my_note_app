import { useState, useEffect } from "react"
import uuid from "react-uuid";
import './App.css';
import Sidebar from './Sidebar';
import Main from "./Main";
import Header from "./Header";

function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.notes) || []);
  const [activeNote, setActiveNote] = useState('')
 
useEffect(() => {
  localStorage.setItem("notes", JSON.stringify(notes))
}, [notes]);

  const addNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled note",
      body: "",
      lastModified: Date.now()
    }
    setNotes(prev => {
      // [newNote, ...notes]
      return [...prev, newNote]
    })
    // setId(newNote.id)
  }



  // loop through the array using map
  const onUpdateNote = (updateNote) => {
    const notesUpdateArr = notes.map((note) => {
      if (note.id === activeNote) {
        return updateNote
      }
      return note;
    })
    setNotes(notesUpdateArr)
  }

  const deleteNote = (idToDelete) => {
    setNotes(notes.filter((note) => note.id !== idToDelete));
  }

  const getActiveNote = notes.find((note) => { 
    return note.id === activeNote
  });
  


  return (
    <div className="App">
      <Header />
      <Sidebar notes={notes} addNote={addNote}
        deleteNote={deleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main activeNote={getActiveNote} onUpdateNote={onUpdateNote} />
    </div>
  );
}

export default App;

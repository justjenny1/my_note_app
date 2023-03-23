import React from "react"


export default function Sidebar({notes,addNote, deleteNote, activeNote, setActiveNote}) {

    return <div className="app-sidebar">
            <div className="app-sidebar-header">
                <h4>Jenny's Notes</h4>
                <button onClick={addNote}>Add</button>
            </div>
            <div className="app-sidebar-notes">
            {notes.map((note) => {
                return (
                <div className={`app-sidebar-note ${note.id === activeNote && "active"}`} 
                onClick={() => setActiveNote(note.id)}>
                <div className="sidebar-note-title">
                    <strong>{note.title}</strong>
                    <button onClick={() => deleteNote(note.id)}>Delete</button>
                </div>
                 
                <p>{note.body && note.body.substr(0, 100) + "..."}</p>
                
                <small className="note-meta">last modified: {new Date (note.lastModified).toLocaleDateString("en-GB", {
               hour: "2-digit",
               minute: "2-digit"
             })}</small>

            </div>
                )
             
            })}
            </div>
        </div>
   
}

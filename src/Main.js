import React from "react"
import ReactMarkdown from "react-markdown";

export default function Main({ activeNote, onUpdateNote }) {
    const onEditNote = (k, value) => {

        onUpdateNote({ ...activeNote, [k]: value, lastModified: Date.now() })
    }
    return (
        <> {
            activeNote ? <div className="app-main">
                <div className="app-main-note-edit">
                    <input type="text" id="title"
                        value={
                            activeNote.title
                        }
                        placeholder="Enter your note title"
                        onChange={
                            (e) => onEditNote("title", e.target.value)
                        }
                        autoFocus />
                    <textarea id="body"
                        value={
                            activeNote.body
                        }
                        placeholder="Enter your notes here..."
                        onChange={
                            (e) => onEditNote("body", e.target.value)
                        } />
                </div>
                <div className="app-main-note-preview">
                    <h4 className="preview-title">
                        {
                            activeNote.title
                        }</h4>
                    <ReactMarkdown className="markdown-preview">
                        {
                            activeNote.body
                        }</ReactMarkdown>

                </div>
            </div> : <div className="no-active-note"
                style={
                    { fontSize: "13px" }
                }>No note selected</div>
        } </>
    )


}

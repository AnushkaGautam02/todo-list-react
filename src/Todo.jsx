import React, { useState, useEffect } from 'react';
import CreateNotes from './CreateNotes';

import axios from 'axios'; // Import axios for making API requests

import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn, // Access isLoggedIn from store
})

function Todo({ isLoggedIn }) {
  const [notes, setNotes] = useState([]);
  const userId = localStorage.getItem('userId');
  console.log(userId)
  useEffect(() => {
    if (isLoggedIn) {
      const userId = localStorage.getItem('id');
      console.log(userId)
      if (userId) {
        axios.get(`https://663626a7415f4e1a5e2672b0.mockapi.io/todoitem?userid=${userId}`)
          .then(response => {
            setNotes(response.data);
          })
          .catch(error => {
            console.error('Error fetching notes:', error);
          });
      }
    }
  }, [isLoggedIn]);

  const addNote = (newNote) => {
    const userId = localStorage.getItem('id');
    axios.post(`https://663626a7415f4e1a5e2672b0.mockapi.io/todoitem?userid=${userId}`, {
        title: newNote.title,
        description: newNote.content,
        userid: userId
      })
      .then(response => {
        // Add the newly created note to the state
        setNotes(prevNotes => [...prevNotes, response.data]);
      })
      .catch(error => {
        console.error('Error adding note:', error);
      });
  }

  const deleteNote = (id) => {
    axios.delete(`https://663626a7415f4e1a5e2672b0.mockapi.io/todoitem/${id}`)
        .then((response)=>{
            console.log(response.data);
            // Refresh notes after deletion
            setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
        })
        .catch(error => {
            console.error('Error deleting note:', error);
        });
  }

  return (
    <div>
      <div className='container mb-5 keeper-body'>
        <CreateNotes onAdd={addNote} />
        <div>{notes && (<><h2 className='text-center'>Tasks</h2></>)}</div>
        <div className='keeper-section row'>

          {notes.map((noteItem) => (
            <div className="keeper-tab p-3 border mx-2 p-3 border-secondary-subtle rounded col-lg-4 col-md-6 col-sm-12 " key={noteItem.id}>
            <h4>{noteItem.title}</h4>
            <p>{noteItem.description}</p>
            <button onClick={()=>deleteNote(noteItem.id)} className="btn btn-danger">Delete</button>
        </div>
            
          ))}
        </div>
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(Todo);

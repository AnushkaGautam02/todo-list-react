import React, { useState } from "react";
import axios from 'axios';

const CreateNotes = ({ onAdd }) => {
  const [note, setNote] = useState({
    title: "",
    desccription: "",
    priority: "Medium",
    userid:localStorage.getItem('id'),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  };

  const submitNote = async (e) => {
    e.preventDefault();
    
    // const headers = {
    //   'Authorization': `Bearer ${userId}`, // Assuming userId is passed as a prop
    //   'desccription-Type': 'application/json'
    // };

    try {
      const response = await axios.post('https://663626a7415f4e1a5e2672b0.mockapi.io/todoitem', {
        title: note.title,
        description: note.desccription,
        priority: note.priority,
        userid: localStorage.getItem('id')
      } );
      onAdd(response.data); // Assuming the API returns the created note
      setNote({
        title: "",
        desccription: "",
        priority: "Medium",
      });
    } catch (error) {
      console.error('Error creating note:', error);
    }
  };

  return (
    <>
      <form className="my-5 border border-1 p-4 rounded w-25 m-auto">
        <div className="py-4">
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
            className="w-100 p-2 rounded border border-secondary-subtle"
          />
        </div>
        <div className="py-4">
          <textarea
            className="w-100 p-2 rounded border border-secondary-subtle"
            name="desccription"
            onChange={handleChange}
            value={note.desccription}
            placeholder="Description..."
            rows="3"
          />
        </div>
        <div className="py-4">
          <label htmlFor="priority">Priority:</label>
          <select
            name="priority"
            value={note.priority}
            onChange={handleChange}
            className="form-select"
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
        <button onClick={submitNote} className="btn bg-warning text-light">
          Add
        </button>
      </form>
    </>
  );
};

export default CreateNotes;

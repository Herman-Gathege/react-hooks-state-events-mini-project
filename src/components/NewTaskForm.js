import React, { useState } from 'react';

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categories[1]); 

  function handleSubmit(e) {
    e.preventDefault();
    const newTask = {
      text,
      category
    };
    onTaskFormSubmit(newTask);
    setText("");
    setCategory(categories[1]);
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label htmlFor="task-details">Details</label>
      <input 
        id="task-details"
        type="text" 
        placeholder="New task details" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
      />
      <label htmlFor="task-category">Category</label>
      <select 
        id="task-category"
        value={category} 
        onChange={(e) => setCategory(e.target.value)}
      >
        {categories.filter(cat => cat !== 'All').map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

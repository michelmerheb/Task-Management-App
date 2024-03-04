import React, { useState } from 'react';

const AddTaskForm: React.FC<{ onAddTask: (task: string) => void }> = ({ onAddTask }) => {
  const [taskInput, setTaskInput] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (taskInput.trim() !== '') {
      onAddTask(taskInput);
      setTaskInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Add a new task"
          value={taskInput}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-success">Add</button>
      </div>
    </form>
  );
};

export default AddTaskForm;
import React from 'react';

interface TaskProps {
  task: string;
  index: number;
  onTaskCompletion?: (taskIndex: number) => void;
  onDeleteTask?: (taskIndex: number) => void;
  isChecked?: boolean;
}

const Task: React.FC<TaskProps> = ({ task, index, onTaskCompletion, onDeleteTask, isChecked }) => {
  const handleTaskCompletion = () => {
    if (onTaskCompletion) {
      onTaskCompletion(index);
    }
  };

  const handleDeleteTask = () => {
    if (onDeleteTask) {
      onDeleteTask(index);
    }
  };

  return (
    <div className="task card mb-3">
      <div className="card-body">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleTaskCompletion}
          className='me-2'
        />
        <span>{task}</span>
        <button onClick={handleDeleteTask} className="btn btn-danger ms-4 btn-sm">Delete</button> {}
      </div>
    </div>
  );
};

export default Task;

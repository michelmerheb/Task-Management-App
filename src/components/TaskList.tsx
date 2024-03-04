import React from 'react';
import Task from './Task';

interface TaskListProps {
  tasks: string[];
  onTaskCompletion?: (taskIndex: number) => void;
  completedTasks?: string[];
  onDeleteTask?: (taskIndex: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onTaskCompletion, completedTasks, onDeleteTask }) => {
  const handleTaskCompletion = (taskIndex: number) => {
    if (onTaskCompletion) {
      onTaskCompletion(taskIndex);
    }
  };

  const handleDeleteTask = (taskIndex: number) => {
    if (onDeleteTask) {
      onDeleteTask(taskIndex);
    }
  };

  return (
    <div className="task-list">
      {tasks.length === 0 && <p style={{textAlign: 'center'}}>No Active tasks.</p>}
      {tasks.map((task, index) => (
        <div key={index} className="mb-3 me-2">
          <Task
            task={task}
            index={index}
            onTaskCompletion={handleTaskCompletion}
            isChecked={completedTasks ? completedTasks.includes(task) : false}
            onDeleteTask={handleDeleteTask}
          />
        </div>
      ))}
      {completedTasks && completedTasks.length === 0 && <p style={{textAlign: 'center'}}>No Completed Tasks.</p>} {}
    </div>
  );
};

export default TaskList;

import React, { useState } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App: React.FC = () => {
  const [activeKey, setActiveKey] = useState<string>('active');

  const [activeTasks, setActiveTasks] = useState<string[]>([]);
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);

  const handleAddTask = (task: string) => {
    setActiveTasks([...activeTasks, task]);
  };

  const handleTaskCompletion = (taskIndex: number, fromTab: string) => {
    const taskToMove = fromTab === 'active' ? activeTasks[taskIndex] : completedTasks[taskIndex];
    if (fromTab === 'active') {
      setActiveTasks(activeTasks.filter((_, index) => index !== taskIndex));
      setCompletedTasks([...completedTasks, taskToMove]);
    } else {
      setCompletedTasks(completedTasks.filter((_, index) => index !== taskIndex));
      setActiveTasks([...activeTasks, taskToMove]);
    }
  };

  const handleTabSelect = (key: string | null) => {
    if (key !== null) {
      setActiveKey(key);
    }
  };

  const handleDeleteTask = (taskIndex: number, fromTab: string) => {
    if (fromTab === 'active') {
      setActiveTasks(activeTasks.filter((_, index) => index !== taskIndex));
    } else {
      setCompletedTasks(completedTasks.filter((_, index) => index !== taskIndex));
    }
  };

  return (
    <div className="min-vh-100">
      <div className="container-fluid">
        <h1 className="text-center mb-4">Task Manager</h1>
        <div className="bg-white p-3 mb-4">
          <Tabs
            activeKey={activeKey}
            onSelect={handleTabSelect}
            id="task-tabs"
            className="mb-4"
            style={{ width: '100%', backgroundColor: 'green' }}
          >
          <Tab eventKey="active" title={<span style={{ color: 'black' }}>Active Tasks</span>}>
            {activeKey === 'active' && (
              <>
                <AddTaskForm onAddTask={handleAddTask} />
                <TaskList
                  tasks={activeTasks}
                  onTaskCompletion={(index) => handleTaskCompletion(index, 'active')}
                  completedTasks={completedTasks}
                  onDeleteTask={(index) => handleDeleteTask(index, 'active')}
                />
              </>
            )}
          </Tab>
          <Tab eventKey="completed" title={<span style={{ color: 'black' }}>Completed Tasks</span>}>
            {activeKey === 'completed' && (
              <TaskList
                tasks={completedTasks}
                onTaskCompletion={(index) => handleTaskCompletion(index, 'completed')}
                onDeleteTask={(index) => handleDeleteTask(index, 'completed')}
              />
            )}
          </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default App;

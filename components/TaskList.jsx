import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './TaskList.css';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  const handleCreateTask = () => {
    navigate('/create');
  };

  return (
    <div className="task-list-container">
      <h2>Task List</h2>
      <button onClick={handleCreateTask}>Create Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <h3>{task.title}</h3>
            <p dangerouslySetInnerHTML={{ __html: task.description }} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;

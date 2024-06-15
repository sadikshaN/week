import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './TaskForm.css';

function TaskForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    const username = localStorage.getItem('username');
    const newTask = { title, description };
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    savedTasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(savedTasks));

    alert(`Task created by ${username}: ${title}`);
    navigate('/tasks');
  };

  return (
    <div className="task-form-container">
      <h2>Create Task</h2>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <CKEditor
        editor={ClassicEditor}
        data={description}
        onChange={(event, editor) => setDescription(editor.getData())}
      />
      <button onClick={handleSubmit}>Save Task</button>
    </div>
  );
}

export default TaskForm;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/tasks" element={<TaskList />} />
        <Route path="/create" element={<TaskForm />} />
      </Routes>
    </Router>
  );
}

export default App;

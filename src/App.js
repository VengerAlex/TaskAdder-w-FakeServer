import Header from "./components/Header";
import Tasks from './components/Tasks';
import Footer from './components/Footer';
import AddTask from "./components/AddTask";
import { useState } from 'react'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(true);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Playing video games',
      day: 'Friday',
      reminder: true
    },
    {
      id: 2,
      text: 'Reading a book',
      day: 'Thursday',
      reminder: false
    },
    {
      id: 3,
      text: 'Learning English',
      day: 'Saturday',
      reminder: false
    }
  ])

  //DeleteTasks
  const deleteTasks = id => {
    setTasks(tasks.filter(el => el.id !== id))
  }

  //toggleReminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((el) => el.id === id ? { ...el, reminder: !el.reminder } : el))
  }

  //AddTask
  const addTask = task => {
    const id = Math.floor((Math.random() * 1000) + 1);

    const newTask = { id, ...task };
    setTasks([...tasks, newTask])
  }

  const tasksIsEmpty = 'There is no task\'s for today';

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ?
        (<Tasks tasks={tasks} onDelete={deleteTasks} onToggle={toggleReminder} />) :
        (<div style={{ fontSize: '20px', fontWeight: '600', textAlign: 'center', marginTop: '60px' }}>
          {tasksIsEmpty}</div>)}
      <Footer />
    </div >
  );
}

export default App;

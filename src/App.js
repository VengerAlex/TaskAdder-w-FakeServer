import Header from "./components/Header";
import Tasks from './components/Tasks';
import Footer from './components/Footer';
import AddTask from "./components/AddTask";
import About from './components/About';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(true);
  const [tasks, setTasks] = useState([])

  //DeleteTasks
  const deleteTasks = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })

    res.status === 200
      ? setTasks(tasks.filter((task) => task.id !== id))
      : alert('Error Deleting This Task')
  }

  //toggleReminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((el) => el.id === id ? { ...el, reminder: !el.reminder } : el))
  }

  //AddTask
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    })

    const data = await res.json();

    setTasks([...tasks, data]);


  }

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  //Fetch Ts
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }

  const tasksIsEmpty = 'There is no task\'s for today';

  return (
    <Router>
      <div className="container">
        <Header onAdd={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask} />

        <Route path='/' exact render={(props) => (
          <>
            {showAddTask && <AddTask onAdd={addTask} />}
            {tasks.length > 0 ?
              (<Tasks tasks={tasks} onDelete={deleteTasks} onToggle={toggleReminder} />) :
              (<div style={{ fontSize: '20px', fontWeight: '600', textAlign: 'center', marginTop: '60px' }}>
                {tasksIsEmpty}</div>)}
          </>
        )}
        />


        <Route path='/about' component={About} />
        <Footer />
      </div >
    </Router>
  );

}

export default App;

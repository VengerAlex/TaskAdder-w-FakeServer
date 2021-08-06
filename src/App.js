import Header from "./components/Header";
import Tasks from './components/Tasks';
import Footer from './components/Footer';
import { useState } from 'react'

const App = () => {
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

  const tasksIsEmpty = 'There is no task\'s for today';

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ?
        (<Tasks tasks={tasks} />) :
        (<div style={{ fontSize: '20px', fontWeight: '600', textAlign: 'center', marginTop: '60px' }}>
          {tasksIsEmpty}</div>)}
      <Footer />
    </div >
  );
}

export default App;

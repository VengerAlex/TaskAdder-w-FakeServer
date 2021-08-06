import Header from "./components/Header";
import Tasks from './components/Tasks';
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

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;

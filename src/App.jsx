import { useEffect, useState } from 'react';
import './App.css';
import { getLocalStorage } from './components/helper';
import Input from './components/Input/Input';
import DisplayList from './components/DisplayList/DisplayList';

function App() {
  //
  const [task, setTask] = useState([]);

  useEffect(() => {
    const lsArr = getLocalStorage();
    if (lsArr.length === 0) return;
    setTask(lsArr);
  }, []);

  return (
    <main className='App'>
      <Input save={(task) => setTask((prev) => [...prev, task])} />
      <DisplayList task={task} />
    </main>
  );
}

export default App;

import { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('');
  const [task, setTask] = useState([]);

  const handleAddValue = e => setValue(e.target.value);

  const preventDefault = e => e.preventDefault();

  const handleAddTask = () => {
    const newTask = value;
    value !== '' ? 
      setTask((prevState) => {
        return [
          ...prevState, 
          newTask
        ];
      }) : alert('Input cannot be blank!')
  };

  const handleRemove = (index) => {
    setTask(task.filter((element, i, array) => i !== index));
  };

  return (
    <div className="App">
      <form onSubmit={preventDefault}>
        <input type='text' name='input' placeholder='e.g. Study React.JS' onChange={handleAddValue}></input>
        <button onClick={handleAddTask}>Add task</button>
        { task.length !== 0 ?
          <ul>
            {task.map((value, index, array) => {
              return (
                <li key={index} className='task'>
                  { value } <input type='checkbox'></input>
                  <button onClick={() => {handleRemove(index)}}>Remove</button>
                </li>
              )
            })}
          </ul> :
          <p>Don't have posts yet</p> }
      </form>
    </div>
  );
}

export default App;

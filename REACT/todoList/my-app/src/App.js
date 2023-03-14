import { useState } from 'react';
import uuid from 'react-uuid';
import './App.css';

function App() {
  const [value, setValue] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddValue = e => setValue(e.target.value);

  const preventDefault = e => e.preventDefault();

  const handleAddTask = () => {
    setTasks((prevState) => {
      return [
        ...prevState,
        {
          key: uuid(),
          value: value,
          checked: false
        }
      ]
    })
    setValue('');
  };

  const handleRemove = () => {
    const newList = tasks.filter(object => object.checked ? false : true);
    setTasks(newList);
  };

  const handleChange = (key) => {
    const newList = tasks.map(object => object.key === key ? { ...object, checked: !object.checked } : object)
    setTasks(newList);
  };

  console.log(tasks);
  return (
    <div className="App">
      <main>
        <form onSubmit={preventDefault}>
          <input type='text' name='input' value={value} placeholder='e.g. Study React.JS' onChange={handleAddValue}></input>
          <button onClick={handleAddTask}>Add task</button>
          <ul>
            { tasks.length === 0 ? 
                <p>There are no posts yet!</p> :
              tasks.map((item, index) => {
                return (
                  <li
                    key={item.key}
                    className='task'>
                    {item.value}
                    <label className='container'>
                      <input type='checkbox' className='checkbox' onChange={() => handleChange(item.key)}></input>
                      <span className='alternative-checkbox'></span>
                    </label>
                  </li>
                )
              })
            }
          </ul>
          <button onClick={handleRemove}>Remove</button>
        </form>
      </main>
    </div>
  );
}

export default App;


/*function App() {
  const [value, setValue] = useState('');
  const [task, setTask] = useState([]);
  const [checked, setChecked] = useState([]);

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
      setChecked((prevState) => {
        return [
          ...prevState,
          false
        ]
      })
  };

  const handleChange = (index) => {
    const updateCheck = checked.map((value, position, array) => {
      return position === index ? !value : value
    });

    setChecked(updateCheck);
  };

  const handleRemove = () => {
    const newArr = [];
    task.forEach((item, index) => {
      const toDelete = checked[index];
      if (!toDelete) {
        newArr.push(item);
      }
    });
    setTask(newArr)
  };

  console.log(checked);

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
                  { value } <input type='checkbox' checked={checked[index]} onChange={() => {handleChange(index)}}></input>
                </li>
              )
            })}
          </ul> :
          <p>Don't have posts yet</p> }
          <button onClick={handleRemove}>Remove</button>
      </form>
    </div>
  );
}

export default App;*/

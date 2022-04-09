import { useState } from 'react';
import './App.css';

const initialFormValue = { nameWork: "" };

function App() {
  const [work, setWork] = useState(initialFormValue);

  const [completed, setCompleted] = useState([]);

  const [selectedTab, setSelectedTab] = useState(0);

  let [doList, setDoList] = useState([
    {
      nameWork: 'Learn JavaScript'
    },
    {
      nameWork: 'Learn React'
    },
    {
      nameWork: 'Have a life!'
    },
  ]);

  const onSelectTab = (number) => {
    setSelectedTab(number);
  }

  const deleteItem = (name) => {
      const removedItem = doList.filter(x => x.nameWork !== name);
      setDoList(removedItem)
    if (selectedTab === 1) {
      const removeCompleted = completed.filter(x => x !== name);
      setCompleted(removeCompleted)
    }
  };

  const handleOnChange = event => {
    const handleEvent = event.target;
    setWork({ ...work, [handleEvent.name]: handleEvent.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (work.nameWork === '' || work.nameWork === null) {
      return false
    } else {
      setDoList([...doList, work])
      setWork({ ...work, nameWork: '' });
    }
  };

  const onCompleted = (e) => {
    if (completed.includes(e)) {
      const notCompleted = completed.filter(x => x !== e);
      setCompleted(notCompleted);
    } else {
      setCompleted([...completed, e]);
    }
  };

  return (
    <div className="App">

      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <form
            type="submit"
            onSubmit={(e) => onSubmit(e)}>
            <input
              type="text"
              name='nameWork'
              className="new-todo"
              value={work.nameWork}
              placeholder="What needs to be done?"
              autoFocus
              onChange={e => handleOnChange(e)}
            />
          </form>
        </header>

        <section className="main">
          <input className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">
            Mark all as complete
          </label>

          <ul className="todo-list">
            {selectedTab === 0 && doList.map((toDo, i) => (
              <li key={i} className={`${completed.includes(toDo.nameWork) ? 'completed' : null}`}>
                <div className="view">
                  <input className="toggle" type="checkbox" onClick={() => onCompleted(toDo.nameWork)} />
                  <label>{toDo.nameWork}</label>
                  <button onClick={() => deleteItem(toDo.nameWork)} className="destroy"></button>
                </div>
              </li>
            ))}

            {selectedTab === 1 && completed.map((toDo, i) => (
              <li key={i} className='completed'>
                <div className="view">
                  <input className="toggle" checked='true' type="checkbox" onClick={() => onCompleted(toDo.nameWork)} />
                  <label>{toDo}</label>
                  <button onClick={() => deleteItem(toDo.nameWork)} className="destroy"></button>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <footer className="footer">

          <span className="todo-count">
            <strong>{doList.length - completed.length}</strong>
            items left
          </span>

          <ul className="filters">
            <li>
              <a className={`${selectedTab === 0 ? 'selected' : null}`} onClick={() => onSelectTab(0)}>All</a>
            </li>
            <li>
              <a className={`${selectedTab === 1 ? 'selected' : null}`} onClick={() => onSelectTab(1)} >Completed</a>
            </li>
          </ul>

        </footer>
      </section>

      <footer className="info">
        <p>Created by <a href="https://gokalpgiray.github.io/Portfolio/">Gökalp Giray</a></p>
      </footer>
    </div>
  );
}

export default App;

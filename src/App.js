import { useState, useEffect } from 'react';
import './App.css';

const initialFormValue = { nameWork: "" };

function App() {
  const [work, setWork] = useState([{ nameWork: "" }]);
  const [form, setForm] = useState(initialFormValue);

  const handleOnChange = event => {
    const taha = event.target;
    setForm({ ...form, [taha.name]: taha.value });
  };

  useEffect(() => {
    setForm(initialFormValue);
  }, [work]);

  const addWork = (e) => {
    e.preventDefault();

    if (form.nameWork === "") {
      return false;
    }

    setWork([...work, form]);
    console.log(work);
  };

  return (
    <div className="App">
      
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <form onSubmit={addWork}>
            <input
              type="text"
              name='nameWork'
              className="new-todo"
              placeholder="What needs to be done?"
              autofocus
              value={form.nameWork}
              onChange={handleOnChange}
            />
          </form>
        </header>

        <section className="main">
          <input className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">
            Mark all as complete
          </label>

          <ul className="todo-list">
            <li className="completed">
              <div className="view">
                <input className="toggle" type="checkbox" />
                <label>Learn JavaScript</label>
                <button className="destroy"></button>
              </div>
            </li>
            <li>
              <div className="view">
                <input className="toggle" type="checkbox" />
                <label>Learn React</label>
                <button className="destroy"></button>
              </div>
            </li>
            <li>
              <div className="view">
                <input className="toggle" type="checkbox" />
                <label>Have a life!</label>
                <button className="destroy"></button>
              </div>
            </li>
          </ul>
        </section>

        <footer className="footer">

          <span className="todo-count">
            <strong>2</strong>
            items left
          </span>

          <ul className="filters">
            <li>
              <a className="selected">All</a>
            </li>
            <li>
              <a>Active</a>
            </li>
            <li>
              <a>Completed</a>
            </li>
          </ul>

          <button className="clear-completed">
            Clear completed
          </button>
        </footer>
      </section>

      <footer className="info">
        <p>Click to edit a todo</p>
        <p>Created by <a href="https://d12n.me/">Dmitry Sharabin</a></p>
        <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
      </footer>
    </div>
  );
}

export default App;

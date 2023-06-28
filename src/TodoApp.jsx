import React, { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [showError, setShowError] = useState(false);

  const addTodo = () => {
    if (inputValue.trim() !== '' && !todos.includes(inputValue.toLowerCase())) {
      setTodos([...todos, inputValue]);
      setInputValue('');
      setShowError(false);
    } else {
        setShowError(true);
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className='container'>
      <h1 className='header'>Lista de tareas</h1>
      <div className='form-control'>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
            if (e.keyCode === 13) {
              addTodo();
            }
          }}
      />
      <button onClick={addTodo}>Agregar</button>
      </div>
      <ul className='list'>
        {todos.map((todo, index) => (
          <li key={index} className='list-item'>
            {todo}
            <button onClick={() => deleteTodo(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
      {showError && (
        <div>
          <p className="error">Tarea inválida</p>
        </div>
      )}
    </div>
  );
}

export default TodoApp;

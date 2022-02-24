import React from "react";

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random().toString(36) },
    ]);
    setInputText("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      submitTodoHandler(e);
    }
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div className="form">
      <input
        value={inputText}
        onChange={inputTextHandler}
        onKeyDown={handleKeyPress}
        type="text"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button">
        +
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">all</option>
          <option value="completed">completed</option>
          <option value="uncompleted">uncompleted</option>
        </select>
      </div>
    </div>
  );
};

export default Form;

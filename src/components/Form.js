import React from 'react';



const Form = ({ setinputText, todos, setTodos, inputText, setStatus }) => {
  const inputTextHandler = (e) => {
    setinputText(e.target.value);
  }

  const validateString = (str) => {
    if (!str.replace(/\s/g, '').length) {
      return false;
    }
    else{
      return true;
    }
  }
  
  const submitTodoHandler = (e) => {
    e.preventDefault();
   if (validateString(inputText)==false){
     alert("Invalidate To Do!");
     return
   }
    setTodos([
      ...todos, { text: inputText, completed: false, id: Math.random() * 1000 }
    ]);
    setinputText("");
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  }
  return (
    <form>
      <input value={inputText} type="text" className="todo-input" onChange={inputTextHandler} />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" onChange={statusHandler} className="filter-todo ">
          <option value="all" className ="filter-todo-1">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div> 
    </form>
  );
};
export default Form;
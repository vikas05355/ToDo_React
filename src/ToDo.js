import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
function ToDo() {
    const [inputText, setinputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState(["all"]);
    const [filteredtodos, setFilteredTodos] = useState([]);

    useEffect(() => {
        filteredHandler();
    }, [todos, status]);

    useEffect(() => {
        getLocalTodos();
    }, []);

    const filteredHandler = () => {
        switch (status) {
            case "completed":
                setFilteredTodos(todos.filter(todo => todo.completed === true));
                break;
            case "uncompleted":
                setFilteredTodos(todos.filter(todo => todo.completed === false));
                break;
            default:
                setFilteredTodos(todos);
                break;
        }
    };
    const saveLocalTodos = (data) => {
        localStorage.setItem("todos", JSON.stringify(data));
    };
    const getLocalTodos = () => {
        if (localStorage.getItem("todos") === null) {
            localStorage.setItem("todos", JSON.stringify([]));
        }
        else {
            let todoLocal = JSON.parse(localStorage.getItem("todos"));
            setTodos(todoLocal);
        }
    };
    const setTodoss = (data) => {
        saveLocalTodos([...data]);
        setTodos([...data]);
    }
    return (
        <div className="App">
            <header>
                <h1>
                    To Do List
        </h1>
            </header>
            <Form
                todos={todos} 
                setTodos={setTodoss}
                setinputText={setinputText}
                inputText={inputText}
                setStatus={setStatus}

            />
            <TodoList todos={todos} setTodos={setTodoss} filteredtodos={filteredtodos} />
        </div>
    );
}
export default ToDo;

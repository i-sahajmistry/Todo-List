import Header from './Components/Header';
import AddTodo from './Components/AddTodo';
import Todos from './Components/Todos';
import Footer from './Components/Footer';
import About from './Components/About';
import { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

function App() {
    let initTodos;


    
    if(localStorage.getItem("todos") === null)
        initTodos = [];
    else
        initTodos = JSON.parse(localStorage.getItem("todos"));
    
    const [todos, setTodos] = useState(initTodos);

    const onDelete = (todo) => {
        setTodos(todos.filter((e) => {
            return e !== todo;
        }));
        localStorage.setItem("todos", JSON.stringify(todos));
    }
    
    const addTodo = (title, desc) => {
        let sno = todos.length === 0 ? 1 : todos[todos.length - 1].sno + 1;
        let newTodo = {
            sno: sno,
            title: title,
            desc: desc
        }
        setTodos([...todos, newTodo])
        localStorage.setItem("todos", JSON.stringify(todos));
    }   
    
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])

    return (
        <>
        <Router>
            <Header title='Todos List' nav={false} />
            <Switch>
                <Route exact path="/">
                    <AddTodo addTodo={addTodo}/>
                    <Todos todos={todos} onDelete={onDelete}/>
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
            </Switch>
            <Footer />
        </Router>
        </>
    );
}

export default App;

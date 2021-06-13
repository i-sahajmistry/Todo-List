// import './Todos.css'
import React from 'react'
import {TodoItems} from './TodoItems'

export default function Todos(props) {
    return (
        <div className='w-50 mx-auto mb-5'>
            <h3 className='center'>Todos List</h3>
            {
                props.todos.length === 0 ? <p className="text-center"><i>No Todo Due!!</i></p> :
                props.todos.map((todo) => {
                    return <TodoItems todoitem={todo} key={todo.sno} onDelete={props.onDelete}/>
                })
            }
        </div>
    )
}

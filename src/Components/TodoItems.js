import React from 'react'

export const TodoItems = ({todoitem, onDelete}) => {
    return (
        <div>
            <h3>{todoitem.title}</h3>
            <p>{todoitem.desc}</p>
            <button className="btn btn-danger btn-sm" onClick={() => {onDelete(todoitem)}}>Delete</button>
            <hr />
        </div>
    )
}

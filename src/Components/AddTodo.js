import React, { useState } from 'react'

export default function AddTodo({addTodo}) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [toggle, setToggle] = useState(true);

    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc)
            alert('Title ot Description cannot be blank');
        else
            addTodo(title, desc);
    }

    const addTodoForm = <>
                        <div className="d-flex justify-content-between mt-3">
                            <h2>Add a Todo</h2>
                            <button className="btn btn-danger btn-sm my-2" onClick={()=>{setToggle((toggle) => !toggle)}}>Close</button>
                        </div>
                        <form onSubmit={submit}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Todo Title</label>
                                <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Discription</label>
                                <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="exampleInputPassword1" />
                            </div>
                            <button type="submit" className="btn btn-success w-100 mb-4">Add to list</button>
                        </form>
                    </>

    const addTodobtn =  <>
                            <button className="btn btn-success btn-sm mt-4 float-end" onClick={()=>{setToggle((toggle) => !toggle)}}>Add a Todo</button>
                        </>

    return (
        <div className="w-50 mx-auto">
           {toggle ? addTodoForm : addTodobtn}
        </div>
    )
}

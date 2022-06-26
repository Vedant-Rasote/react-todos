import React, { useState } from 'react'

export default function AddTodo(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    function submit(e) {
        e.preventDefault();
        if (!title || !description) {
            alert("Title / Description cant be blank!")
        }
        props.addTodo(title, description);
    }

    return (
        <form onSubmit={submit}>
            <div className="row g-2">
                <div className="col-md-5 col-sm-12">
                    <div className="form-floating">
                        <input value={title} type="text" className="form-control" id="floatingInputGrid1" placeholder="name@example.com" onChange={(e) => setTitle(e.target.value)} />
                        <label htmlFor="floatingInputGrid1">Title</label>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="form-floating">
                        <div className="form-floating">
                            <input value={description} className="form-control" placeholder="Leave a comment here" id="floatingInputGrid2" onChange={(e) => setDescription(e.target.value)} />
                            <label htmlFor="floatingInputGrid2">Description</label>
                        </div>
                    </div>
                </div>
                <button className="btn btn-success col-md-1" type="submit" id="button-addon2">Add</button>
            </div>
        </form>
    )
}

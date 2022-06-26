import AddTodo from "./MyComponents/AddTodo";
import Footer from "./MyComponents/Footer";
import Header from "./MyComponents/Header";
import React, { useState } from "react";
function App() {

  const [todos, setTodos] = useState([
    {
      key: 1,
      title: "React",
      description: "Learn React",
      complete: false
    },
    {
      key: 2,
      title: "Ruby",
      description: "Learn Ruby",
      complete: true
    },
    {
      key: 3,
      title: "Rails",
      description: "Learn Rails",
      complete: true
    }
  ]);

  let tableStyles = {
    textAlign: "center"
  }

  function deleteHandler(todo) {
    console.log("Delete", todo)
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
  }

  function addTodo(title, description) {
    let key = todos ? todos.length + 1 : 0;
    let addedTodo = {
      key: key,
      title: title,
      description: description
    }
    setTodos(...todos, addedTodo)
    console.log(...todos)
  }

  return (
    <>
      <Header></Header>
      <div className="container">
        <h3 className="text-center pt-3 border-bottom">Todos</h3>
        <AddTodo addTodo={addTodo} />
        <table className="table border-top mt-2" style={tableStyles}>
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Done</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {
              todos.length === 0 ? "" : todos.map(todo => {
                return <tr key={todo.key}>
                  <th>{todo.key}</th>
                  <td>{todo.title}</td>
                  <td>{todo.description}</td>
                  <td className="text-center"><input className="form-check-input" type="checkbox" defaultChecked={todo.complete ? "checked" : ""} /></td>
                  <td>
                    <button className="btn btn-sm btn-danger" onClick={() => deleteHandler(todo)}>
                      <i className="fa fa-trash" aria-hidden="true"></i>
                    </button>
                  </td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
}

export default App;

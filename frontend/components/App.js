import React from 'react'
import Form from './Form'
import ToDoList from './TodoList'
import TodoList from './TodoList'

let id = 0
let getId = () => ++id

const initialTodos = [
  {id: getId(),name: 'Walk the Dog', completed: true},
  {id: getId(),name: 'Learn React', completed: false}
]

export default class App extends React.Component {
  state ={
    todos:initialTodos
  }

  addTodo = ( name ) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.concat({id: getId(), completed: false, name})
    })
  }

  toggleCompletion = id => {
    this.setState({
      ...this.state,
      todos:this.state.todos.map(td => {
        if(id == td.id) return {...td, completed: !td.completed}
        return td
      })
    })
  }

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} toggleCompletion={this.toggleCompletion}/>
        <Form addTodo={this.addTodo}/>
      </div>
    )
  }
}

import React from 'react';

import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

import './components/Todo.css'


const tasks =[
  {
    task: 'Organize Garage',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: Date.now(),
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      tasks
    };
  }

  addTask = (e, item) => {
    e.preventDefault();
    const newTask = {
      task: item,
      id: Date.now(),
      completed: false
    };
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })

  }

  toggleTask = taskId => {
    this.setState({
      tasks: this.state.tasks.map(item => {
        if (taskId === tasks.id){
          return{
            ...tasks,
            completed: !tasks.completed
          };
        }
        return tasks;
      })      
    })
  }

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.filter(item => !tasks.completed)
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <div>
          <TodoList 
            tasks = {this.state.tasks}
            toggleTask={this.toggleTask}
            clearCompleted={this.clearCompleted}
          />
        </div>
        <div>
          <TodoForm addTask={this.addTask}/>
        </div>
      </div> 
    );
  }
  
}

export default App;

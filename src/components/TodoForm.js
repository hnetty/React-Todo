import React from 'react'

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state ={
            task: ''
        }
    }

    submitTask = e => {
        e.preventDefault();
        this.setState({task: ''});
        this.props.addTask(e, this.state.task);
    }

    changes = e => {
        this.setState({ [e.target.name]: e.target.value})
    }

    render() {
        return(
            <form onSubmit={this.submitTask}>
                <input 
                    type="text"
                    value={this.state.task}
                    name="task"
                    onChange={this.changes}
                />
                <button>Add</button>
            </form>
        )
    }
}

export default TodoForm;
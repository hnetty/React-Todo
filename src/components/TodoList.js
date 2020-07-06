// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'

import Todo from './Todo'

const TodoList = props => {

    return(
        <div>
            <div>
            {props.tasks.map(item => (
                <Todo key={item.id} item={item} toggleTask={props.toggleTask}/>
            ))}
            </div>
        </div>
        
    )
}

export default TodoList;
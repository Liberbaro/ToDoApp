import React from 'react';
import Task from "../task/task";
import TaskToggle from "../task-toogle/task-toggle";

const TaskListItem=({className, text, ...props})=> {



            const inputField =  <TaskToggle
                                            type="text" className="edit"
                                            value={text}
                                            {...props} />
    console.log(className)
            return (
                <li className={className}>
                    <Task
                            text={text}
                          className='view'
                          {...props}
                       />
                    {(className === 'editing') ? inputField: null}
                </li>
            )

}

export default TaskListItem;


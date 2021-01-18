import React, {Component} from 'react';
import Task from "../task/task";
import TaskToggle from "../task-toogle/task-toggle";

const TaskListItem=({className, id, mainFunction, text, changeStatus, editingTask, deleteTask, editTask})=> {



            const inputField =  <TaskToggle id={id} mainFunction={mainFunction}
                                            type="text" className="edit"
                                            value={text} editTask={editTask}/>
            return (
                <li className={className}>
                    <Task changeStatus={changeStatus}  text={text}
                          className='view' mainFunction={mainFunction}
                          mainClass={className} id={id}
                          editingTask={editingTask}
                          deleteTask={deleteTask}/>
                    {(className === 'editing') ? inputField: null}
                </li>
            )

}

export default TaskListItem;
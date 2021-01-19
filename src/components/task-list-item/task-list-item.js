import React, {Component} from 'react';
import Task from "../task/task";
import TaskToggle from "../task-toogle/task-toggle";

const TaskListItem=({className, text, ...props})=> {



            const inputField =  <TaskToggle
                // id={id} editTask={editTask}
                                            type="text" className="edit"
                                            value={text}
                                            {...props} />
            return (
                <li className={className}>
                    <Task
                        // changeStatus={changeStatus}  text={text} id={id}  editingTask={editingTask}  deleteTask={deleteTask} displayStatus={display}
                            text={text}
                          className='view'
                          {...props}
                       />
                    {(className === 'editing') ? inputField: null}
                </li>
            )

}

export default TaskListItem;

//
// const TaskListItem=({className, id, taskEditing, text, display, changeStatus, editingTask, deleteTask, editTask})=> {
//
//
//
//     const inputField =  <TaskToggle id={id}
//                                     type="text" className="edit"
//                                     value={text} editTask={editTask}/>
//     return (
//         <li className={className}>
//             <Task
//                 changeStatus={changeStatus}  text={text}
//                 className='view'
//                 mainClass={className} id={id}
//                 editingTask={editingTask}
//                 deleteTask={deleteTask}
//                 displayStatus={display}/>
//             {(className === 'editing') ? inputField: null}
//         </li>
//     )
//
// }
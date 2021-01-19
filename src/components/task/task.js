import React from 'react';
import TaskToggle from "../task-toogle/task-toggle";
import TaskButton from "../task-button/task-button";
import TaskLabel from "../task-label/task-label";



const Task = ({className, display, deleteTask, editingTask,  ...props}) => {

    return <div className={className} style={{display: display}} >
                <TaskToggle   className="toggle" type="checkbox"  {...props}/>
                <TaskLabel {...props} />
                <TaskButton changeTask={editingTask}  {...props}  className='icon icon-edit'/>
                <TaskButton changeTask={deleteTask} {...props} className='icon icon-destroy'/>
        </div>
}

export default Task;


//
// const Task = ({mainClass, className, id, mainFunction, text, displayStatus, changeStatus, deleteTask, editingTask}) => {
//
//     return <div className={className} style={{display: displayStatus}} >
//         <TaskToggle  changeStatus={changeStatus} id={id}  className="toggle" type="checkbox"/>
//         <TaskLabel text={text} />
//         <TaskButton changeTask={editingTask}  id={id} className='icon icon-edit'/>
//         <TaskButton changeTask={deleteTask}  id={id} className='icon icon-destroy'/>
//     </div>
// }
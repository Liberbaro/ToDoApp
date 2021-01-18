import React from 'react';
import TaskToggle from "../task-toogle/task-toggle";
import TaskButton from "../task-button/task-button";
import TaskLabel from "../task-label/task-label";



const Task = ({mainClass, className, id, mainFunction, text, changeStatus, deleteTask, editingTask}) => {
    return <div className={className}  >
                <TaskToggle  changeStatus={changeStatus} id={id} mainFunction={mainFunction}  mainClass={mainClass} className="toggle" type="checkbox"/>
                <TaskLabel text={text}    mainClass={mainClass}/>
                <TaskButton changeTask={editingTask}  id={id} className='icon icon-edit'/>
                <TaskButton changeTask={deleteTask}  id={id} className='icon icon-destroy'/>
        </div>
}

export default Task;
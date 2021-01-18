import React from 'react';
import TaskStatus from "../task-status/task-status";

const TaskLabel = ({mainClass, text}) =>{
    return (
        <label>
            <TaskStatus   text={text} className="description" mainClass={mainClass}></TaskStatus>
            <TaskStatus  text={text} className="created"></TaskStatus>
        </label>
    )
}

export default TaskLabel;

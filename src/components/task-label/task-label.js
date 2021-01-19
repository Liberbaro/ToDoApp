import React from 'react';
import TaskStatus from "../task-status/task-status";

const TaskLabel = ({ text}) =>{
    return (
        <label>
            <TaskStatus   text={text} className="description" ></TaskStatus>
            <TaskStatus  text={text} className="created"></TaskStatus>
        </label>
    )
}

export default TaskLabel;

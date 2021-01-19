import React from 'react';
import TaskStatus from "../task-status/task-status";

const TaskLabel = ({ text, timeOfCreate}) =>{
    return (
        <label>
            <TaskStatus   text={text}  className="description" ></TaskStatus>
            <TaskStatus  timeOfCreate={timeOfCreate} className="created"></TaskStatus>
        </label>
    )
}

export default TaskLabel;

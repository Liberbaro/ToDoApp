import React from 'react';
import PropType from 'prop-types';
import Task from "../task/task";
import TaskToggle from "../task-toogle/task-toggle";


const TaskListItem = ({className, text, ...props}) => {

    const inputField = <TaskToggle type="text" className="edit" value={text} {...props} />

    return (
        <li className={className}>
            <Task text={text} className='view' {...props}/>
            {className === 'editing' ? inputField : null}
        </li>
    )
}
TaskListItem.propTypes = {
    className: '',
    text: 'New Task'
}

TaskListItem.propTypes = {
    className: PropType.string.isRequired,
    text: PropType.string
}

export default TaskListItem;


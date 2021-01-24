import React from 'react';
import PropType from 'prop-types';
import TaskToggle from "../task-toogle/task-toggle";
import TaskButton from "../task-button/task-button";
import TaskLabel from "../task-label/task-label";

const Task = ({className, display, deleteTask, editTaskValue, ...props}) => {

    return <div className={className} style={{display: display}}>
        <TaskToggle className="toggle" type="checkbox"  {...props}/>
        <TaskLabel {...props} />
        <TaskButton taskBtnFn={editTaskValue}  {...props} className='icon icon-edit'/>
        <TaskButton taskBtnFn={deleteTask} {...props} className='icon icon-destroy'/>
    </div>
}

Task.defaultProps = {
    className: 'view',
    display: 'block',
    editTaskValue: () => {},
    deleteTask: () => {}
}
Task.propTypes = {
    className: PropType.string,
    type: PropType.string,
    editTaskValue: PropType.func.isRequired,
    deleteTask: PropType.func.isRequired,
}

export default Task;



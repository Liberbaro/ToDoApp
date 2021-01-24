import React from 'react';
import PropType from 'prop-types';
import TaskListItem from "../task-list-item/task-list-item";
import './task-list.css';

const TaskList = ({taskList, ...props}) => {

    const taskLists = taskList.map(({id, ...item}) => {
        return <TaskListItem id={id} key={id}  {...item} {...props}/>
    });

    return (
        <ul className='todo-list'>
            {taskLists}
        </ul>
    );
};

TaskList.defaultProps = {
    taskList: []
}

TaskList.propTypes = {
    taskList: PropType.array.isRequired,
}

export default TaskList;


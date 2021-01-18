import React, {Component} from 'react'
import TaskListItem from "../task-list-item/task-list-item";
import './task-list.css'
import Main from "../main/main";




const TaskList =({ addElement,taskEditing, taskList, changeStatus, editingTask, deleteTask, editTask} )=> {

        const taskLists = taskList.map(({className, id, text, ...props})=>{
            return <TaskListItem mainFunction={taskEditing}
                                 className={className} id={id} key={id}
                                 text={text}
                                 changeStatus={changeStatus}
                                 editingTask={editingTask}
                                 deleteTask={deleteTask}
                                 editTask={editTask}
            />
        })

        return (
            <ul className='todo-list'>
                {taskLists}
                {/*<button onClick={addElement}  className='newSa' />*/}
            </ul>
        );

};
export default TaskList;
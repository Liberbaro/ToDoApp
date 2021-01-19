import React from 'react'
import TaskListItem from "../task-list-item/task-list-item";
import './task-list.css'





const TaskList =({taskList, ...props} )=> {

    const taskLists = taskList.map(({  id, ...item})=>{
            return <TaskListItem    id={id} key={id} {...item} {...props}/>
    });

        return (
            <ul className='todo-list'>
                {taskLists}
            </ul>
        );

};
export default TaskList;

//const TaskList =({ addElement,taskEditing, taskList, changeStatus, editingTask, deleteTask, editTask} )=> {
//
//         const taskLists = taskList.map(({className, id, text, display, ...props})=>{
//             return <TaskListItem mainFunction={taskEditing}
//                                  className={className} id={id} key={id}
//                                  text={text}
//                                  changeStatus={changeStatus}
//                                  editingTask={editingTask}
//                                  deleteTask={deleteTask}
//                                  editTask={editTask}
//                                  display={display}
//                                  {...props}
//             />
//         })
//
// const TaskList =({taskList, ...props} )=> {
//
//     const taskLists = taskList.map(({ taskEditing, id, ...item})=>{
//         return <TaskListItem mainFunction={taskEditing}
//                              id={id} key={id} {...item} {...props}/>
//     })

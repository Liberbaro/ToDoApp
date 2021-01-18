import React, {Component} from 'react'
import './task-toggle.css'



const TaskToggle = ({className, type, value,changeStatus,id,editTask})=>{



        let inputField = <input onKeyDown={(event)=>{(editTask(id,event))}}
                                defaultValue={value} type={type} className={className}/>;
        let checkbox =  <input onClick={()=>changeStatus(id)}  type={type} className={className}/>;
        return (value)? inputField : checkbox;


}
export default TaskToggle;
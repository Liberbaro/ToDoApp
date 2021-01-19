import React from 'react';
import PropType from 'prop-types';
import './task-toggle.css';



const TaskToggle = ({className, type, value,changeStatus,id,editTask})=>{


        const inputField = <input onKeyDown={(event)=>{(editTask(id,event))}}
                                defaultValue={value} type={type}
                                className={className}/>;
        const checkbox =  <input onClick={()=>changeStatus(id)}  type={type} className={className}/>;

        return (value)? inputField : checkbox;


}
TaskToggle.changeStatus ={
        editTask: PropType.string
}
export default TaskToggle;



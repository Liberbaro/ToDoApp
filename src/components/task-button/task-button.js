import React from 'react';

 const TaskButton = ({className, changeTask, id})=>{
        return  <button className={className} onClick={()=>changeTask(id)}></button>
}
export default TaskButton;
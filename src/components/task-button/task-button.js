import React from 'react';
import PropType from 'prop-types';

 const TaskButton = ({className, taskBtnFn, id})=>{
        return  <button className={className} onClick={()=>taskBtnFn(id)}/>
}

TaskButton.defaultProps = {
    taskBtnFn: ()=>{},
    className: ''
}

TaskButton.propTypes = {
    taskBtnFn: PropType.func.isRequired,
    className: PropType.string.isRequired
}

export default TaskButton;
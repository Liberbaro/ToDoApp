import React from 'react';
import PropTypes from 'prop-types';

 const TaskButton = ({className, taskBtnFn, id})=>{
        return  <button className={className} onClick={()=>taskBtnFn(id)}/>
}

TaskButton.defaultProps = {
    taskBtnFn: ()=>{},
    className: ''
}

TaskButton.propTypes = {
    taskBtnFn: PropTypes.func.
    className: PropTypes.string.isRequired
}

export default TaskButton;
import React from 'react';
import PropTypes from 'prop-types';
import './task-toggle.css';

const TaskToggle = ({className, type, value, changeTaskStatus, id, saveEditingTask}) => {

    function onKeyDownInputFieldHandler(e) {
        if (e.keyCode === 13) return saveEditingTask(id, e)
    };

    function onClickCheckboxHandler() {
        return changeTaskStatus(id)
    }

    const inputField = <input onKeyDown={onKeyDownInputFieldHandler}
                              defaultValue={value} type={type}
                              className={className}/>;

    const checkbox = <input onClick={onClickCheckboxHandler}
                            type={type} className={className}/>;

    return (className === 'edit') ? inputField : checkbox;
}

TaskToggle.defaultProps = {
    saveEditingTask: () => {},
    changeTaskStatus: () => {},
}

TaskToggle.propTypes = {
    saveEditingTask: PropTypes.func.isRequired,
    changeTaskStatus: PropTypes.func.isRequired,
    className: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string
}

export default TaskToggle;



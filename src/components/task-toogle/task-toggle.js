import React from 'react';
import PropType from 'prop-types';
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
    saveEditingTask: PropType.func.isRequired,
    changeTaskStatus: PropType.func.isRequired,
    className: PropType.string,
    type: PropType.string,
    value: PropType.string
}

export default TaskToggle;



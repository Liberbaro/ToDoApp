import React from 'react';
import './new-task-form.css'

const NewTaskForm = ({holder, className})=> {
    return <input className={className} type='text' placeholder={holder} />
}

export default NewTaskForm;

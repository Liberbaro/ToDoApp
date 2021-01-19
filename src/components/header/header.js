import React from 'react';
import Title from "../title/title";
import NewTaskForm from "../new-task-form/new-task-form";

const Header = (props) =>{
    return <header  className="header">
        <Title label="ToDoS"/>
        <NewTaskForm  {...props} className='new-todo' holder="Input do wish"/>
    </header>
}

export default Header;

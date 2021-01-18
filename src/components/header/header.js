import React from 'react';
import Title from "../title/title";
import NewTaskForm from "../new-task-form/new-task-form";

const Header = () =>{
    return <header  className="header">
        <Title label="ToDoS"/>
        <NewTaskForm className='new-todo' holder="Input do wish"/>
    </header>
}

export default Header;

import React from 'react';
import Title from "../title/title";
import NewTaskForm from "../new-task-form/new-task-form";

const Header = ({className, ...props}) =>{


    return <header  className={className}>
        <Title/>
        <NewTaskForm  {...props}/>
    </header>
}

Header.defaultProps = {
    className: 'header'
}

export default Header;

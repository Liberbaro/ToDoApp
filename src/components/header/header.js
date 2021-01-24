import React from 'react';
import PropTypes from 'prop-types';
import Title from "../title/title";
import NewTaskForm from "../new-task-form/new-task-form";

const Header = ({className, ...props}) => {
    return (
        <header className={className}>
            <Title/>
            <NewTaskForm  {...props}/>
        </header>
    )
}

Header.defaultProps = {
    className: 'header'
}

Header.propTypes = {
    className: PropTypes.string.isRequired
}

export default Header;

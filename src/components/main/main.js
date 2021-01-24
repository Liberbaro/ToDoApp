import React from 'react';
import PropTypes from 'prop-types';
import TaskList from "../task-list/task-list";
import Footer from "../footer/footer";
import './main.css';

const Main = ({ className, ...props}) => {
    return (
        <section className={className}>
            <TaskList {...props}/>
            <Footer {...props} />
        </section>
    );
}

Main.defaultProps = {
    className: 'main'
}

Main.propTypes = {
    className: PropTypes.string.isRequired
}

export default Main;
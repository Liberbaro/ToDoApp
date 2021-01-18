import React from 'react'
import FooterInfo from "../footer-info/footer-info";
import TaskFilter from "../task-filter/task-filter";
import './footer.css'


const Footer = () => {
    return (
        <footer className="footer">
           <FooterInfo className="todo-count" label="1 items left"/>
            <TaskFilter/>
            <FooterInfo className="clear-completed" label="Clear completed"/>
        </footer>
    );
}


export default Footer;
import React from 'react'
import FooterInfo from "../footer-info/footer-info";
import TaskFilter from "../task-filter/task-filter";
import './footer.css'


const Footer = (props) => {
    const {countTaskLeft} = props
    return (
        <footer className="footer">
           <FooterInfo className="todo-count" label={`${countTaskLeft} items left`}/>
            <TaskFilter {...props}/>
            <FooterInfo className="clear-completed" label="Clear completed"/>
        </footer>
    );
}


export default Footer;
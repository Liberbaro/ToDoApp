import React from  'react';
import FilterButton from "../filter-button/filter-button";
import './task-filter.css';

const TaskFilter = (props)=>{
    return (
        <ul className='filters'>
            <li><FilterButton className='selected' label='All'/></li>
            <li><FilterButton label='Active'/></li>
            <li><FilterButton label='Competed'/></li>
        </ul>
    );
}

export default TaskFilter;
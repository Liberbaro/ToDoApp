import React, {Component} from  'react';
import FilterButton from "../filter-button/filter-button";
import './task-filter.css';

export default class TaskFilter extends Component {
acc = 1;
    state ={
        filter:
            [
                {label: 'All', className: 'selected', key: 10, mainClass: 'all' },
                {label: 'Active', className: '', key: 20, mainClass: ''},
                {label: 'Completed', className: '', key:  30, mainClass: 'completed'},
            ]

    }


    changeFilter =(label)=>{
        const {onfilteredList}=this.props
        this.setState(({filter})=>{
            const newFilterList = filter.map((el)=>{
                if(el.label === label){
                    el.className = 'selected'
                    onfilteredList(el.mainClass)
                } else{
                    el.className = ''
                }
                return el
            })
           return{
               filter: newFilterList
           }
        })

    }


    render() {
        const filter= this.state.filter
        const filterItem = filter.map(({...item})=>{
            return <li key={this.acc++}><FilterButton changeFilter={this.changeFilter} {...item}/></li>
        })

        return (
            <ul className='filters'>
                {filterItem}
            </ul>
        );
    }

}



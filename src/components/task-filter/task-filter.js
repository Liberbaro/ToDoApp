import React, {Component} from  'react';
import FilterButton from "../filter-button/filter-button";
import './task-filter.css';

export default class TaskFilter extends Component {

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
           // const newFilterList =  JSON.parse(JSON.stringify(this.state.filter));
            let thisFilter;
            const newFilterList = filter.map((el)=>{
                // el.label=== label? el.className = 'selected': el.className = ''
                if(el.label=== label){
                    el.className = 'selected'
                    thisFilter = el.mainClass
                } else{
                    el.className = ''
                }
                // el.className === ''
                return el
            })
           // const activeFilter = newFilterList.find((el)=> el.className==='selected');
           // const thisFilter = newFilterList.find((el)=> el.label=== label);
            // activeFilter.className = ''
            // thisFilter.className = 'selected'
            onfilteredList(thisFilter)
           return{
               filter: newFilterList
           }
        })

    }


    render() {
        const filter = this.state.filter
        const filterItem = filter.map(({label,className, key})=>{
            return <li><FilterButton changeFilter={this.changeFilter}
                                    className={className}
                                    label={label}
                                    key={key}/></li>
        })

        return (
            <ul className='filters'>
                {filterItem}
            </ul>
        );
    }

}



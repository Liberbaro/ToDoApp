import React from 'react';

const FilterButton = ({label, className, changeFilter}) =>{
      return <button onClick={()=>{changeFilter(label)}} className ={className} > {label} </button>
}


export default FilterButton;
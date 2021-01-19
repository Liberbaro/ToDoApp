import React from 'react';

const FilterButton = ({label, className, changeFilter}) =>{
      console.log(label)
      return <button onClick={()=>{changeFilter(label)}} className ={className} > {label} </button>
}


export default FilterButton;
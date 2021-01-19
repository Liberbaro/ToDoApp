import React from 'react';

const Title = ({label}) =>{

    return  <h1> {label} </h1>

}

Title.defaultProps = {
    label: 'ToDoS'
}
export default Title;
import React, {Component} from 'react';
import PropTypes from 'prop-types'
import './new-task-form.css';

export default class NewTaskForm extends Component {

    static defaultProps = {
        className: 'new-todo',
        holder: "Input do wish",
        type: 'text',
    }

    static propTypes = {
        onSubmit: PropTypes.func,
        onChange: PropTypes.func
    }
    state = {
        value: ''
    }

    changeInputValue = (value)=>{
        this.setState({ value: value })
    }

    onSubmitFormHandler(e){
        const {addElement} = this.props
        const {value} = this.state
        e.preventDefault();
        addElement(value)
        this.changeInputValue('')
    }

    onChangeInputHandler = (e) =>{
        this.changeInputValue( e.target.value)
    }

    render() {
    const {holder, className, type} = this.props
        return  <form onSubmit={this.onSubmitFormHandler}>
                <input onChange={this.onChangeInputHandler}
                       className={className} type={type} placeholder={holder}
                       value={this.state.value}/>
                </form>
    }
}


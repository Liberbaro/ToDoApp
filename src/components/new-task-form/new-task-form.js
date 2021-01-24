import React, {Component} from 'react';
import PropTypes from 'prop-types'
import './new-task-form.css';

export default class NewTaskForm extends Component {

    static defaultProps = {
        onChangeInputHandler: () => {},
        onSubmitFormHandler: () => {},
        className: 'new-todo',
        type: 'text',
        placeholder: "Input do wish"

    }

    static propTypes = {
        onChangeInputHandler: PropTypes.func.isRequired,
        onSubmitFormHandler: PropTypes.func.isRequired,
        className: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        placeholder: PropTypes.string.isRequired
    }

    state = {
        value: ''
    }

    changeInputValue = (value) => {
        this.setState({value: value});
    }

    onSubmitFormHandler = (e) => {
        e.preventDefault();
        this.props.addTaskToListToDo(this.state.value);
        this.changeInputValue('');
    }

    onChangeInputHandler = (e) => {
        this.changeInputValue(e.target.value);
    }

    render() {
        const {placeholder, className, type} = this.props;
        return <form onSubmit={this.onSubmitFormHandler}>
                    <input onChange={this.onChangeInputHandler}
                       className={className} type={type} placeholder={placeholder}
                       value={this.state.value}/>
              </form>
    }
}


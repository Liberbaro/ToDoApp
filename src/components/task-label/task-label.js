import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {formatDistanceToNow} from 'date-fns';

export default class TaskLabel extends Component {

    static defaultProps = {
        timeOfCreate: new Date().getTime(),
        text: 'New Task'
    }

    static propTypes = {
        timeOfCreate: PropTypes.number.isRequired,
        text: PropTypes.string
    }

    state = {
        time: formatDistanceToNow(this.props.timeOfCreate, {includeSeconds: true}),
    }


    tick = () => {
        this.setState({
            time: formatDistanceToNow(this.props.timeOfCreate, {includeSeconds: true}),
        });
    }

    componentDidMount = () => {
        this.intervalID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount = () => {
        clearInterval(this.intervalID);
    }

    render() {
        return (
            <label>
                <span className='description'>{this.props.text}</span>
                <span className='created'>  created {`${this.state.time}`} ago</span>
            </label>
        )
    }
}


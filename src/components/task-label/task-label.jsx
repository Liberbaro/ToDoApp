/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';

export default class TaskLabel extends Component {
  static propTypes = {
    timeOfCreate: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  };

  state = { time: formatDistanceToNow(this.props.timeOfCreate, { includeSeconds: true }) };

  tick = () => {
    this.setState({ time: formatDistanceToNow(this.props.timeOfCreate, { includeSeconds: true }) });
  };

  componentDidMount = () => {
    this.intervalID = setInterval(() => this.tick(), 1000);
  };

  componentWillUnmount = () => {
    clearInterval(this.intervalID);
  };

  render() {
    return (
      <label>
        <span className="description"> {this.props.text} </span>
        <span className="created"> created {`${this.state.time}`} ago </span>
      </label>
    );
  }
}

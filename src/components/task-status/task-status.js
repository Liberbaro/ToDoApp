import React, {Component} from  'react'

export default class TaskStatus extends Component {




    render() {
    const {className, text} = this.props
        if(className ==='description'){
            return <span className={className} >{text}</span>
        }
        else if(className === 'created') {
            const date = new Date().getDay()
            return  <span className={className}>  created {date} ago</span>
        }
    }
}

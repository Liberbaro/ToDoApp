import React, {Component} from  'react'
// import { formatDistance, formatDistanceToNow } from 'date-fns'

export default class TaskStatus extends Component {

    state = {
        // time: formatDistanceToNow(this.props.timeOfCreate, {includeSeconds: true}  )
        // time: formatDistanceToNow(this.props.timeOfCreate, { includeSeconds: true }),
    }

    // getDate = ()=>{
    //     const {timeOfCreate} = this.props;
    //     console.log(timeOfCreate)
    //
    //
    // }



    render() {
    const {className, text, timeOfCreate} = this.props
        // console.log(formatDistance)
        // let time = formatDistanceToNow(timeOfCreate, {includeSeconds: true}  )
            // console.log(new Date(), timeOfCreate,   { addSuffix: true })
        if(className ==='description'){
            return <span className={className} >{text}</span>
        }
        else if(className === 'created') {
            // const date = .getDay()
            return  <span className={className}>  created {'new Date()'} ago</span>
        }
    }
}

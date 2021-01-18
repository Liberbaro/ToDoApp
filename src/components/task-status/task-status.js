import React, {Component} from  'react'

export default class TaskStatus extends Component {




    render() {
    const {className, text} = this.props
        // let text = '';

        if(className ==='description'){
                // if(mainClass === 'completed'){
                //     text = other// доделать)
                // }
                // else  if(mainClass === 'editing'){
                //     // text = 'Editing task';
                //     text = other // не писать тут value
                // }
                //  else text = 'Active task';
            return <span className={className} >{text}</span>

        }

        else if(className === 'created') {
            const date = new Date().getDay()
            return  <span className={className}>  created {date} ago</span>

        }
    }
}

// const TaskStatus= ({test = '', label, className}) =>{
//     if(className ==='description'){
//         if(test === 'completed'){
//             return <li  className={className}>Completed task</li>
//         }
//         else  if(test === 'editing'){
//             return <span className={className}>Editing task</span>
//         }
//         return <span className={className}>Active task</span>
//     }
//
//     else if(className === 'created') {
//         return  <span className={className}>  created ____ ago</span>
//     }
//
//
// }
//
// export default TaskStatus;


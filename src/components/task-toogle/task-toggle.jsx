import React from 'react';
import PropTypes from 'prop-types';
import './task-toggle.css';

const TaskToggle = ({ className, type, text, changeTaskStatus, id, saveNewTaskValue }) => {
  function onKeyDownInputFieldHandler(e) {
    return e.keyCode === 13 ? saveNewTaskValue(id, e) : null;
  }

  const inputField = (
          <input
            onKeyDown={onKeyDownInputFieldHandler}
            defaultValue={text}
            type={type}
            className={className} />
        ),
        checkbox = (
          <input onClick={() => changeTaskStatus(id)} type={type} className={className} />
        );

  return className === 'edit' ? inputField : checkbox;
};

TaskToggle.defaultProps = {
  saveEditingTask: () => {},
  changeTaskStatus: () => {},
};

TaskToggle.propTypes = {
  saveEditingTask: PropTypes.func,
  changeTaskStatus: PropTypes.func,
  className: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default TaskToggle;

// export default class TaskToggle extends Component {
//   static defaultProps = { changeTaskStatus: () => {} };
//
//   static propTypes = {
//     changeTaskStatus: PropTypes.func,
//     className: PropTypes.string.isRequired,
//     type: PropTypes.string.isRequired,
//     text: PropTypes.string.isRequired,
//   };
//
//   state = { changes: false }
//
//   onKeyDownInputFieldHandler=(e) => {
//     const { id, saveNewTaskValue } = this.props;
//     return e.keyCode === 13 ? saveNewTaskValue(id, e) : null;
//   }
//
//   render() {
//     const { className, type, text, changeTaskStatus, id } = this.props,
//           inputField = (
//             <input
//               onKeyDown={this.onKeyDownInputFieldHandler}
//               defaultValue={text}
//               type={type}
//               className={className} />
//           ),
//           checkbox = (
//             <input onClick={() => changeTaskStatus(id)} type={type} className={className} />
//           );
//     return className === 'edit' ? inputField : checkbox;
//   }
// }
//

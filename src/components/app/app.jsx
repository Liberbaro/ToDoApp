import React, { Component } from 'react';
import Header from '../header/header';
import Main from '../main/main';
import './app.css';

export default class App extends Component {
  taskId = 100; // Ошибка. Разобраться.

  state = {
    listToDo: [],
    // eslint-disable-next-line react/no-unused-state
    filter: 'all',
  };

  getNewListToDo() {
    const { listToDo } = this.state;
    return JSON.parse(JSON.stringify(listToDo));
  }

  getTaskIndex(id) {
    const { listToDo } = this.state;
    return listToDo.findIndex((el) => el.id === id);
  }

  addTaskToListToDo = (text) => {
    this.changeListToDo(100, (newListToDo) => {
      const newTask = this.createNewTask(text);
      newListToDo.unshift(newTask);
    });
  };

  clearCompletedTasks = () => {
    this.setState(({ listToDo }) => {
      const newListToDo = listToDo.filter(
        ({ className }) => className !== 'completed',
      );
      return { listToDo: newListToDo };
    });
  };

  editTaskValue = (id) => {
    this.changeListToDo(id, (arg1, arg2, task) => {
      task.className = 'editing';
    });
  };

  saveNewTaskValue = (id, e) => {
    this.changeListToDo(id, (arg, arg2, task) => {
      task.text = e.target.value;
      task.className = task.done ? 'completed' : '';
    });
  };

  changeTaskStatus = (id) => {
    this.changeListToDo(id, (arg1, arg2, task) => {
      task.className = task.done ? '' : 'completed';
      task.done = !task.done;
    });
  };

  removeTaskFromToDoList = (id) => {
    this.changeListToDo(id, (newListToDo, index) => newListToDo.splice(index, 1));
  };

  getTaskFromListToDo = (id, listToDo) => {
    const index = this.getTaskIndex(id);
    return listToDo[index];
  };

  selectTaskFilter = (label) => {
    this.changeListToDo(100, (newListToDo) => {
      newListToDo.map((el) => {
        if (label === 'all') el.display = 'block';
        else el.display = el.className === label ? 'block' : 'none';
        return el;
      });
    });
  };

  changeListToDo = (id, cb) => {
    this.setState(() => {
      const newListToDo = this.getNewListToDo(),
            index = this.getTaskIndex(id),
            task = this.getTaskFromListToDo(id, newListToDo);
      cb(newListToDo, index, task);
      return { listToDo: newListToDo };
    });
  };

  createNewTask(text) {
    return {
      text,
      className: '',
      id: this.taskId++,
      done: false,
      display: 'block',
      timeOfCreate: new Date().getTime(),
    };
  }

  render() {
    const { listToDo } = this.state,
          countTasksLeft = listToDo.filter(({ done }) => !done).length;
    return (
      <section className="todoapp">
        <Header addTaskToListToDo={this.addTaskToListToDo} asdas="aa" />
        <Main
          taskList={listToDo}
          countTasksLeft={countTasksLeft}
          clearCompletedTasks={this.clearCompletedTasks}
          selectTaskFilter={this.selectTaskFilter}
          saveNewTaskValue={this.saveNewTaskValue}
          changeTaskStatus={this.changeTaskStatus}
          editTaskValue={this.editTaskValue}
          removeTaskFromToDoList={this.removeTaskFromToDoList}
        />
      </section>
    );
  }
}

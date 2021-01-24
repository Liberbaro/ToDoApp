import React, {Component} from 'react';
import Header from "../header/header";
import Main from "../main/main";
import './app.css';

export default class App extends Component {

    taskId = 100;

    state = {
        listToDo: []
    }

    createNewTask(text) {
        return {
            text: text,
            className: '',
            id: this.taskId++,
            done: false,
            display: 'block',
            timeOfCreate: new Date().getTime()// на Date пробрасывает ошибку при добавлении новый экземпляров.
        }
    }

    getTaskIndex(id) {
        return this.state.listToDo.findIndex((el) => el.id === id);
    }

    getNewListToDo() {
        return JSON.parse(JSON.stringify(this.state.listToDo));
    }

    getTaskFromListToDo = (id, listToDo) => {
        const index = this.getTaskIndex(id);
        return listToDo[index];
    }

    changeListToDo = (id, cb) => {
        this.setState(({listToDo}) => {
            const newListToDo = this.getNewListToDo(),
                  index = this.getTaskIndex(id),
                  task = this.getTaskFromListToDo(id, newListToDo);
            cb(newListToDo, index, task);
            return {
                listToDo: newListToDo
            }
        });
    }

    removeTaskFromToDoList = (id) => {
        this.changeListToDo(id, (newListToDo, index) => newListToDo.splice(index, 1));
    }

    changeTaskStatus = (id) => {
        this.changeListToDo(id, (arg1, arg2, task) => {
            task.className = task.done ? '' : 'completed';
            task.done = !task.done;
        });
    }

    editTaskValue = (id) => {
        this.changeListToDo(id, (arg1, arg2, task) => {
            task.className = 'editing';
        });
    }

    saveNewTaskValue = (id, e) => {
        this.changeListToDo(id, (arg, arg2, task) => {
            task.text = e.target.value;
            task.className = task.done ? 'completed' : '';
        });
    }

    selectTaskFilter = (label) => {
        this.changeListToDo(100, (newListToDo) => {
            newListToDo.map((el) => {
                if (label === 'all') el.display = 'block';
                else  el.display = (el.className === label) ? 'block' :  'none';
                return el;
            })
        })
    }

    clearCompletedTasks = () => {
        this.setState(({listToDo}) => {
            const newListToDo = listToDo.filter(({className}) => className !== 'completed');
            return { listToDo: newListToDo };
        })
    }

    addTaskToListToDo = (text) => {
        this.changeListToDo(100, (newListToDo) => {
            const newTask = this.createNewTask(text);
            newListToDo.unshift(newTask);
        })
    }

    render() {
        const {listToDo} = this.state;
        const countTasksLeft = listToDo.filter(({done}) => !done).length;
        return (
            <section className='todoapp'>
                <Header addTaskToListToDo={this.addTaskToListToDo}/>
                <Main taskList={listToDo}
                      countTasksLeft={countTasksLeft}
                      clearCompletedTasks={this.clearCompletedTasks}
                      selectTaskFilter={this.selectTaskFilter}
                      saveEditingTask={this.saveNewTaskValue}
                      changeTaskStatus={this.changeTaskStatus}
                      editTaskValue={this.editTaskValue}
                      deleteTask={this.removeTaskFromToDoList} />
            </section>
        );
    }

}

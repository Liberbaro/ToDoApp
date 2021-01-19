import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Header from "../header/header";
import Main from "../main/main";
import './app.css'

export default class App extends Component{

    maxID = 666;
    state = {
        listToDo: [
            this.createNewTask('Рефакторинг'),
            this.createNewTask('Редактирование пустых задач'),
            this.createNewTask('Корректая дата'),
            this.createNewTask('Закончить приложение'),
        ]
    }

    static propTypes = {
        createNewTask: PropTypes.string,
        getIndex: PropTypes.array,
    }

    createNewTask (text){
        return {
            text: text,
            className: '',
            id:  this.maxID++,
            done: false,
            display: 'block',
            timeOfCreate: new Date().getHours(),

        }
    }





    getIndex (id){
           return this.state.listToDo.findIndex((el)=>el.id === id);
    }

    getNewListToDo (){
        return JSON.parse(JSON.stringify(this.state.listToDo));
    }

    getTaskFromState = (id,newList)=>{
        const index = this.getIndex(id);
        return newList[index];
    }

    changeState = (id, cb)=>{
        this.setState(({listToDo})=>{
            const newListToDo = this.getNewListToDo();
            const task = this.getTaskFromState(id, newListToDo);
            const index = this.getIndex(id);
            cb(newListToDo, index, task);
            return {
                listToDo: newListToDo
            }
        });
    }

    clearCompleted = ()=>{
        this.setState(({listToDo})=>{
            const newList =  listToDo.filter((el)=> el.className !== 'completed')
            return {listToDo: newList}
        })
    }

    onfilteredList =(label)=>{
        this.changeState(666, (newListToDo)=>{
            newListToDo.map((el)=> {
                if(label === 'all') el.display = 'block';
                else el.className === label? el.display = 'block': el.display = 'none'
                return el
            })
        })
    }


    addElement =(text)=>{
        console.log(text)
        this.changeState(666, (newListToDo)=>{
            const newElement = this.createNewTask(text)
            newListToDo.unshift(newElement)
        })
    }


    changeStatus= (id)=>{
            this.changeState(id, (arg1, arg2, task)=> {
                task.className = task.done?  '' : 'completed';
                task.done = !task.done
        });



    }

    deleteTask =(id)=>{
        this.changeState(id, (newListToDo, index)=>  newListToDo.splice(index, 1));

    }



    editingTask= (id)=>{
        this.changeState(id, (arg1, arg2, task)=>{
            task.className = 'editing';
        });
    }

    editTask =(id,event)=>{

        this.changeState(id, (arg, arg2, task)=>{
            if (event.keyCode === 13) {
                task.text = event.target.value;
                task.done === false ? task.className = '' : task.className = 'completed';
            }
        });
    }




    render() {

        const {listToDo} = this.state;
        const  countTaskLeft = listToDo.filter(({done})=>done ===false).length;
    return (
        <section className='todoapp'>
            <Header  createNewTask={this.createNewTask}
                     addElement={this.addElement}/>
            <Main addElement={this.addElement}
                  changeStatus={this.changeStatus}
                  taskEditing={this.taskEditing}
                  createNewTask={this.createNewTask}
                  taskList={this.state.listToDo}
                  editingTask={this.editingTask}
                  deleteTask={this.deleteTask}
                  editTask={this.editTask}
                  countTaskLeft={countTaskLeft}
                  onfilteredList={this.onfilteredList}
                  clearCompleted={this.clearCompleted}
               />
        </section>
    );
}

}

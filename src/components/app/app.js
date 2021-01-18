import React, {Component} from 'react';
import Header from "../header/header";
import Main from "../main/main";
import './app.css'

export default class App extends Component{

    maxID = 666;
    state = {
        listToDo: [
            this.createNewTask('Completed'),
            this.createNewTask('Editing'),
            this.createNewTask('Active'),
        ]
    }

    createNewTask (text){
        return {
            text: text,
            className: '',
            id:  this.maxID++
        }
    }


    // addElement =()=>{
    //     this.setState(({listToDo})=>{
    //         const newArr =  JSON.parse(JSON.stringify(listToDo))
    //         const newElement = this.createNewTask('random')
    //         newArr.unshift(newElement)
    //         return  {
    //             listToDo: newArr
    //         }
    //     })
    // }

    getIndex (id){
           return this.state.listToDo.findIndex((el)=>el.id === id)
    }

    getNewListToDo (){
        return JSON.parse(JSON.stringify(this.state.listToDo))
    }





    changeStatus= (id)=>{
        this.setState(({listToDo})=>{
            const newList = this.getNewListToDo();
            const inx = this.getIndex(id)

            newList[inx].className === ''?  newList[inx].className = 'completed': newList[inx].className = '';
            return {
                listToDo: newList
            }
        })
    }

    deleteTask =(id)=>{
        this.setState(({listToDo})=>{
            const newList = this.getNewListToDo();
            const inx = this.getIndex(id)
            newList.splice(inx, 1)
            return {
                listToDo: newList
            }
        })
    }

    editingTask= (id)=>{
        this.setState(({listToDo})=>{
            const newList = this.getNewListToDo();
            const inx = this.getIndex(id)
           newList[inx].className = 'editing';

            return {
                listToDo: newList
            }
        })
    }

    editTask =(id,event)=>{
        if(event.keyCode == 13){
         this.setState(({listToDo})=>{
             const val = event.target.value
             const newList = this.getNewListToDo();
             const inx = this.getIndex(id)
             newList[inx].text = val
             newList[inx].className = '';
             return {
                 listToDo: newList
             }
            })
        }

    }



    render() {
    return (
        <section className='todoapp'>
            <Header/>
            <Main addElement={this.addElement}
                  changeStatus={this.changeStatus}
                  taskEditing={this.taskEditing}
                  createNewTask={this.createNewTask}
                  taskList={this.state.listToDo}
                  editingTask={this.editingTask}
                  deleteTask={this.deleteTask}
                  editTask={this.editTask}/>
        </section>
    );
}

}









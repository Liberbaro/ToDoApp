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
            this.createNewTask('Закончить приложение'),
        ]
    }

    createNewTask (text){
        return {
            text: text,
            className: '',
            id:  this.maxID++,
            done: false,
            display: 'block'
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
            let newListToDo = this.getNewListToDo();
            const task = this.getTaskFromState(id, newListToDo);
            const index = this.getIndex(id);
            cb(newListToDo, index, task);
            console.log(newListToDo)
            return {
                listToDo: newListToDo
            }
        });
    }

    onfilteredList =(label)=>{
        this.changeState(666, (newListToDo, index, task)=>{
            const filteredList = newListToDo.map((el)=> {
                if(label === 'all') el.display = 'block';
                else el.className === label? el.display = 'block': el.display = 'none'
                return el
            })
            newListToDo = filteredList;
        })
    }


    addElement =(text)=>{
        this.changeState(666, (newListToDo)=>{
            const newElement = this.createNewTask(text)
            newListToDo.unshift(newElement)
        })
    }


    changeStatus= (id)=>{
            this.changeState(id, (arg1, arg2, task)=> {
            if( task.done === false){
                task.className = 'completed';
                task.done = true;
            } else {
                task.className = '';
                task.done = false;
            }
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
            if (event.keyCode == 13) {
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
               />
        </section>
    );
}

}
//
// changeStatus= (id)=>{
//
//     this.setState(({listToDo})=>{
//         const newList = this.getNewListToDo();
//         const task = this.getTaskFromState(id, newList)
//         if( task.done === false){
//             task.className = 'completed';
//             task.done = true;
//         } else {
//             task.className = '';
//             task.done = false
//         }
//         return {
//             listToDo: newList
//         }
//     })
// }
//
// deleteTask =(id)=>{
//     this.setState(({listToDo})=>{
//         const newList = this.getNewListToDo();
//         const inx = this.getIndex(id)
//         newList.splice(inx, 1)
//         return {
//             listToDo: newList
//         }
//     })
// }
//
//
//
// editingTask= (id)=>{
//     this.setState(({listToDo})=>{
//         const newList = this.getNewListToDo();
//         const task = this.getTaskFromState(id,newList)
//         task.className = 'editing';
//         return {
//             listToDo: newList
//         }
//     })
// }
//
// editTask =(id,event)=>{
//     if(event.keyCode == 13){
//         this.setState(({listToDo})=>{
//             const val = event.target.value
//             const newList = this.getNewListToDo();
//             const task = this.getTaskFromState(id,newList)
//             task.text = val
//             task.done === false?  task.className = '': task.className = 'completed'
//             return {
//                 listToDo: newList
//             }
//         })
//     }
//
// }




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




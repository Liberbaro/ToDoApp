import React , {Component}from 'react';
import './new-task-form.css'

export default class NewTaskForm extends Component {
    state = {
        value: ''
    }

    testFun(e){
        const {addElement} = this.props
        e.preventDefault();
        addElement(this.state.value)
        this.setState(()=>{
            return{
                value: ''
            }
        })
    }

    inputValue = (e) =>{
            this.setState(({value})=>{
                return(
                    {value: e.target.value}
                )
            })
    }

    render() {
    const {holder, className} = this.props

        return <form onSubmit={(e)=>{this.testFun(e)}}>
            <input onChange={(e)=>this.inputValue(e)} className={className} type='text' placeholder={holder} value={this.state.value}/>
        </form>
    }


}

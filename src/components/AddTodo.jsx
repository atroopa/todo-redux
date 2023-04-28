import React, { Component } from 'react'

class AddTodo extends Component {
    
    constructor (props){
        super(props);
        this.state = {
            input: ''
        }
    }
    
    ChangeHandler = (event) => {
        this.setState({input: event.target.value});
    }

    ClickHandler = () => {
        
    }

    render() {
    return (
      <div>
        <input className='bg-red-100' type='text' value={this.state.input} onChange={this.ChangeHandler} />
        <button onClick={this.ClickHandler} >New</button>
      </div>
    )
  }
}

export default  AddTodo;
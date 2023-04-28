import React, { Component } from 'react';
import {connect} from 'react-redux'; 
import { insertTodo } from '../redux/todo/Actions';

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
        this.props.insertTodo(this.state.insertTodo);
        this.setState({input: ''});
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

export default connect(null, {insertTodo}) (AddTodo);
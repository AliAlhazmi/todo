import React, { Component } from 'react'
import shortid from 'shortid'

export default class TodoForm extends Component {
    state =
    {
        text: ""
    };
    
    handleChange = (event) => {
        this.setState( {  
                [event.target.name]: event.target.value  //updates the state
            });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit({
            id: shortid.generate(),
            text: this.state.text,
            complete: false
         })
        this.setState(
            {
                text:""
            }
        )
    }

    render() {
        const btn = {
            backgroundColor: 'green',
            border: 'none',
            marginLeft: '0.45ch',
            color: 'white'
          };
        return (
            <form onSubmit = {this.handleSubmit}>
                <br></br><br></br>
                <input
                name = "text"
                value = {this.state.text}
                placeholder ="what to do?"
                onChange = {this.handleChange}
                />
                <button onClick = {this.handleSubmit} style={btn}>add</button>
            </form>
        )
    }
}

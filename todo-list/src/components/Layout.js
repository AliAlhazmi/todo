import React, { Component } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo';
import '../App.css';

export default class Layout extends Component {
    state = {
        todos: [],
        todosToshow: 'all'
    };

    addTodo = (todo) =>{
        this.setState({
            todos: [todo, ...this.state.todos]
        })
    }
    toggleComplete = (id) => {
        this.setState({
                    //loop through the todos and find one with the correct id
            todos: this.state.todos.map(todo =>{ 
                if (todo.id === id)
                {
                    return{
                        ...todo,
                        complete: !(todo.complete),
                        
                    }
                } 
                else {
                    return todo;
                }
            })
        })
    }
    updateTodoShow = string => {
        this.setState({
            todosToshow: string
        })
    }
    //perma delete
    deleteTodo = id => {
        this.setState({
            //if its not the id'd todo then dont delete it
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }
        //perma remove completed todos
        removeAllCompletedTodos = () => {
            this.setState({
                //if its not a completed todo then keep it
                todos: this.state.todos.filter(todo => !todo.complete)
            })
        }
 
    
    
    
    render() {
       let todos = []; 

        //for the Show feature ---- vvv
        if(this.state.todosToshow === 'all')
        {
            todos = this.state.todos;
        }
        else if(this.state.todosToshow === "incomplete")
        {
            todos = this.state.todos.filter( todo => !todo.complete)
        }
        else if(this.state.todosToshow === "complete")
        {
            todos = this.state.todos.filter( todo => todo.complete)
        }
        //for the Show feature ---- ^^^
        const btn = {
            backgroundColor: '#61dafb',
            border: 'none',
            marginLeft: '1ch',
            color: 'white'
          };
        return (
            <div>
                
                <TodoForm onSubmit = {this.addTodo}/>
                 {todos.map(todo => (
                    <Todo key={todo.id} 
                    toggleComplete={()=>this.toggleComplete(todo.id)} //we used arrow so we can pass the ID which is stored in the map
                    deleteTodo={()=> this.deleteTodo(todo.id)}
                    todo= {todo}/>
                ))}
                {/* filter() goes through the todos and delete the ones the dont meet the condition */}
                <div>Incomplete Todos: {this.state.todos.filter( todo => !todo.complete).length}</div>
                <div>
                    <button onClick={() => this.updateTodoShow("all")} style={btn}>Show All</button> 
                    <button onClick={() => this.updateTodoShow("incomplete")} style={btn}>Show uncomplete </button>
                    <button onClick={() => this.updateTodoShow("complete")} style={btn}>Show Completed</button>

                    {/* Only render the button if there is any completed Todos 
                        we used some instead of filter cuz we only need to find 1 complete todo (it exists earlier than filter) */}
                    {this.state.todos.some(todo => todo.complete) ? (
                    <div> 
                    <button onClick={this.removeAllCompletedTodos}style={btn} >Remove All completed</button>
                    </div>) :null}
                    
                </div>
            </div>
        )
    }
}

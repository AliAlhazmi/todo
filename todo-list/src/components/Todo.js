  
import React from "react";
const btn = {
  backgroundColor: 'red',
  border: 'none',
  marginLeft: '1ch',
  marginBottom: '1ch',
  color: 'white'
};
const todoCont = {
  backgroundColor: 'wheat',
  minWidth: '19ch',
  maxWidth: '19ch',
  overflow: 'auto',
}
export default (props) => (
  
  <div style={{display:"flex", justifyContent: "center"}} >
    <div
      style={{
        color:  props.todo.complete ? 'gray' :"",
        textDecoration:props.todo.complete ? 'line-through' :"",
      }}
      onClick={props.toggleComplete}>
       <div style={todoCont}>{props.todo.text}</div>
    </div>
    
    <button onClick={props.deleteTodo} style={btn}>Del</button>
 </div>
);
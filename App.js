import './App.css';
import Header from './MyComponents/Header';
import {Todos} from './MyComponents/Todos';
import {Footer} from './MyComponents/Footer';
import React,{useState} from 'react';
import { AddTodo } from './MyComponents/AddTodo';
function App() {
  let initTodo;
  if(localStorage.getItem("todos")===0){
    initTodo=[];
  }
  else {
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo)=>{
    console.log('I am onDelete of todo', todo);
    
   setTodos(todos.filter((e)=>{
     return e!==todo;
   })) 
    }

 
    const addTodo=(title,desc)=>{
    console.log("I am adding this todo ",title, desc)
    let sno;
    if(todos.length==0)
    {
      sno=1;
    }
    else{
    sno=todos[todos.length-1].sno +1;
    }
    const myTodo={
      sno:sno,
      title:title,
      desc:desc,
    }

      localStorage.setItem("todos", JSON.stringify(todos));

    setTodos([...todos,myTodo])
    console.log(myTodo);
    if (localStorage.getItem("todos")){
      localStorage.setItem("todos",JSON.stringify(todos))
    }
  }
  
  const [todos, setTodos] = useState([initTodo]);


  return (
    <div className="App">
      <Header title="My Todo-List" searchBar= {true}/>
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </div>
  );
}

export default App;

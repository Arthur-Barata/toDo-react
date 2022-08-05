import React, {useState, useEffect} from "react"
import "./todo.css"


function Todo (props){

    const[text,setText]=useState(props.valor)
    const[items,setItems]=useState(["eu"])
    const nada =""

   function addHanddler(event){
        let textInput = event.target.value;
        setText(textInput)
        console.log(text)
    }

   
    function add (event){

        event.preventDefault()
        let path = document.querySelector("#nuss").value
        let novoArray = [...items, path]
        setItems(novoArray)
        setText(" ")

    }
    

    return(
    <div className="container">
        <h1 >ToDo</h1>
        <form>
            <input id="nuss" type="text" onChange={addHanddler} value={text}></input>
            <button onClick={add}>Add</button>
        </form>
        <ul>
         {items.map( cada => <li>{cada}</li>)}
            
        </ul>
        
    </div>)
}



export default Todo
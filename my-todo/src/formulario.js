import React, {useState} from "react"


function Formulario (props){

    const[text,setText]=useState( "" )
    
    function addHanddler(event){
        let textInput = event.target.value;
        setText(textInput)
       
    }

    function add (event){
        event.preventDefault()
        
        if(text != ""){
        props.onAddItem(text)     
        setText("")}
    }

     return(
         <form>
            <input id="nuss" type="text" onChange={addHanddler} value={text} placeholder={"Digite aqui"}></input>
            <button onClick={add}>Add</button>
         </form>

     )
}
export default Formulario
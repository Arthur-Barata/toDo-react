import React from "react"

  function CheckLink(prop){

        if(prop.done){
        return (
        <img alt="check" src="./check.png"></img>)
        }
        else{
            return (
            <img alt="check" src="./check (1).png"></img>)

        }
    }

function List(props){

  
  

    return ( props.items.map( cada =><li className={cada.done?"done item" :"item" } key={cada.id}>
    {cada.text}
    <div>
        <button onClick={()=>{props.changer(cada)}}><CheckLink done={cada.done}></CheckLink></button>
        <button className="botao" onClick={()=> props.onItemDeleted(cada)}><img alt="delete" src="./delete.png"></img></button> 
    </div></li> ))
 }
 
 export default List
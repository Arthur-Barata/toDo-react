import React, {useState, useEffect} from "react"
import "./todo.css"
import List from "./List.js"
import Formulario from "./formulario.js"
import item from "./item.js"


const savedIt ="savedItem"

function Todo (props){
 
    const[items,setItems]=useState([ ])

    useEffect(()=>{
        localStorage.setItem(savedIt,JSON.stringify(items))

    }
    
    ,[items])

    useEffect(()=>{
        let saveus= JSON.parse(localStorage.getItem(savedIt))

        if(saveus){
        setItems(saveus)
        }
    }
    ,[])

    function buscadora(text){
        let novoArray = [...items, new item(text)]
        setItems(novoArray)
    }
    
     function onItemDeleted(item ){

        let nov = items.filter((it)=> it.id != item.id)
        setItems(nov)
     }
     function checkLink(){

        if(items.done){
            return  "./check.png"
        }
        else{
            return "./check (1).png"
        }
     }
     function changer(cada){
        
            let novo = items.map((item)=>{
                if (item.id == cada.id){
                    item.done= !cada.done
                }
                return item
            })
        
        
        setItems(novo) 
     }

    return(
    <div className="container">
        <div className="content">
        <div className="header">
            <img className='logo' src="./td.png"></img>
            <h1 >ToDo</h1></div>
        <h4>Organize seus afazeres</h4>
        <Formulario onAddItem={buscadora}></Formulario>
        <ul>
         <List changer={changer} checkLink={checkLink} onItemDeleted={onItemDeleted} items={items}></List>
        </ul>
        </div>    
    </div>)
}



export default Todo
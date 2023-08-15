import './styles.css'
import { useState } from "react";

export default function ActionForm({addAction}){
    const [title, setTitle] = useState("New Action")

    function handleNewAction(e){
        e.preventDefault()
        if(title !== ""){
            let newAction = {id:crypto.randomUUID(),title:title,bonus_or_dc:0,action_range:"",damage:0,notes:""}
            addAction(newAction)
        }
        else(alert("Input a action title first"))
    }

    return(
        <>
            <label>Title:</label>
            <input type="text" value={title}
            onChange={e => setTitle(e.target.value)}/>
            <button onClick={e => handleNewAction(e)} className='red-btn'>Add</button>
        </>
    )
}
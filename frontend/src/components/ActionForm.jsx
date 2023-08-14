import './styles.css'
import { useState } from "react";

export default function ActionForm({character}){
    const [act, setAct] = useState(character.actions);
    let temp = {id:crypto.randomUUID(), title:"", bonusOrDc:0, range:"", damage:0, notes:""};
    return(
        <>
            <h3>{character.name}</h3>
            <h4>Level {character.level} {character.charClass}</h4>
            <form>
                <h2>Add Action</h2>
                {/*title*/}
                <label htmlFor="title">Title:</label><br/>
                <input type="text" value={temp.title}/>
                onChange={(e) => temp.title = e.target.value}<br/>
            </form>
        </>
    )
}
import './styles.css'
import { useState } from "react";

export default function FeatureForm({character}){
    const [character, setCharacter] = useState(character);
    let temp = {id:crypto.randomUUID(), title:"", description:""};
    return(
        <>
            <h3>{character.name}</h3>
            <h4>Level {character.level} {character.charClass}</h4>
            <form>
                <h2>Add Feature</h2>
                {/*title*/}
                <label htmlFor="title">Title:</label><br/>
                <input type="text" value={temp.title}/>
                onChange={(e) => temp.title = e.target.value}<br/>
            </form>
        </>
    )
}
import './styles.css'
import CharacterItem from './CharacterItem'
import { useState } from 'react'

export default function CharacterList({characters,selectChar,addCharacter}){
    const [charName, setCharName] = useState("")

    function hanldeNewChar(e){
        e.preventDefault()
        if(charName !== ""){
            addCharacter(charName)
            setCharName("")
        }
        else{alert("enter a name for your new character")}
    }

    return(
        <div className='left-column'>
            <h3 className='left-column-title'>Characters</h3>
            {characters.length === 0 && "You have no characters"}
            <ul className="list">
                {characters.map(character => {
                    return (<CharacterItem character={character}
                        selectChar={() => selectChar(character)}/>)
                })}
            </ul>
            {characters.length <= 5 &&
                <form onSubmit={hanldeNewChar}>
                    <label>Name:</label>
                    <input type='text' value={charName} className='input-field'
                    onChange={e => setCharName(e.target.value)}/>
                    <button className='red-btn'>Create New</button>
                </form>
            }
        </div>
    )
}
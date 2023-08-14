import './styles.css'
import { useState } from "react";

export default function CharacterForm({character}){
    const [char, setChar] = useState(character)

    return(
        <>
        <form className='char-form'>
            <div>
                <b><input type="text" value={char.char_name} className='char-title'
                onChange={e => setChar(char => {return {...char,char_name:e.target.value}})}/></b>
                Level: <input type="number" value={char.char_level} className='char-number'
                onChange={e => setChar(char => {return {...char,char_level:e.target.value}})}/>
                Class: <input type="text" value={char.char_class} className='char-input'
                onChange={e => setChar(char => {return {...char,char_class:e.target.value}})}/>
                Background: <input type="text" value={char.background} className='char-input'
                onChange={e => setChar(char => {return {...char,background:e.target.value}})}/>
            </div>
            <table className='char-table'>
            <tr>
            <td>
            <ul className='char-list'>
                <li>
                    <label>STRENGTH:</label>
                    <input type="number" value={char.strength} className='char-number'
                    onChange={e => setChar(char => {return {...char,strength:e.target.value}})}/>
                </li>
                <li>
                    <label>DEXTERITY:</label>
                    <input type="number" value={char.dexterity} className='char-number'
                    onChange={e => setChar(char => {return {...char,dexterity:e.target.value}})}/>
                </li>
                <li>
                    <label>CONSTITUTION:</label>
                    <input type="number" value={char.constitution} className='char-number'
                    onChange={e => setChar(char => {return {...char,constitution:e.target.value}})}/>
                </li>
                <li>
                    <label>INTELLIGENCE:</label>
                    <input type="number" value={char.inteligence} className='char-number'
                    onChange={e => setChar(char => {return {...char,inteligence:e.target.value}})}/>
                </li>
                <li>
                    <label>WISDOM:</label>
                    <input type="number" value={char.wisdom} className='char-number'
                    onChange={e => setChar(char => {return {...char,wisdom:e.target.value}})}/>
                </li>
                <li>
                    <label>CHARISMA:</label>
                    <input type="number" value={char.charisma} className='char-number'
                    onChange={e => setChar(char => {return {...char,charisma:e.target.value}})}/>
                </li>
            </ul>
            </td>
            <td>
                HP: <input type="number" value={char.current_hp} className='char-number'
                onChange={e => setChar(char => {return {...char,current_hp:e.target.value}})}/>
                /
                <input type="number" value={char.max_hp} className='char-number'
                onChange={e => setChar(char => {return {...char,max_hp:e.target.value}})}/>

                Temp HP: <input type="number" value={char.temp_hp} className='char-number'
                onChange={e => setChar(char => {return {...char,temp_hp:e.target.value}})}/>

                AC: <input type="number" value={char.ac} className='char-number'
                onChange={e => setChar(char => {return {...char,ac:e.target.value}})}/><br/>

                Speed: <input type="number" value={char.speed} className='char-number'
                onChange={e => setChar(char => {return {...char,speed:e.target.value}})}/>

                Initiative: <input type="number" value={char.initiative} className='char-number'
                onChange={e => setChar(char => {return {...char,initiative:e.target.value}})}/><br/>

                Proficiency Bonus: <input type="number" value={char.proficiency_bonus} className='char-number'
                onChange={e => setChar(char => {return {...char,proficiency_bonus:e.target.value}})}/><br/><hr/>

                Hit Dice Type: <input type="text" value={char.hit_dice_type} className='char-number'
                onChange={e => setChar(char => {return {...char,hit_dice_type:e.target.value}})}/>

                Hit Dice Count: <input type="number" value={char.hit_dice_count} className='char-number'
                onChange={e => setChar(char => {return {...char,hit_dice_count:e.target.value}})}/><br/><hr/>

                <b>Death Saves</b><br/>
                Success': <select value={char.deathsaves_success}
                onChange={(e) => setChar(char => {return {...char,deathsaves_success:e.target.value}})}>
                    <option value={0}>0</option><option value={1}>1</option>
                    <option value={2}>2</option><option value={3}>3</option>
                </select>
                Fails: <select value={char.deathsaves_fail}
                onChange={(e) => setChar(char => {return {...char,deathsaves_fail:e.target.value}})}>
                    <option value={0}>0</option><option value={1}>1</option>
                    <option value={2}>2</option><option value={3}>3</option>
                </select>
            </td>
            <td>
                Inventory<br/>
                <input type="textarea" value={char.inventory} className='char-area'
                onChange={e => setChar(...char,inventory=e.target.value)}/>
            </td>
            </tr>
            <tr>
                
            </tr>
            </table>
            
            <button className='red-btn'>Save</button>
        </form>
        </>
    )
}
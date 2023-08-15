import './styles.css'
import { useState } from "react";
import ActionForm from "./ActionForm"
import Action from "./Action"

export default function CharacterForm({character, deleteChar, save, addAction, addFeature, deleteAction, deleteFeature}){
    const [char, setChar] = useState(character)

    function addNewFeature(newFeature){
        setChar({...char,features:[...char.features,newFeature]})
        addFeature(newFeature)
    }

    function updateActions(updatedAction){
        setChar({...char,actions:[...char.actions.map(action => {
            if(action.id !== updateActions.id) return action
            console.log(updatedAction.id)
            return updatedAction
        })]})
    }

    function removeAction(id){
        setChar({...char,actions:[...char.actions.filter(action => action.id !== id)]})
        deleteAction(id)
    }

    return(
        <>
        <form className='char-form'>
            <div>
                <b><input type="text" value={char.char_name} className='char-title'
                onChange={e => setChar({...char,char_name:e.target.value})}/></b>

                Level: <input type="number" value={char.char_level} className='char-number'
                onChange={e => setChar({...char,char_level:e.target.value})}/>
                Class: <input type="text" value={char.char_class} className='char-input'
                onChange={e => setChar({...char,char_class:e.target.value})}/>
                Background: <input type="text" value={char.background} className='char-input'
                onChange={e => setChar({...char,background:e.target.value})}/>
            </div>

            <table className='char-table'>
            <tr>
            <td>
                <ul className='char-list'>
                    <li>
                        <label>STRENGTH:</label>
                        <input type="number" value={char.strength} className='char-number'
                        onChange={e => setChar({...char,strength:e.target.value})}/>
                    </li>
                    <li>
                        <label>DEXTERITY:</label>
                        <input type="number" value={char.dexterity} className='char-number'
                        onChange={e => setChar({...char,dexterity:e.target.value})}/>
                    </li>
                    <li>
                        <label>CONSTITUTION:</label>
                        <input type="number" value={char.constitution} className='char-number'
                        onChange={e => setChar({...char,constitution:e.target.value})}/>
                    </li>
                    <li>
                        <label>INTELLIGENCE:</label>
                        <input type="number" value={char.inteligence} className='char-number'
                        onChange={e => setChar({...char,inteligence:e.target.value})}/>
                    </li>
                    <li>
                        <label>WISDOM:</label>
                        <input type="number" value={char.wisdom} className='char-number'
                        onChange={e => setChar({...char,wisdom:e.target.value})}/>
                    </li>
                    <li>
                        <label>CHARISMA:</label>
                        <input type="number" value={char.charisma} className='char-number'
                        onChange={e => setChar({...char,charisma:e.target.value})}/>
                    </li>
                </ul>
            </td>
            <td>
                HP: <input type="number" value={char.current_hp} className='char-number'
                onChange={e => setChar({...char,current_hp:e.target.value})}/>
                /
                <input type="number" value={char.max_hp} className='char-number'
                onChange={e => setChar({...char,max_hp:e.target.value})}/>

                Temp HP: <input type="number" value={char.temp_hp} className='char-number'
                onChange={e => setChar({...char,temp_hp:e.target.value})}/>

                AC: <input type="number" value={char.ac} className='char-number'
                onChange={e => setChar({...char,ac:e.target.value})}/><br/>

                Speed: <input type="number" value={char.speed} className='char-number'
                onChange={e => setChar({...char,speed:e.target.value})}/>

                Initiative: <input type="number" value={char.initiative} className='char-number'
                onChange={e => setChar({...char,initiative:e.target.value})}/><br/>

                Proficiency Bonus: <input type="number" value={char.proficiency_bonus} className='char-number'
                onChange={e => setChar({...char,proficiency_bonus:e.target.value})}/><br/><hr/>

                Hit Dice Type: <input type="text" value={char.hit_dice_type} className='char-number'
                onChange={e => setChar({...char,hit_dice_type:e.target.value})}/>

                Hit Dice Count: <input type="number" value={char.hit_dice_count} className='char-number'
                onChange={e => setChar({...char,hit_dice_count:e.target.value})}/><br/><hr/>

                <b>Death Saves</b><br/>
                Success': <select value={char.deathsaves_success}
                onChange={(e) => setChar({...char,deathsaves_success:e.target.value})}>
                    <option value={0}>0</option><option value={1}>1</option>
                    <option value={2}>2</option><option value={3}>3</option>
                </select>
                Fails: <select value={char.deathsaves_fail}
                onChange={(e) => setChar({...char,deathsaves_fail:e.target.value})}>
                    <option value={0}>0</option><option value={1}>1</option>
                    <option value={2}>2</option><option value={3}>3</option>
                </select>
            </td>
            <td>
                Inventory<br/>
                <textarea value={char.inventory} className='char-area'
                onChange={e => setChar({...char,inventory:e.target.value})}/>
            </td>
            </tr>

            <tr>
            <td>
                <ul className='char-list'>
                <li>
                    <label>Acrobatics:</label>
                    <input type="number" value={char.acrobatics} className='char-number'
                    onChange={e => setChar({...char,acrobatics:e.target.value})}/>
                </li>
                <li>
                    <label>Animal Handling:</label>
                    <input type="number" value={char.animal_handling} className='char-number'
                    onChange={e => setChar({...char,animal_handling:e.target.value})}/>
                </li>
                <li>
                    <label>Arcana:</label>
                    <input type="number" value={char.arcana} className='char-number'
                    onChange={e => setChar({...char,arcana:e.target.value})}/>
                </li>
                <li>
                    <label>Athletics:</label>
                    <input type="number" value={char.athletics} className='char-number'
                    onChange={e => setChar({...char,athletics:e.target.value})}/>
                </li>
                <li>
                    <label>Deception:</label>
                    <input type="number" value={char.deception} className='char-number'
                    onChange={e => setChar({...char,deception:e.target.value})}/>
                </li>
                <li>
                    <label>History:</label>
                    <input type="number" value={char.history} className='char-number'
                    onChange={e => setChar({...char,history:e.target.value})}/>
                </li>
                <li>
                    <label>Insight:</label>
                    <input type="number" value={char.insight} className='char-number'
                    onChange={e => setChar({...char,insight:e.target.value})}/>
                </li>
                <li>
                    <label>Intimidation:</label>
                    <input type="number" value={char.intimidation} className='char-number'
                    onChange={e => setChar({...char,intimidation:e.target.value})}/>
                </li>
                <li>
                    <label>Investigation:</label>
                    <input type="number" value={char.investigation} className='char-number'
                    onChange={e => setChar({...char,investigation:e.target.value})}/>
                </li>
                <li>
                    <label>Medicine:</label>
                    <input type="number" value={char.medicine} className='char-number'
                    onChange={e => setChar({...char,medicine:e.target.value})}/>
                </li>
                <li>
                    <label>Nature:</label>
                    <input type="number" value={char.nature} className='char-number'
                    onChange={e => setChar({...char,nature:e.target.value})}/>
                </li>
                <li>
                    <label>Perception:</label>
                    <input type="number" value={char.perception} className='char-number'
                    onChange={e => setChar({...char,perception:e.target.value})}/>
                </li>
                <li>
                    <label>Performance:</label>
                    <input type="number" value={char.performance} className='char-number'
                    onChange={e => setChar({...char,performance:e.target.value})}/>
                </li>
                <li>
                    <label>Persuasion:</label>
                    <input type="number" value={char.persuation} className='char-number'
                    onChange={e => setChar({...char,persuation:e.target.value})}/>
                </li>
                <li>
                    <label>Religion:</label>
                    <input type="number" value={char.religion} className='char-number'
                    onChange={e => setChar({...char,religion:e.target.value})}/>
                </li>
                <li>
                    <label>Sleight of Hand:</label>
                    <input type="number" value={char.sleight_of_hand} className='char-number'
                    onChange={e => setChar({...char,sleight_of_hand:e.target.value})}/>
                </li>
                <li>
                    <label>Stealth:</label>
                    <input type="number" value={char.stealth} className='char-number'
                    onChange={e => setChar({...char,stealth:e.target.value})}/>
                </li>
                <li>
                    <label>Survival:</label>
                    <input type="number" value={char.survival} className='char-number'
                    onChange={e => setChar({...char,survival:e.target.value})}/>
                </li>
                </ul>
            </td>
            </tr>
            </table>
                Actions
                <table>
                    <tr>
                        <td>Action</td>
                        <td>Bonus/DC</td>
                        <td>Range</td>
                        <td>Damage</td>
                        <td>Notes</td>
                    </tr>
                    {char.actions.map(action => {return(
                        <Action actionIn={action} updateActions={updateActions} removeAction={removeAction} key={action.id} />
                    )})}
                </table>
                <ActionForm addAction={newAction => {
                    setChar({...char,actions:[...char.actions,newAction]})
                    addAction(newAction)}}/>    
                Features
            
            <button className='red-btn' onClick={() => deleteChar(char.id)}>Delete</button>
            <button className='red-btn' onClick={() => save(char)}>Save</button>
        </form>
        </>
    )
}
import './styles.css'
import { useState } from "react";

export default function Action({actionIn, updateActions, removeAction}){
    const [action, setAction] = useState(actionIn)

    function handleDelete(e){
        e.preventDefault()
        if (window.confirm("Are you sure you want to delete this action?")){
            removeAction(action.id)
        }
    }

    return(
        <tr className='action'>
            <td><input value={action.title} className='char-input'
            onChange={e => {setAction({...action,title:e.target.value}); updateActions(action)}}/></td>
            <td><input value={action.bonusOrDC} className='char-number'
            onChange={e => {setAction({...action,bonusOrDC:e.target.value}); updateActions(action)}}/></td>
            <td><input value={action.range} className='char-input'
            onChange={e => {setAction({...action,range:e.target.value}); updateActions(action)}}/></td>
            <td><input value={action.damage} className='char-number'
            onChange={e => {setAction({...action,damage:e.target.value}); updateActions(action)}}/></td>
            <td><input value={action.notes} className='char-input'
            onChange={e => {setAction({...action,notes:e.target.value}); updateActions(action)}}/></td>
            <td><button onClick={e => handleDelete(e)}>X</button></td>
        </tr>
    )
}
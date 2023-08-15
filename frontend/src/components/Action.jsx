import './styles.css'
import { useState } from "react";

export default function Action({actionIn, updateActions}){
    const [action, setAction] = useState(actionIn)

    return(
        <tr className='action'>
            <td><input value={action.title} className='char-input'
            onChange={e => {setAction({...action,title:e.target.value}); updateActions(action)}}/></td>
            <td><input value={action.bonusOrDC} className='char-number'/></td>
            <td><input value={action.range} className='char-input'/></td>
            <td><input value={action.damage} className='char-number'/></td>
            <td><input value={action.notes} className='char-input'/></td>
            <td><button>X</button></td>
        </tr>
    )
}
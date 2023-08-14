import './styles.css'
import { useState } from "react";

export default function Action({actionIn}){
    const [action] = useState(actionIn)

    return(
        <tr className='action'>
            <td><input value={action.title}/></td>
            <td><input value={action.bonusOrDC}/></td>
            <td><input value={action.damage}/></td>
            <td><input value={action.notes}/></td>
        </tr>
    )
}
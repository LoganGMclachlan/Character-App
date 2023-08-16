import './styles.css'
import { useState } from "react";

export default function FeatureForm({addFeature}){
    const [title, setTitle] = useState("New Feature")

    function handleNewFeature(e){
        e.preventDefault()
        if(title !== ""){
            let newFeature = {id:crypto.randomUUID(),title:title,feature_description:""}
            addFeature(newFeature)
        }
        else(alert("Input a feature title first"))
    }

    return(
        <>
            <label>Title: </label>
            <input type="text" value={title}
            onChange={e => setTitle(e.target.value)}/>
            <button onClick={e => handleNewFeature(e)} className='red-btn'>Add</button>
        </>
    )
}
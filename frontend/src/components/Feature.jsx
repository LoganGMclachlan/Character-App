import './styles.css'
import { useState } from "react";

export default function Feature({featureIn, updateFeatures, removeFeature}){
    const [feature, setFeature] = useState(featureIn)

    function handleDelete(e){
        e.preventDefault()
        if (window.confirm("Are you sure you want to delete this feature?")){
            removeFeature(feature.id)
        }
    }

    return(
        <li className='feature'>
            <input value={feature.title} className='feature-title'
            onChange={e => {setFeature({...feature,title:e.target.value}); updateFeatures(feature)}}/>

            <textarea value={feature.feature_description} className='feature-desc'
            onChange={e => {setFeature({...feature,feature_description:e.target.value}); updateFeatures(feature)}}/>

            <button onClick={e => handleDelete(e)} className='feature-btn'>X</button><br/>
        </li>
    )
}
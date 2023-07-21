import './styles.css'
import CharacterItem from './CharacterItem'

export default function CharacterList({characters}){
    return(
        <div className='left-column'>
            <h3 className='left-column-title'>Characters</h3>
            {characters.length === 0 && "You have no characters"}
            <ul className="list">
                {characters.map(character => {
                    return (<CharacterItem character={character}/>)
                })}
            </ul>
            {characters.length <= 5 &&
                <button className='red-btn'>Create New</button>
            }
        </div>
    )
}
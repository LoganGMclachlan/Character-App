import './styles.css'

export default function CharacterList({characters}){
    return(
        <ul className='left-column'>
            <h3 className='left-column-title'>Characters</h3>
            {characters.length === 0 && "You have no characters"}
            {characters.map(character => {
                return (<CharacterItem name={character.name}/>)
            })}
            <button className='red-button'>Create New</button>
        </ul>
    )
}
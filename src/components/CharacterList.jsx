import './styles.css'

export function CharacterList([characters]){
    return(
        <ul>
            {characters.length === 0 && "You have no characters"}
            {characters.map(character => {
                return (<CharacterItem name={character.name}/>)
            })}
            <button>Create New</button>
        </ul>
    )
}
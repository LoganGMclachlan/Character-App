import './styles.css'

export default function CharacterForm({character}){
    return(
        <>
            <h3>{character.name}</h3>
            <h4>Level {character.level} {character.class}</h4>
        </>
    )
}
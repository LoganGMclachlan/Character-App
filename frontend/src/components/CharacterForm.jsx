import './styles.css'

export default function CharacterForm({character}){
    return(
        <>
            <h3>{character.char_name}</h3>
            <h4>Level {character.char_level} {character.class}</h4>
        </>
    )
}
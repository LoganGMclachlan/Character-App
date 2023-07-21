import './styles.css'

export default function Character({character}){
    return(
        <>
            <h3>{character.name}</h3>
            <h4>Level {character.level} {character.class}</h4>
        </>
    )
}
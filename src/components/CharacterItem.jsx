import './styles.css'

export default function CharacterItem({character}){
    return(
        <li className='list-item'>
            <h3 className='list-title'>{character.name}</h3>
            Level {character.level} {character.class}
            <hr/>
        </li>
    )
}
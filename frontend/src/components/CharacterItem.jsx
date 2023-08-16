import './styles.css'

export default function CharacterItem({character,selectChar}){
    return(
        <li className='list-item' key={character.id}>
            <h3 className='list-title' onClick={selectChar}>
            {character.char_name}</h3>
            Level {character.char_level} {character.class}
            <hr/>
        </li>
    )
}
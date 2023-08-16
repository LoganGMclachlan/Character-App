import { useState, useEffect, lazy, Suspense } from 'react'
import hasher from 'crypto'
import './components/styles.css'

import Header from './components/Header'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
const CharacterList = lazy(() => import('./components/CharacterList'))
const CharacterForm = lazy(() => import('./components/CharacterForm'))
const UserDetails = lazy(() => import('./components/UserDetails'))

import Character from './Character'
import db from './DBHandler'

export default function App() {
  const [loginFormVisable, setLoginFormVisable] = useState(false)
  const [userFormVisable, setUserFormVisable] = useState(false)

  // selected character is fetched form local storage
  const [characterSelected, setCharacterSelected] = useState(() => {
    const localValue = localStorage.getItem("CURRENT_CHAR")
    if (localValue === null) return null
    return JSON.parse(localValue)
  })
  // if selected character is changed, save it to local storage
  useEffect(() => {
    localStorage.setItem("CURRENT_CHAR", JSON.stringify(characterSelected))
  }, [characterSelected])


  // current user is fetched form local storage
  const [currentUser, setCurrentUser] = useState(() => {
    const localValue = localStorage.getItem("CURRENT_USER")
    if (localValue === null) return null
    return JSON.parse(localValue)
  })
  // if current user is changed, save it to local storage
  useEffect(() => {
    localStorage.setItem("CURRENT_USER", JSON.stringify(currentUser))
  }, [currentUser])

  /* function to return a string query that will insert
    /  the character into the db */
  function getInsertQuery(char, userId){
    return `INSERT INTO Characters VALUES (` +
    `'${char.id}','${char.char_name}','${char.char_class}',${char.char_level},'${char.background}',` +
    `${char.strength},${char.dexterity},${char.constitution},${char.inteligence},${char.wisdom},${char.charisma},` +
    `${char.acrobatics},${char.animal_handling},${char.arcana},${char.athletics},` +
    `${char.deception},${char.history},${char.insight},${char.intimidation},` +
    `${char.investigation},${char.medicine},${char.nature},${char.perception},` +
    `${char.performance},${char.persuation},${char.religion},${char.sleight_of_hand},` +
    `${char.stealth},${char.survival},` +
    `${char.max_hp},${char.current_hp},${char.temp_hp},` +
    `'${char.hit_dice_type}',${char.hit_dice_count},${char.proficiency_bonus},${char.ac},` +
    `${char.speed},${char.initiative},${char.deathsave_success},${char.deathsave_fail},` +
    `'${char.inventory}','${char.proficiences}','${userId}')`
  }


  async function register(username, email, password) {
    const newUser = {
      id: crypto.randomUUID(),
      username: username, email: email,
      password_hash: hashPassword(password), characters: []
    }
    // trys to add user to database
    const error = await db.addUser(newUser)
    if (error) {
      alert("User with entered name or email already exists")
    }
    else {
      setCurrentUser(newUser)
      setLoginFormVisable(false)
      alert("Account created successfuly")
    }
  }

  function hashPassword(password) {
    return hasher.createHash('sha256').update(password).digest('hex')
  }

  function deleteUser(id) {
    if (window.confirm("are you sure you want to delete this account?")) {
      db.deleteUser({ id: id, username: currentUser.username })
      setCurrentUser(null)
      setCharacterSelected(null)
      setUserFormVisable(false)
      alert("account deleted")
    }
  }

  async function login(username, password) {
    // trys to find a user with entered username 
    let userFound = await db.findUser(username)
    if (userFound !== undefined && hashPassword(password) === userFound.password_hash) {
      // fetches any characters that user might have
      userFound.characters = await db.getCharacters(userFound.id)
      userFound.characters.map(char => {
        char.actions = []
        char.features = []
        return char
      })
      setCurrentUser(userFound)
      setLoginFormVisable(false)
    }
    else { alert("incorrect username or password") }
  }

  async function updateUsername(id, newUsername) {
    // trys to update username
    const error = await db.updatedUsername({ id: id, username: newUsername })
    if (error) {
      alert("User with entered name already exists")
    }
    else {
      setCurrentUser(user => { return { ...user, username: newUsername } })
      alert("username updated successfuly")
    }
  }

  async function updateEmail(id, newEmail) {
    // trys to update email
    const error = await db.updatedEmail({ id: id, email: newEmail })
    if (error) {
      alert("User with entered email already exists")
    }
    else {
      setCurrentUser(user => { return { ...user, email: newEmail } })
      alert("email updated successfuly")
    }
  }

  function logout() {
    setCurrentUser(null)
    setUserFormVisable(false)
    setCharacterSelected(null)
  }

  function addCharacter(charName) {
    const newChar = new Character(charName)
    setCurrentUser({...currentUser,characters:[...currentUser.characters, newChar]})
    db.addCharacter({ sql: getInsertQuery(newChar,currentUser.id) })
  }

  function deleteCharacter(id) {
    if (window.confirm("are you sure you want to delete this character?")) {
      // deletes actions
      characterSelected.actions.forEach(action => {
        db.deleteAction({id:action.id})
      })
      // deletes features
      characterSelected.features.forEach(feature => {
        db.deleteFeature({id:feature.id})
      })

      setCharacterSelected(null)
      setCurrentUser({ ...currentUser, characters:currentUser.characters.filter(char => char.id !== id)})
      db.deleteCharacter({ id: id })// deletes character
      console.log("char deleted")
    }
  }

  function updateCharacter(updatedCharacter) {
    // deletes old character and its actions and features from db
    characterSelected.actions.forEach(action => {
      db.deleteAction({id:action.id})
    })
    characterSelected.features.forEach(feature => {
      db.deleteFeature({id:feature.id})
    })
    db.deleteCharacter({id:characterSelected.id})

    // saves updated character, actions, and features to db
    db.addCharacter({sql:getInsertQuery(updatedCharacter,currentUser.id)})
    updatedCharacter.actions.forEach(action => {
      db.addAction({action:action,charId:updatedCharacter.id})
    })
    updatedCharacter.features.forEach(feature => {
      db.addFeature({feature:feature,charId:updatedCharacter.id})
    })
  }

  function addAction(newAction){
    setCurrentUser({...currentUser,characters:currentUser.characters.map(char => {
      if (char.id !== characterSelected.id) return char
      db.addAction({action:newAction,charId:characterSelected.id})
      return {...char,actions:[...char.actions,newAction]}
    })})
  }

  function deleteAction(id){
    setCurrentUser({...currentUser,characters:currentUser.characters.map(char =>{
      if (char.id !== characterSelected.id) return char
      db.deleteAction({id:id})
      return {...char,actions:[...char.actions.filter(action => action.id !== id)]}
    })})
  }

  function addFeature(newFeature){
    setCurrentUser({...currentUser,characters:currentUser.characters.map(char => {
      if (char.id !== characterSelected.id) return char
      db.addFeature({feature:newFeature,charId:characterSelected.id})
      return {...char,features:[...char.features,newFeature]}
    })})
  }

  function deleteFeature(id){
    setCurrentUser({...currentUser,characters:currentUser.characters.map(char =>{
      if (char.id !== characterSelected.id) return char
      db.deleteFeature({id:id})
      return {...char,features:[...char.features.filter(feature => feature.id !== id)]}
    })})
  }

  return (
    <>
      <Header user={currentUser} showLogin={setLoginFormVisable}
        showUser={() => { setUserFormVisable(true); setCharacterSelected(null); }} />

      <div className='left-column'>
        <h3 className='left-column-title'>Characters</h3>
        {currentUser
          ? <Suspense fallback={<p>Loading Characters...</p>}>
              <CharacterList characters={currentUser.characters} addCharacter={addCharacter}
                selectChar={char => { setUserFormVisable(false); setCharacterSelected(char); }} />
            </Suspense>
          : <p><b onClick={() => { setLoginFormVisable(true) }}>login </b>
            to view and create characters.</p>
        }
      </div>

      {characterSelected &&
        <div className='character-form'>
          <button className='x-btn' onClick={() => { setCharacterSelected(null) }}>X</button>
          <Suspense fallback={<p>Loading Character...</p>}>
            <CharacterForm character={characterSelected} deleteChar={deleteCharacter} save={updateCharacter}
            addAction={addAction} addFeature={addFeature} deleteAction={deleteAction} deleteFeature={deleteFeature}/>
          </Suspense>
        </div>
      }

      {loginFormVisable && (
        <div className='small-form'>
          <button className='x-btn' onClick={() => { setLoginFormVisable(false) }}>X</button>
          <LoginForm login={login} />
          <RegisterForm register={register} />
        </div>)
      }

      {userFormVisable && (
        <div className='small-form'>
          <button className='x-btn' onClick={() => { setUserFormVisable(false) }}>X</button>
          <Suspense fallback={<p>Loading User Info...</p>}>
            <UserDetails updateUsername={updateUsername} updateEmail={updateEmail}
              logout={logout} deleteUser={deleteUser} user={currentUser} />
          </Suspense>
        </div>)
      }
    </>
  )
}
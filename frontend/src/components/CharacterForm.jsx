import './styles.css'
import { useState } from "react";

export default function CharacterForm({character}){
    const [char, setChar] = useState(character);
    return(
        <>
            <h3>{char.name}</h3>
            <h4>Level {char.level} {char.charClass}</h4>
            <form>
                {/*MAIN TABLE*/}
                <table>
                    {/*MAIN TABLE ROW 1*/}
                    <tr>
                        <td>
                            {/*name*/}
                            <label htmlFor="name">Name:</label><br/>
                            <input type="text" value={char.name}
                                   onChange={(e) => setChar(...char.name=e.target.value)}/><br/>
                        </td>
                        <td>
                            {/*level*/}
                            <label htmlFor="level">Level:</label><br/>
                            <input type="number" value={char.level}
                                   onChange={(e) => setChar(...char.level=e.target.value)}/><br/>
                        </td>
                        <td>
                            {/*charClass*/}
                            <label htmlFor="charClass">Class:</label><br/>
                            <input type="text" value={char.charClass}
                                   onChange={(e) => setChar(...char.charClass=e.target.value)}/><br/>
                        </td>
                    </tr>
                    {/*MAIN TABLE ROW 2*/}
                    <tr>
                        <td>
                            {/*ATTRIBUTES TABLE*/}
                            <table>
                                <tr><td>
                                    {/*str*/}
                                    <label htmlFor="str">STR:</label><br/>
                                    <input type="number" value={char.str}
                                           onChange={(e) => setChar(...char.str=e.target.value)}/><br/>
                                </td></tr>
                                <tr><td>
                                    {/*dex*/}
                                    <label htmlFor="dex">DEX:</label><br/>
                                    <input type="number" value={char.dex}
                                           onChange={(e) => setChar(...char.dex=e.target.value)}/><br/>
                                </td></tr>
                                <tr><td>
                                    {/*con*/}
                                    <label htmlFor="con">CON:</label><br/>
                                    <input type="number" value={char.con}
                                           onChange={(e) => setChar(...char.con=e.target.value)}/><br/>
                                </td></tr>
                                <tr><td>
                                    {/*int*/}
                                    <label htmlFor="int">INT:</label><br/>
                                    <input type="number" value={char.int}
                                           onChange={(e) => setChar(...char.int=e.target.value)}/><br/>
                                </td></tr>
                                <tr><td>
                                    {/*wis*/}
                                    <label htmlFor="wis">WIS:</label><br/>
                                    <input type="number" value={char.wis}
                                           onChange={(e) => setChar(...char.wis=e.target.value)}/><br/>
                                </td></tr>
                                <tr><td>
                                    {/*cha*/}
                                    <label htmlFor="cha">CHA:</label><br/>
                                    <input type="number" value={char.cha}
                                           onChange={(e) => setChar(...char.cha=e.target.value)}/><br/>
                                </td></tr>
                            </table>
                        </td>
                        <td>
                            {/*HEALTH ETC TABLE*/}
                            <table>
                                <tr>
                                    <td>
                                        {/*current*/}
                                        <label htmlFor="current">Current HP:</label><br/>
                                        <input type="number" value={char.current}
                                               onChange={(e) => setChar(...char.current=e.target.value)}/><br/>
                                    </td>
                                    <td>
                                        {/*max*/}
                                        <label htmlFor="max">Max HP:</label><br/>
                                        <input type="number" value={char.max}
                                               onChange={(e) => setChar(...char.max=e.target.value)}/><br/>
                                    </td>
                                    <td>
                                        {/*temp*/}
                                        <label htmlFor="temp">Temp HP:</label><br/>
                                        <input type="number" value={char.temp}
                                               onChange={(e) => setChar(...char.temp=e.target.value)}/><br/>
                                    </td>
                                    <td>
                                        {/*ac*/}
                                        <label htmlFor="ac">AC:</label><br/>
                                        <input type="number" value={char.ac}
                                               onChange={(e) => setChar(...char.ac=e.target.value)}/><br/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        {/*speed*/}
                                        <label htmlFor="speed">Speed:</label><br/>
                                        <input type="number" value={char.speed}
                                               onChange={(e) => setChar(...char.speed=e.target.value)}/><br/>
                                    </td>
                                    <td>
                                        {/*initiative*/}
                                        <label htmlFor="initiative">Initiative:</label><br/>
                                        <input type="number" value={char.initiative}
                                               onChange={(e) => setChar(...char.initiative=e.target.value)}/><br/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        {/*proficiencyBonus*/}
                                        <label htmlFor="proficiencyBonus">Proficiency Bonus:</label><br/>
                                        <input type="number" value={char.proficiencyBonus}
                                               onChange={(e) => setChar(...char.proficiencyBonus=e.target.value)}/><br/>
                                    </td>
                                </tr>
                            </table>
                        </td>
                        <td>
                            {/*DEATH SAVES TABLE*/}
                            <table>
                                <tr><td>
                                    {/*deathSavesSuccess*/}
                                    <label htmlFor="deathSavesSuccess">Successful Death Saves:</label><br/>
                                    <select value={char.deathSavesSuccess}
                                            onChange={(e) => setChar(...char.deathSavesSuccess=e.target.value)}>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </td></tr>
                                <tr><td>
                                    {/*deathSavesfails*/}
                                    <label htmlFor="deathSavesfails">Failed Death Saves:</label><br/>
                                    <select value={char.deathSavesfails}
                                            onChange={(e) => setChar(...char.deathSavesfails=e.target.value)}>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </td></tr>
                            </table>
                        </td>
                    </tr>
                    {/*MAIN TABLE ROW 3*/}
                    <tr>
                        <td>
                            {/*SKILLS TABLE*/}
                            <table>
                                <tr><td>
                                    {/*acrobatics*/}
                                    <label htmlFor="acrobatics">Acrobatics Score:</label><br/>
                                    <input type="number" value={char.acrobatics}
                                           onChange={(e) => setChar(...char.acrobatics=e.target.value)}/><br/>
                                </td></tr>
                                <tr><td>
                                    {/*animalHandling*/}
                                    <label htmlFor="animalHandling">Animal Handling Score:</label><br/>
                                    <input type="number" value={char.animalHandling}
                                           onChange={(e) => setChar(...char.animalHandling=e.target.value)}/><br/>
                                </td></tr>
                                <tr><td>
                                    {/*arcana*/}
                                    <label htmlFor="arcana">Arcana Score:</label><br/>
                                    <input type="number" value={char.arcana}
                                           onChange={(e) => setChar(...char.arcana=e.target.value)}/><br/>
                                </td></tr>
                                <tr><td>
                                    {/*athletics*/}
                                    <label htmlFor="athletics">Athletics Score:</label><br/>
                                    <input type="number" value={char.athletics}
                                           onChange={(e) => setChar(...char.athletics=e.target.value)}/><br/>
                                </td></tr>
                                <tr><td>
                                    {/*deception*/}
                                    <label htmlFor="deception">Deception Score:</label><br/>
                                    <input type="number" value={char.deception}
                                           onChange={(e) => setChar(...char.deception=e.target.value)}/><br/>
                                </td></tr>
                                <tr><td>
                                    {/*history*/}
                                    <label htmlFor="history">History Score:</label><br/>
                                    <input type="number" value={char.history}
                                           onChange={(e) => setChar(...char.history=e.target.value)}/><br/>
                                </td></tr>
                                <tr><td>
                                    {/*insight*/}
                                    <label htmlFor="insight">Insight Score:</label><br/>
                                    <input type="number" value={char.insight}
                                           onChange={(e) => setChar(...char.insight=e.target.value)}/><br/>
                                </td></tr>
                                <tr><td>
                                    {/*intimidation*/}
                                    <label htmlFor="intimidation">Intimidation Score:</label><br/>
                                    <input type="number" value={char.intimidation}
                                           onChange={(e) => setChar(...char.intimidation=e.target.value)}/><br/>
                                </td></tr>
                                <tr><td>
                                    {/*investigation*/}
                                    <label htmlFor="investigation">Investigation Score:</label><br/>
                                    <input type="number" value={char.investigation}
                                           onChange={(e) => setChar(...char.investigation=e.target.value)}/><br/>
                                </td></tr>
                                <tr><td>
                                    {/*medicine*/}
                                    <label htmlFor="medicine">Medicine Score:</label><br/>
                                    <input type="number" value={char.medicine}
                                           onChange={(e) => setChar(...char.medicine=e.target.value)}/><br/>
                                </td></tr>
                                <tr><td>
                                    {/*nature*/}
                                    <label htmlFor="nature">Nature Score:</label><br/>
                                    <input type="number" value={char.nature}
                                           onChange={(e) => setChar(...char.nature=e.target.value)}/><br/>
                                </td></tr>
                                <tr><td>
                                    {/*perception*/}
                                    <label htmlFor="perception">Perception Score:</label><br/>
                                    <input type="number" value={char.perception}
                                           onChange={(e) => setChar(...char.perception=e.target.value)}/><br/>
                                </td></tr>
                                <tr><td>
                                    {/*performance*/}
                                    <label htmlFor="performance">Performance Score:</label><br/>
                                    <input type="number" value={char.performance}
                                           onChange={(e) => setChar(...char.performance=e.target.value)}/><br/>
                                </td></tr>
                                <tr><td>
                                    {/*persuasion*/}
                                    <label htmlFor="persuasion">Persuasion Score:</label><br/>
                                    <input type="number" value={char.persuation}
                                           onChange={(e) => setChar(...char.persuation=e.target.value)}/><br/>
                                </td></tr>
                                <tr><td>
                                    {/*religion*/}
                                    <label htmlFor="religion">Religion Score:</label><br/>
                                    <input type="number" value={char.religion}
                                           onChange={(e) => setChar(...char.religion=e.target.value)}/><br/>
                                </td></tr>
                                <tr><td>
                                    {/*sleightOfHand*/}
                                    <label htmlFor="sleightOfHand">Sleight of Hand Score:</label><br/>
                                    <input type="number" value={char.sleightOfHand}
                                           onChange={(e) => setChar(...char.sleightOfHand=e.target.value)}/><br/>
                                </td></tr>
                                <tr><td>
                                    {/*stealth*/}
                                    <label htmlFor="stealth">Stealth Score:</label><br/>
                                    <input type="number" value={char.stealth}
                                           onChange={(e) => setChar(...char.stealth=e.target.value)}/><br/>
                                </td></tr>
                                <tr><td>
                                    {/*survival*/}
                                    <label htmlFor="survival">Survival Score:</label><br/>
                                    <input type="number" value={char.survival}
                                           onChange={(e) => setChar(...char.survival=e.target.value)}/><br/>
                                </td></tr>
                            </table>
                        </td>
                    </tr>
                </table>

                {/*hitDiceType*/}
                <label htmlFor="hitDiceType">Hit Dice Type:</label><br/>
                <input type="text" value={char.hitDiceType}
                       onChange={(e) => setChar(...char.hitDiceType=e.target.value)}/><br/>
                {/*hitDiceCount*/}
                <label htmlFor="hitDiceCount">Hit Dice Count:</label><br/>
                <input type="text" value={char.hitDiceCount}
                       onChange={(e) => setChar(...char.hitDiceCount=e.target.value)}/><br/>

                {/*inventory*/}
                <label htmlFor="inventory">Inventory:</label><br/>
                <input type="textarea" value={char.inventory}
                       onChange={(e) => setChar(...char.inventory=e.target.value)}/><br/>
                {/*proficiences*/}
                <label htmlFor="proficiencies">Proficiencies:</label><br/>
                <input type="textarea" value={char.proficiences}
                       onChange={(e) => setChar(...char.proficiences=e.target.value)}/><br/>

                {/*background*/}
                <label htmlFor="background">Background:</label><br/>
                <input type="textarea" value={char.background}
                       onChange={(e) => setChar(...char.background=e.target.value)}/><br/>
            </form>

            <form>
                <h2>Add Action</h2>
                <label htmlFor="title">Title:</label><br/>
                <input type="text" value={char.actions[char.actions.length].title}/><br/>
            </form>
        </>
    )
}
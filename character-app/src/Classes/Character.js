import Abilities from './Abilities'
import Skills from './Skills'
import SavingThrows from './SavingThrows'
import Proficiencies from './Proficiencies'

class Character{
    constructor(name){
        this.name = name
        this.totalLevel = 1
        this.race = 'human'
        this.charClass = '1 fighter'
        this.background = 'unknown'
        this.maxHp = 0
        this.currentHp = 0
        this.tempHp = 0
        this.armorClass = 10
        this.initiative = '+0'
        this.proficiencyBonus = '+2'
        this.speed = 30
        this.abilities = new Abilities
        this.skills = new Skills
        this.savingThrows = new SavingThrows
        this.defences = 'add any resistances or imunities here'
        this.proficiencies = new Proficiencies
        this.attacks = 'add your attacks here'
        this.inventory = 'add your items here'
        this.features = 'add your features here'
        this.description = 'add a decrition here'
    }

    UpdateCharacter(name,totalLevel,race,charClass,background,maxHp,currentHp,tempHp,
        armorClass,initiative,proficiencyBonus,speed,abilities,skills,savingThrows,
        defences,proficiencies,attacks,inventory,features,description) {
        this.name = name
        this.totalLevel = totalLevel
        this.race = race
        this.charClass = charClass
        this.background = background
        this.maxHp = maxHp
        this.currentHp = currentHp
        this.tempHp = tempHp
        this.armorClass = armorClass
        this.initiative = initiative
        this.proficiencyBonus = proficiencyBonus
        this.speed = speed
        this.abilities = abilities
        this.skills = skills
        this.savingThrows = savingThrows
        this.defences = defences
        this.proficiencies = proficiencies
        this.attacks = attacks
        this.inventory = inventory
        this.features = features
        this.description = description
    }
}
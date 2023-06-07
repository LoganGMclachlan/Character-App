import Abilities from './Abilities'
import Skills from './Skills'
import SavingThrows from './SavingThrows'
import Proficiencies from './Proficiencies'

class Character{
    constructor(name){
        this.name = name
        this.totalLevel = 1
        this.race = 'human'
        this.class = '1 fighter'
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
}
export default class Character{
    // creates a new character with default stats
    constructor(name){
        this.id=crypto.randomUUID
        this.name=name
        this.level=1
        this.charClass=""
        this.background=""
        
        this.str=10
        this.dex=10
        this.con=10
        this.int=10
        this.wis=10
        this.cha=10

        this.acrobatics=10
        this.animalHandling=10
        this.arcana=10
        this.athletics=10
        this.deception=10
        this.history=10
        this.insight=10
        this.intimidation=10
        this.investigation=10
        this.medicine=10
        this.nature=10
        this.perception=10
        this.performance=10
        this.persuation=10
        this.religion=10
        this.sleightOfHand=10
        this.stealth=10
        this.survival=10
        
        this.max=10
        this.current=10
        this.temp=0
        this.hitDiceType="d8"
        this.hitDiceCount="1"

        this.proficiencyBonus=2
        this.ac=10
        this.speed=30
        this.initiative=0

        this.deathSavesSuccess=0
        this.deathSavesfails=0
        
        this.actions=[{
            id:crypto.randomUUID,
            title:"Unarmed Strike",
            bonusOrDC:2,
            range:"5ft",
            damage:1,
            notes:""
        }]
        
        this.features=[{
            id:crypto.randomUUID,
            title:"Feature Title",
            description:"Add all your new features here"
        }]
        
        this.inventory=""
        this.proficiences="common"
    }
}
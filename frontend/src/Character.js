export default class Character{
    // creates a new character with default stats
    constructor(name){
        this.id=crypto.randomUUID()
        this.name=name
        this.level=1
        this.charClass=""
        this.background=""
        
        this.str=0
        this.dex=0
        this.con=0
        this.int=0
        this.wis=0
        this.cha=0

        this.acrobatics=0
        this.animalHandling=0
        this.arcana=0
        this.athletics=0
        this.deception=0
        this.history=0
        this.insight=0
        this.intimidation=0
        this.investigation=0
        this.medicine=0
        this.nature=0
        this.perception=0
        this.performance=0
        this.persuation=0
        this.religion=0
        this.sleightOfHand=0
        this.stealth=0
        this.survival=0
        
        this.maxHp=10
        this.currentHp=10
        this.tempHp=0
        this.hitDiceType="d8"
        this.hitDiceCount=1

        this.proficiencyBonus=2
        this.ac=10
        this.speed=30
        this.initiative=0

        this.deathSavesSuccess=0
        this.deathSavesfails=0
        
        this.inventory=""
        this.proficiences="common,dagger"
        
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
    }

    /* method to return a string query that will insert
    /  the character into the db */
    getInsertQuery(userId){
        return `INSERT INTO Characters VALUES ('${this.id}','${this.name}','${this.charClass}',${this.level},'${this.background}',${this.str},${this.dex},${this.con},${this.int},${this.wis},${this.cha},${this.acrobatics},${this.animalHandling},${this.arcana},${this.athletics},${this.deception},${this.history},${this.insight},${this.intimidation},${this.investigation},${this.medicine},${this.nature},${this.perception},${this.performance},${this.persuation},${this.religion},${this.sleightOfHand},${this.stealth},${this.survival},${this.maxHp},${this.currentHp},${this.tempHp},'${this.hitDiceType}',${this.hitDiceCount},${this.proficiencyBonus},${this.ac},${this.speed},${this.initiative},${this.deathSavesSuccess},${this.deathSavesfails},'${this.inventory}','${this.proficiences}','${userId}')`
    }
}
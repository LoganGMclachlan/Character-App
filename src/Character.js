export default class Character{
    // creates a new character with default stats
    constructor(name){
        this.name=name
        this.level=1
        this.charClass=""
        this.background=""
        this.abilities={
            str:10,
            dex:10,
            con:10,
            int:10,
            wis:10,
            cha:10
        }
        this.skills={
            // proficiency can be "", half-proficient, proficient, or expertise
            acrobatics:[10,""],
            animalHandling:[10,""],
            arcana:[10,""],
            athletics:[10,""],
            deception:[10,""],
            history:[10,""],
            insight:[10,""],
            intimidation:[10,""],
            investigation:[10,""],
            medicine:[10,""],
            nature:[10,""],
            perception:[10,""],
            performance:[10,""],
            persuation:[10,""],
            religion:[10,""],
            sleightOfHand:[10,""],
            stealth:[10,""],
            survival:[10,""]
        }
        this.hp={
            max:10,
            current:10,
            temp:0
        }
        this.proficiencyBonus=2
        this.ac=10
        this.speed=30
        this.initiative=0
        this.deathSaves={success:0,fails:0}
        this.actions=[{
            id:crypto.randomUUID,
            title:"Unarmed Strike",
            attackBonus:2,
            DC:null,
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
        this.proficiences={weapons:[],armour:[],tools:[],languages:["common"]}
    }
}
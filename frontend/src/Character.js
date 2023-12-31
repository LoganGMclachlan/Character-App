export default class Character{
    // creates a new character with default stats
    constructor(name){
        this.id=crypto.randomUUID()
        this.char_name=name
        this.char_level=1
        this.class=""
        this.background=""
        
        this.strength=0
        this.dexterity=0
        this.constitution=0
        this.inteligence=0
        this.wisdom=0
        this.charisma=0

        this.acrobatics=0
        this.animal_handling=0
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
        this.sleight_of_hand=0
        this.stealth=0
        this.survival=0
        
        this.max_hp=10
        this.current_hp=10
        this.temp_hp=0
        this.hit_dice_type="d8"
        this.hit_dice_count=1

        this.proficiency_bonus=2
        this.ac=10
        this.speed=30
        this.initiative=0

        this.deathsave_success=0
        this.deathsave_fail=0
        
        this.invantory=""
        this.proficiencies="common,dagger"
        
        this.actions=[{
            id:crypto.randomUUID,
            title:"Unarmed Strike",
            bonus_or_dc:2,
            action_range:"5ft",
            damage:1,
            notes:""
        }]
        
        this.features=[]
    }
}